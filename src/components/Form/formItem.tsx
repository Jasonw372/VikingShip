import React, {FC} from "react";
import classNames from "classnames";

export interface FormItemProps {
  label?: string;
  children?: React.ReactNode;
}

export const FormItem: FC<FormItemProps> = ({label, children}) => {

  const rowClass = classNames({
    'viking-row-no-label': !label
  })

  return (
    <div className={rowClass}>
      {
        label && <div className="viking-form-item-label">
          <label htmlFor="" title={label}>{label}</label>
        </div>
      }

      <div className="viking-form-item">
        {children}
      </div>
    </div>
  )
}

export default FormItem