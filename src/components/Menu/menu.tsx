import React, {createContext, useState} from "react";
import classNames from "classnames";
import {MenuItemProps} from "./menuItem.tsx";

type Mode = 'horizontal' | 'vertical'

export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: Mode;
  style?: React.CSSProperties;
  onSelect?: (selectedIndex: string) => void;
  children?: React.ReactNode;
  defaultOpenSubMenus?: string[];
}

export interface IMenuContext {
  index: string;
  onSelect?: (selectedIndex: string) => void;
  mode?: Mode;
  defaultOpenSubMenus?: string[];
}

export const MenuContext = createContext<IMenuContext>({index: '0'});

const renderChildren = (children: React.ReactNode) => {
  return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      const {displayName} = childElement.type;
      if (displayName === 'Menu.Item' || displayName === 'Menu.SubMenu') {
        return React.cloneElement(childElement, {index: index.toString()})
      } else {
        console.error("Warning: Menu has a child which is not a MenuItem component")
      }
    }
  )
}
const Menu: React.FC<MenuProps> = (
  {
    defaultIndex = '0',
    className,
    mode = 'horizontal',
    style,
    onSelect,
    children,
    defaultOpenSubMenus = []
  }) => {
  const classes = classNames('viking-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  });

  const [currentActive, setActive] = useState(defaultIndex)
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: (index: string) => {
      setActive(index);
      onSelect && onSelect(index);
    },
    mode,
    defaultOpenSubMenus
  }
  return (
    <ul className={classes} style={style} data-testid={"test-menu"}>
      <MenuContext.Provider value={passedContext}>
        {renderChildren(children)}
      </MenuContext.Provider>
    </ul>
  )
}
export default Menu