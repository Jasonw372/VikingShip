import {Meta, StoryObj} from "@storybook/react";
import Form from "./form.tsx";
import {FormItem as Item} from "./formItem.tsx";
import Input from "../Input";
import Button from "../Button";

const meta = {
  title: "Form组件",
  component: Form,
  subcomponents: {
    Item: Item
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{width: '550px'}}>
        <Story/>
      </div>
    ),
  ]
} satisfies Meta<typeof Form>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "",
  },
  render: (args) => (
    <Form {...args}>
      <Item label="用户名">
        <Input></Input>
      </Item>

      <Item label="密码">
        <Input type="password"></Input>
      </Item>

      <Item>
        <Input placeholder="no label"></Input>
      </Item>

      <div className="viking-form-submit-area">
        <Button btnType="primary" type="submit">登录</Button>
      </div>
    </Form>
  ),
}

export default meta