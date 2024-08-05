import type {Meta, StoryObj} from '@storybook/react';

import Input from './input';
import {useState} from "react";

const meta = {
  title: 'Input组件',
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: 'select',
      options: ['lg', 'sm', undefined]
    },
    icon: {
      control: 'text',
    },
    prepend: {
      control: 'text'
    },
    append: {
      control: 'text'
    }
  },
} satisfies Meta<typeof Input>;


type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '请输入',
    disabled: false,
  },
  name: '默认输入框'
};

export const Disabled: Story = {
  args: {
    disabled: true
  },
  name: '不可用的输入框'
};

export const Large: Story = {
  args: {
    size: 'lg'
  },
  name: '大号输入框'
}

export const Small: Story = {
  args: {
    size: 'sm'
  },
  name: '小号输入框'
}


export const P: Story = {
  args: {
    prepend: 'https://',
    append: '.com'
  },
  name: '前后缀的输入框'
}

export const Icon: Story = {
  args: {
    icon: 'search',
  },
  name: '带图标的输入框'
}

export const Controlled = () => {
  const [value, setValue] = useState('');
  return <Input value={value} onChange={(e) => setValue(e.target.value)}/>
}
Controlled.storyName = '受控输入框';

export default meta;
