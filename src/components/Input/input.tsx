import React, {InputHTMLAttributes, forwardRef} from "react";
import classNames from "classnames";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  /**是否禁用 Input */
  disabled?: boolean;
  /**设置 input 大小，支持 lg 或者是 sm */
  size?: "lg" | "sm";
  /**添加图标，在右侧悬浮添加一个图标，用于提示 */
  icon?: IconProp;
  /**添加前缀 用于配置一些固定组合 */
  prepend?: string | React.ReactElement;
  /**添加后缀 用于配置一些固定组合 */
  append?: string | React.ReactElement;
  /**输入框内容变化时的回调 */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  // 取出各种属性
  const {disabled, size, icon, prepend, append, style, ...restProps} = props;
  // 根据属性计算不同的 className
  const classes = classNames('viking-input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend,
  })

  const fixControlledValue = (value: typeof props.value) => {
    if (typeof value === 'undefined' || value === null) {
      return ''
    }
    return value
  }
  if ('value' in props) {
    delete restProps.defaultValue
    restProps.value = fixControlledValue(props.value)
  }

  return (
    <div className={classes} style={style}>
      {prepend && <div className="viking-input-group-prepend">{prepend}</div>}
      {icon && <div className="icon-wrapper"><FontAwesomeIcon icon={icon} title={`title-${icon}`}/></div>}
      <input className="viking-input-inner" disabled={disabled} {...restProps} ref={ref}/>
      {append && <div className="viking-input-group-append">{append}</div>}
    </div>
  )
})

export default Input;