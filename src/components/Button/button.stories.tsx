import {Meta, type StoryObj} from "@storybook/react";
import Button from "./button.tsx";


const meta = {
  title: "Button组件",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    btnType: "default",
    children: 'Button',
  },
};

export const Primary: Story = {
  args: {
    btnType: "primary",
    children: 'Button',
  },
};


export const Danger: Story = {
  args: {
    btnType: "danger",
    children: 'Button',
  },
};

export const Link: Story = {
  args: {
    btnType: "link",
    href: "https://www.baidu.com",
    children: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    btnType: "default",
    disabled: true,
    children: 'Button',
  },
}
export default meta;