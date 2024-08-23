import Form from "./form.tsx";
import FormItem, {FormItemProps} from "./formItem.tsx";
import {FC} from "react";

export type IFormComponent = typeof Form & {
  Item: FC<FormItemProps>,
}

const TransForm = Form as IFormComponent;
TransForm.Item = FormItem;

export default TransForm;