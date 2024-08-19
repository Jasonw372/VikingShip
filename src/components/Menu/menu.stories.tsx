import {Meta, StoryObj,} from '@storybook/react';
import Menu from './index';
import {MenuProps} from './menu';

export default {
  title: 'Menu组件',
  component: Menu,
  subcomponents: {
    "Menu.SubMenu": Menu.SubMenu,
    "Menu.Item": Menu.Item,
  },
  tags: ['autodocs'],
  argTypes: {
    defaultIndex: {
      description: '定义菜单项的默认选中状态，指定一个菜单项的索引。',
      control: 'text',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: '0'},
      },
    },
    mode: {
      description: '控制菜单的布局方式。',
      control: {type: 'select', options: ['horizontal', 'vertical']},
      table: {
        type: {summary: "'horizontal' | 'vertical'"},
        defaultValue: {summary: 'horizontal'},
      },
    },
    defaultOpenSubMenus: {
      description: "默认展开的 SubMenu 菜单项，['1','2','2-1']。",
      control: 'text', // 使用文本框来输入数组
      table: {
        type: {summary: 'string[]'},
        defaultValue: {summary: '[]'},
      },
    },
  },
} as Meta<typeof Menu>;


// Default Menu
export const DefaultMenu: StoryObj<MenuProps> = {
  render: (args) => {
    return (
      <Menu {...args}>
        <Menu.Item>
          cool link
        </Menu.Item>
        <Menu.Item>
          cool link 2
        </Menu.Item>
        <Menu.Item disabled>
          disabled
        </Menu.Item>
        <Menu.SubMenu title="下拉选项">
          <Menu.Item>
            下拉选项一
          </Menu.Item>
          <Menu.Item>
            下拉选项二
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    )
  },
  args: {
    defaultIndex: '0',
  },
  name: '默认Menu',  // Setting the story name
};

// Vertical Menu
export const ClickMenu: StoryObj<MenuProps> = {
  render: (args) => {
    return (<Menu {...args}>
        <Menu.Item>
          cool link
        </Menu.Item>
        <Menu.Item>
          cool link 2
        </Menu.Item>
        <Menu.Item disabled>
          disabled
        </Menu.Item>
        <Menu.SubMenu title="下拉选项">
          <Menu.Item>
            下拉选项一
          </Menu.Item>
          <Menu.Item>
            下拉选项二
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    )
  },
  args: {
    defaultIndex: '0',
    mode: 'vertical',
  },
  name: '纵向的 Menu',  // Setting the story name
};

// Opened Vertical Menu
export const OpenedMenu: StoryObj<MenuProps> = {
  render: (args) => {
    return (<Menu {...args}>
        <Menu.Item>
          cool link
        </Menu.Item>
        <Menu.Item>
          cool link 2
        </Menu.Item>
        <Menu.Item disabled>
          disabled
        </Menu.Item>
        <Menu.SubMenu title="下拉选项">
          <Menu.Item>
            下拉选项一
          </Menu.Item>
          <Menu.Item>
            下拉选项二
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    )
  },
  args: {
    defaultIndex: '0',
    mode: 'vertical',
    defaultOpenSubMenus: ['3'],
  },
  name: '默认展开的纵向 Menu',  // Setting the story name
};
