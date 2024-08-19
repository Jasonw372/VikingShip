import {Meta, StoryObj} from '@storybook/react';
import Tabs from './index.tsx';

const meta = {
  argTypes: {},
  component: Tabs,
  parameters: {
    docs: {
      source: {}
    }
  },
  subcomponents: {
    // @ts-ignore
    "Tabs.Item": Tabs.Item
  },
  tags: ["autodocs"],
  title: "Tabs组件",
} satisfies Meta<typeof Tabs>;

type Story = StoryObj<typeof meta>;
const tabItemsData = [
  {label: '选项卡一', content: 'this is content one'},
  {label: '选项卡二', content: 'this is content two'},
  {label: '用户管理', content: 'this is content three'},
];

// 动态生成 Tabs.Item 的函数
function generateTabItems(itemsData: { label: string, content: string }[]) {
  return itemsData.map((item, index) => (
    <Tabs.Item key={index} label={item.label}>
      {item.content}
    </Tabs.Item>
  ));
}

export const Default: Story = {
  args: {
    defaultIndex: 2,
    children: generateTabItems(tabItemsData),
  },
};

export const Card: Story = {
  args: {
    defaultIndex: 0,
    type: 'card',
    children: [
      <Tabs.Item label="选项卡一">this is content one</Tabs.Item>,
      <Tabs.Item label="选项卡二">this is content two</Tabs.Item>,
      <Tabs.Item label="用户管理">this is content three</Tabs.Item>,
    ],
  },
};

export const Disabled: Story = {
  args: {
    defaultIndex: 1,
    children: [
      <Tabs.Item label="选项卡一" disabled={true}>this is content one</Tabs.Item>,
      <Tabs.Item label="选项卡二">this is content two</Tabs.Item>,
      <Tabs.Item label="用户管理">this is content three</Tabs.Item>,
    ],
  },
}

export default meta;