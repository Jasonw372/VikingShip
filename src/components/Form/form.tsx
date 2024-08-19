import React, {FC} from "react";

export interface FormProps {
  name?: string;
  children?: React.ReactNode;
}

export const Form: FC<FormProps> = ({name = "viking-form", children}) => {
  return (
    <form name={name} className="viking-form">
      {children}
    </form>
  )
}

export default Form