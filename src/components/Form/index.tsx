import Form, {FormProps} from "./form.tsx";
import FormItem, {FormItemProps} from "./formItem.tsx";
import {FC} from "react";

export type IFormComponent = FC<FormProps> & {
  Item: FC<FormItemProps>,
}

const TransForm = Form as IFormComponent;
TransForm.Item = FormItem;

export default TransForm;