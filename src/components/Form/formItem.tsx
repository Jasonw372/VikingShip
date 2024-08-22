import React, {FC, useContext, useEffect} from "react";
import classNames from "classnames";
import {FormContext} from "./form.tsx";
import {CustomRule} from "./useStore.ts";


export interface FormItemProps {
  name: string;
  children?: React.ReactNode;
  label?: string;
  valuePropName?: string;
  trigger?: string;
  rules?: CustomRule[];
  getValueFromEvent?: (e: any) => any;
  validateTrigger?: string;
}

export const FormItem: FC<FormItemProps> = ({
                                              label,
                                              name,
                                              children,
                                              valuePropName = "value",
                                              trigger = "onChange",
                                              rules,
                                              validateTrigger = "onBlur",
                                              getValueFromEvent = (e) => e.target.value,
                                            }) => {
  const {dispatch, fields, initialValues, validateField} = useContext(FormContext);

  const rowClass = classNames("viking-row", {
    "viking-row-no-label": !label,
  });

  useEffect(() => {
    const initialValue = initialValues && initialValues[name] !== undefined
      ? initialValues[name]
      : "";  // 默认值为空字符串，确保有初始值

    dispatch({
      type: "addField",
      name,
      value: {
        label: name,
        value: initialValue,
        rules: rules || [],
        isValidate: true,
        errors: []
      },
    });
  }, []);

  const fieldState = fields[name];
  const value = fieldState && fieldState.value !== undefined
    ? fieldState.value
    : "";  // 确保值始终不为 undefined

  const errors = fieldState && fieldState.errors
  const isRequired = rules?.some(rule => (typeof rule !== 'function') && rule.required);

  const hasError = errors && errors.length > 0;

  const labelClass = classNames({
    "viking-form-item-required": isRequired
  })

  const itemClass = classNames("viking-form-item-control", {
    "viking-form-item-has-error": hasError
  })
  const onValueUpdate = (e: any) => {
    const newValue = getValueFromEvent(e);
    dispatch({
      type: "updateValue",
      name,
      value: newValue,
    });
  };

  const onValidate = async () => {
    await validateField(name);
  }
  const childList = React.Children.toArray(children);
  if (childList.length === 0) {
    console.error("No child element found in Form.Item");
  }
  if (childList && childList.length > 1) {
    console.warn("Only one child element is allowed in Form.Item, others will be ignored");
  }
  if (!React.isValidElement(childList[0])) {
    console.error("The child element in Form.Item must be a valid React element");
  }
  const child = childList[0] as React.ReactElement;

  // 手动创建一个属性列表，需要有 value 和 onChange
  const controlProps: Record<string, any> = {};
  controlProps[valuePropName] = value;  // 确保传递的 value 始终不为 undefined
  controlProps[trigger] = onValueUpdate;
  if (rules) {
    controlProps[validateTrigger] = onValidate;
  }

  const returnChildNode = React.cloneElement(child, {
    ...child.props,
    ...controlProps,
  });

  return (
    <div className={rowClass}>
      {label && (
        <div className="viking-form-item-label">
          <label htmlFor="" title={label} className={labelClass}>
            {label}
          </label>
        </div>
      )}

      <div className="viking-form-item">
        <div className={itemClass}>
          {returnChildNode}
        </div>
        {
          hasError && (
            <div className="viking-form-item-explain">
              <span>
                {
                  errors[0].message
                }
              </span>
            </div>
          )
        }
      </div>

    </div>
  );
};

FormItem.displayName = "Form.Item";
export default FormItem;