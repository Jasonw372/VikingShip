import React, {ChangeEvent, FC, useRef, useState} from "react";
import axios from "axios";
import {v4 as uuid} from 'uuid';
import {UploadList} from "./uploadList.tsx";
import Dragger from "./dragger.tsx";

export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error'

export interface UploadFile {
  uid: string,
  size: number,
  name: string,
  status?: UploadFileStatus,
  percent?: number,
  raw?: File,
  response?: string | object | null;
  error?: string | Error | null;
}

export interface UploadProps {
  action: string;
  defaultFileList?: Array<UploadFile>;
  headers?: object;
  name?: string;
  data?: object;
  withCredentials?: boolean;
  accept?: string;
  multiple: boolean;
  children: React.ReactNode;
  drag?: boolean;
  beforeUpload?: (file: File) => boolean | Promise<File>;
  onProgress?: (percentage: number, file: UploadFile) => void;
  onSuccess?: (data: object, file: UploadFile) => void;
  onError?: (error: object, file: UploadFile) => void;
  onChange?: (file: UploadFile) => void;
  onRemove?: (file: UploadFile) => void;

}

export const Upload: FC<UploadProps> = ({
                                          defaultFileList,
                                          name = "file",
                                          drag = false,
                                          withCredentials,
                                          data,
                                          action,
                                          headers,
                                          beforeUpload,
                                          onProgress,
                                          onSuccess,
                                          onError,
                                          onChange,
                                          onRemove,
                                          accept, multiple,
                                          children,
                                        }) => {
  const [fileList, setFileList] = useState<Array<UploadFile>>(defaultFileList || [])
  const updateFileList = (updateFile: UploadFile, updateObj: Partial<UploadFile>) => {
    setFileList(prevList => {
      return prevList.map(file => {
        if (file.uid === updateFile.uid) {
          return {
            ...file,
            ...updateObj
          }
        } else {
          return file
        }
      })
    })
  }
  const fileInput = useRef<HTMLInputElement>(null)
  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) {
      return
    }
    uploadFiles(files)
    if (fileInput.current) {
      fileInput.current.value = ""
    }
  }

  const post = (file: File) => {
    const formData = new FormData()
    formData.append(name || 'file', file)
    if (data) {
      Object.keys(data).forEach(key => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        formData.append(key, data[key])
      })
    }
    const _file: UploadFile = {
      uid: uuid(),
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file
    }
    setFileList(prevList => {
      return [_file, ...prevList]
    })
    axios.post(action, formData, {
      headers: {
        ...headers,
        'Content-Type': 'multipart/form-data'
      },
      withCredentials,
      onUploadProgress: (e) => {
        const percentage = Math.round((e.loaded * 100) / e.total!) || 0;
        if (percentage < 100) {
          updateFileList(_file, {
            percent: percentage,
            status: "uploading"
          })
          _file.status = 'uploading'
          _file.percent = percentage
          if (onProgress) {
            onProgress(percentage, _file)
          }
        }
      }
    }).then(res => {
      updateFileList(_file, {status: "success", response: res.data, percent: 100})
      _file.status = 'success'
      _file.response = res.data
      _file.percent = 100
      if (onSuccess) {
        onSuccess(res.data, _file)
      }

      if (onChange) {
        onChange(_file)
      }
    }).catch(err => {
      updateFileList(_file, {status: "success", response: err})
      _file.status = 'error'
      _file.error = err
      if (onError) {
        onError(err, _file)
      }
      if (onChange) {
        onChange(_file)
      }
    })
  }

  const handleRemove = (file: UploadFile) => {
    setFileList((prevList) => {
      return prevList.filter(item => item.uid !== file.uid)
    })
    if (onRemove) {
      onRemove(file)
    }
  }

  const uploadFiles = (files: FileList) => {
    const postFiles = Array.from(files)
    postFiles.forEach(file => {
      if (!beforeUpload) {
        post(file)
      } else {
        const result = beforeUpload(file)
        if (result && result instanceof Promise) {
          result.then(processedFile => {
            post(processedFile)
          })
        } else if (result) {
          post(file)
        }
      }

    })
  }

  return (
    <div className="viking-upload-component">
      <div className="viking-upload-input" style={{display: 'inline-block'}} onClick={handleClick}>
        {drag ? <Dragger onFile={(files) => {
          uploadFiles(files)
        }}>{children}</Dragger> : children}
      </div>

      <input className="viking-file-input" style={{display: "none"}} type="file" ref={fileInput} accept={accept}
             multiple={multiple}
             onChange={handleFileChange}/>
      <UploadList fileList={fileList} onRemove={handleRemove}></UploadList>
    </div>
  )
}