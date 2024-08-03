import {Meta, type StoryObj} from "@storybook/react";
import Tab from "./index.tsx";

const meta = {
  title: "Tabs组件",
  component: Tab,
  subcomponents: {
    Item: Tab.Item,
  },
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Tab>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultIndex: 0,
    children: [
      <Tab.Item label="选项卡一">this is content one</Tab.Item>,
      <Tab.Item label="选项卡二">this is content two</Tab.Item>,
      <Tab.Item label="用户管理">this is content three</Tab.Item>,
    ],
  },
};

export const Card: Story = {
  args: {
    defaultIndex: 0,
    type: 'card',
    children: [
      <Tab.Item label="选项卡一">this is content one</Tab.Item>,
      <Tab.Item label="选项卡二">this is content two</Tab.Item>,
      <Tab.Item label="用户管理">this is content three</Tab.Item>,
    ],
  },
};

export const Disabled: Story = {
  args: {
    defaultIndex: 1,
    children: [
      <Tab.Item label="选项卡一" disabled={true}>this is content one</Tab.Item>,
      <Tab.Item label="选项卡二">this is content two</Tab.Item>,
      <Tab.Item label="用户管理">this is content three</Tab.Item>,
    ],
  },
}

export default meta;