import {Meta, type StoryObj} from "@storybook/react";
import Alert from "./alert.tsx";


const meta = {
  title: "Alert组件",
  component: Alert,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Alert>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "默认Alert",
  },
};
export const Success: Story = {
  args: {
    type: "success",
    title: "成功Alert",
  },
};

export const Danger: Story = {
  args: {
    type: "danger",
    title: "危险Alert",
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    title: "警告Alert",
  },
};

export const Description: Story = {
  args: {
    title: "带描述的Alert",
    description: "这是一个带描述的Alert",
  },
};

// 不可关闭的
export const Unclosable: Story = {
  args: {
    title: "不可关闭的Alert",
    closable: false,
  },
};

export default meta;