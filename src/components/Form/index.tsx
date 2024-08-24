import Form from "./form";
import FormItem, {FormItemProps} from "./formItem";
import {FC} from "react";

export type IFormComponent = typeof Form & {
  Item: FC<FormItemProps>,
}

const TransForm = Form as IFormComponent;
TransForm.Item = FormItem;

export default TransForm;