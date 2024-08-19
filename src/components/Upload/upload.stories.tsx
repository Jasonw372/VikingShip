import {Meta, StoryObj} from "@storybook/react";
import {Upload, UploadFile} from "./upload.tsx";
import {action} from "@storybook/addon-actions";
import Icon from "../Icon";
import Button from "../Button";

const meta = {
  title: "Upload组件",
  component: Upload,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Upload>;

type Story = StoryObj<typeof meta>;

const defaultFileList: Array<UploadFile> = [
  {
    uid: '123', size: 1234, name: "hello.md", status: "uploading", percent: 40,
  },
  {
    uid: '124', size: 1234, name: "hello.md", status: "success", percent: 100,
  },
  {
    uid: '125', size: 1234, name: "hello.md", status: "error", percent: 0,
  }
]

export const Default: Story = {
  name: "默认Upload组件",
  parameters:{
    docs: {
      source: {
        code: `
        <Upload
          action="https://run.mocky.io/v3/380b30b6-2917-461e-af23-fd84bfe31b79/"
          onProgress={action("progress")}
          onSuccess={action("success")}
          onError={action("error")}
          onChange={action("change")}
          onRemove={action("remove")}
          children={
            <Button btnType="primary">点我上传文件</Button>
          }
          drag={false}
        />
        `
      }
    }
  },
  args: {
    action: "https://run.mocky.io/v3/380b30b6-2917-461e-af23-fd84bfe31b79/",
    onProgress: action("progress"),
    onSuccess: action("success"),
    onError: action("error"),
    onChange: action("change"),
    onRemove: action("remove"),
    children: (
      <Button btnType="primary">点我上传文件</Button>
    ),
    drag: false
  },
}

export const Func: Story = {
  name: "配置beforeUpdate函数-检查文件大小",
  args: {
    action: "https://run.mocky.io/v3/380b30b6-2917-461e-af23-fd84bfe31b79/",
    onProgress: action("progress"),
    onSuccess: action("success"),
    onError: action("error"),
    onChange: action("change"),
    onRemove: action("remove"),
    children: (
      <Button btnType="primary">点我上传文件</Button>
    ),
    drag: false,
    beforeUpload: (file: File) => {
      if (Math.round(file.size / 1024) > 50) {
        alert("文件大小超出限制")
        return false
      }
      return true
    }
  }
}

export const Custom: Story = {
  name: "自定义Upload组件",
  args: {
    defaultFileList: defaultFileList,
    action: "https://run.mocky.io/v3/380b30b6-2917-461e-af23-fd84bfe31b79/",
    onProgress: action("progress"),
    onSuccess: action("success"),
    onError: action("error"),
    onChange: action("change"),
    onRemove: action("remove"),
    name: "my-file",
    data: {'key': "value"},
    headers: {
      'X-Powered-By': 'vikingship'
    },
    multiple: true,
    drag: false,
    children: (
      <>
        <Button btnType="link">
          <Icon icon={"upload"} size="1x"/> 点我上传文件
        </Button>


      </>
    )
    // beforeUpload: checkFileSize
  },
};

export const Full: Story = {
  name: "可拖拽自定义Upload组件",
  args: {
    defaultFileList: defaultFileList,
    action: "https://run.mocky.io/v3/380b30b6-2917-461e-af23-fd84bfe31b79/",
    onProgress: action("progress"),
    onSuccess: action("success"),
    onError: action("error"),
    onChange: action("change"),
    onRemove: action("remove"),
    name: "my-file",
    data: {'key': "value"},
    headers: {
      'X-Powered-By': 'vikingship'
    },
    multiple: true,
    drag: true,
    children: (
      <div style={{
        marginTop: "30px"
      }}>
        <Icon icon={"upload"} size="3x" theme="secondary"/>
        <br/>
        <p>Drag file over to upload</p>
      </div>
    )
    // beforeUpload: checkFileSize
  },
};

export default meta

