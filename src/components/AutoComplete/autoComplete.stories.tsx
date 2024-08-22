import type {Meta, StoryObj} from '@storybook/react';

import {AutoComplete, DataSourceType} from './autoComplete';

const meta = {
  title: "AutoComplete组件",
  component: AutoComplete,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AutoComplete>;

export default meta;

type Story = StoryObj<typeof meta>;

interface LakerPlayerProps {
  value: string;
  number: number;
}

export const Default: Story = {
  args: {
    fetchSuggestions: (query) => {
      const lakersWithNumber = [
        {value: 'bradley', number: 11},
        {value: 'pope', number: 1},
        {value: 'caruso', number: 4},
        {value: 'cook', number: 2},
        {value: 'cousins', number: 15},
        {value: 'james', number: 23},
        {value: 'AD', number: 3},
        {value: 'green', number: 14},
        {value: 'howard', number: 39},
        {value: 'kuzma', number: 0},
      ]
      return lakersWithNumber.filter(player => player.value.includes(query))
    },
    onSelect: (item: DataSourceType) => {
      alert(`你选择了${(item as DataSourceType<LakerPlayerProps>).value}`)
    },
  },
  name: "默认组件"
}

export const Custom: Story = {
  args: {
    fetchSuggestions: (query) => {
      const lakersWithNumber = [
        {value: 'bradley', number: 11},
        {value: 'pope', number: 1},
        {value: 'caruso', number: 4},
        {value: 'cook', number: 2},
        {value: 'cousins', number: 15},
        {value: 'james', number: 23},
        {value: 'AD', number: 3},
        {value: 'green', number: 14},
        {value: 'howard', number: 39},
        {value: 'kuzma', number: 0},
      ]
      return lakersWithNumber.filter(player => player.value.includes(query))
    },
    onSelect: (item: DataSourceType) => {
      alert(`你选择了${(item as DataSourceType<LakerPlayerProps>).value}`)
    },
    renderOption: (item: DataSourceType) => {
      const itemWithNumber = item as DataSourceType<LakerPlayerProps>
      return (
        <>
          <b>名字: {itemWithNumber.value}</b><br/>
          <span>球衣号码: {itemWithNumber.number}</span>
        </>
      )
    }
  },
  name: "个性化AutoComplete"
};