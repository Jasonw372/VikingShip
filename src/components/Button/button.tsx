import React from "react";
import classNames from "classnames";
// config button type and size
export type ButtonType = 'default' | 'primary' | 'link' | 'danger'
export type ButtonSize = 'lg' | 'sm'

// define button props
export interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string
}

// combine button props
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
// define button component
const Button: React.FC<ButtonProps> = ({
                                         btnType = "default",
                                         disabled = false,
                                         size,
                                         children,
                                         href,
                                         className,
                                         ...restProps
                                       }) => {
  // set button class
  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === "link") && disabled,
  });
  // render button or link
  if (btnType === 'link' && href) {
    return <a
      className={classes}
      href={href}
      {...restProps}>
      {children}
    </a>
  } else {
    return <button
      className={classes}
      disabled={disabled}
      {...restProps}>
      {children}
    </button>
  }
};

export default Button