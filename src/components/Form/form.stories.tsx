import { Meta, StoryObj } from "@storybook/react";
import Form from "./index.tsx";
import { FormProps } from "./form.tsx";
import Input from "../Input";
import Button from "../Button";
import { CustomRule } from "./useStore.ts";
import { useRef } from "react";

export default {
  title: "Form组件",
  component: Form,
  subcomponents: {
    "Form.Item": Form.Item,
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "550px" }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Form>;

const confirmRules: CustomRule[] = [
  {
    required: true,
    message: "请再次输入密码",
  },
  ({ getFieldValue }) => ({
    asyncValidator: (_, value) => {
      return new Promise((resolve, reject) => {
        if (value !== getFieldValue("password")) {
          reject("两次密码输入不一致");
        }
        setTimeout(() => {
          resolve();
        }, 3000);
      });
    },
  }),
];

export const DefaultForm: StoryObj<FormProps> = {
  args: {
    initialValues: {
      username: "viking",
      password: "123456",
      repassword: "",
      agreement: true,
    },
  },
  render: (args) => {
    const ref = useRef<HTMLFormElement>(null);

    return (
      <Form {...args} ref={ref}>
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            {
              required: true,
              message: "请输入用户名",
            },
            {
              type: "email",
              message: "请输入正确的邮箱格式",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: "请输入密码",
            },
            {
              min: 6,
              message: "密码长度不能小于6位",
            },
            {
              max: 12,
              message: "密码长度不能大于12位",
            },
          ]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item label="重复密码" name="repassword" rules={confirmRules}>
          <Input type="password" />
        </Form.Item>
        <div
          className="agreement-section"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Form.Item
            name="agreement"
            valuePropName="checked"
            getValueFromEvent={(e) => e.target.checked}
          >
            <input type="checkbox" />
          </Form.Item>
          <span className="agree-text">
            &nbsp;注册即代表你同意<a href="#">用户协议</a>
          </span>
        </div>
        <div className="viking-form-submit-area">
          <Button
            type="submit"
            btnType="primary"
            style={{
              width: "40%",
            }}
          >
            登陆
          </Button>

          <Button
            type="button"
            onClick={() => {
              ref.current?.resetFields();
            }}
          >
            reset
          </Button>
        </div>
      </Form>
    );
  },
  name: "默认Menu", // Setting the story name
};

export const RenderForm: StoryObj<FormProps> = {
  args: {
    initialValues: {
      username: "viking",
      password: "123456",
      agreement: true,
    },
  },
  render: (args) => {
    return (
      <Form {...args}>
        {({ isValidate, isSubmitting }) => {
          return (
            <>
              <Form.Item
                label="用户名"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "请输入用户名",
                  },
                  {
                    type: "email",
                    message: "请输入正确的邮箱格式",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="密码"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "请输入密码",
                  },
                  {
                    min: 6,
                    message: "密码长度不能小于6位",
                  },
                  {
                    max: 12,
                    message: "密码长度不能大于12位",
                  },
                ]}
              >
                <Input type="password" />
              </Form.Item>
              <Form.Item
                label="重复密码"
                name="repassword"
                rules={confirmRules}
              >
                <Input type="password" />
              </Form.Item>
              <div
                className="agreement-section"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Form.Item
                  name="agreement"
                  valuePropName="checked"
                  getValueFromEvent={(e) => e.target.checked}
                >
                  <input type="checkbox" />
                </Form.Item>
                <span className="agree-text">
                  &nbsp;注册即代表你同意<a href="#">用户协议</a>
                </span>
              </div>
              <div className="viking-form-submit-area">
                <Button
                  type="submit"
                  btnType="primary"
                  style={{
                    width: "40%",
                  }}
                >
                  登陆 {isSubmitting ? "验证中" : "验证完毕"}
                </Button>

                {isValidate ? "通过了" : "没通过"}
              </div>
            </>
          );
        }}
      </Form>
    );
  },
  name: "函数Menu", // Setting the story name
};
