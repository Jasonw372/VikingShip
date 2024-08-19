import React, {FC, useState, DragEvent} from "react";
import classNames from "classnames";

interface DraggerProps {
  children: React.ReactNode,
  onFile: (files: FileList) => void
}

export const Dragger: FC<DraggerProps> = ({onFile, children}) => {

  const [dragOver, setDragOver] = useState(false)
  const className = classNames('viking-uploader-dragger', {
    'is-dragover': dragOver
  })
  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault()
    setDragOver(false)
    onFile(e.dataTransfer.files)
  }
  const handleDrag = (e: DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault()
    setDragOver(over)
  }
  return (
    <div className={className} onDragOver={e => {
      handleDrag(e, true)
    }} onDragLeave={e => {
      handleDrag(e, false)
    }} onDrop={handleDrop}>
      {children}
    </div>
  )
}

export default Dragger