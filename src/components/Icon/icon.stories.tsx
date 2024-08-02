import {Meta} from "@storybook/react";
import Icon from "./icon.tsx";
import Button from "../Button";
import "./stories.scss";

const meta = {
  title: "Icon组件",
  component: Icon,
  parameters: {
    layout: "centered",

  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Icon>;


export const ADefaultIcons = () => (
  <>
    <div className="gap">
      <Icon icon="check" size="2x"/>
      <Icon icon="times" size="2x"/>
      <Icon icon="anchor" size="2x"/>
      <Icon icon="trash" size="2x"/>
      <Button size="lg" btnType="primary"><Icon icon="check"/> check </Button>
    </div>
  </>
)
ADefaultIcons.storyName = "默认图标"
export const BThemeIcons = () => (
  <>
    <div className="gap">
      <Icon icon="check" size="2x" theme="success"/>
      <Icon icon="times" size="2x" theme="danger"/>
      <Icon icon="anchor" size="2x" theme="primary"/>
      <Icon icon="exclamation-circle" size="2x" theme="warning"/>
    </div>
  </>
)
BThemeIcons.storyName = "不同主题的 Icon"
export const CCustomIcons = () => (
  <>
    <div className="gap">
      <Icon icon="spinner" size="2x" theme="primary" spin/>
      <Icon icon="spinner" size="2x" theme="success" pulse/>
    </div>
  </>
)
CCustomIcons.storyName = "更多行为的 Icon"


export default meta;