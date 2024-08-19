import React, {useContext} from "react";
import {MenuContext} from "./menu.tsx";
import classNames from "classnames";

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({index, disabled = false, className, style, children}) => {
  const context = useContext(MenuContext);
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  });

  const {onSelect} = context;
  const handleClick = () => {
    if (onSelect && !disabled && typeof index === 'string') {
      onSelect(index);
    }
  }

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}

MenuItem.displayName = 'Menu.Item'

export default MenuItem