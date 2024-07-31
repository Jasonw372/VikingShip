import React, {useContext} from "react";
import classNames from "classnames";
import {MenuContext} from "./menu.tsx";
import {MenuItemProps} from "./menuItem.tsx";

export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}


const SubMenu: React.FC<SubMenuProps> = ({index, title, className, children}) => {
  const context = useContext(MenuContext);
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>
  const isOpened = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false
  const [menuOpen, setOpen] = React.useState(isOpened);

  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index,
    'is-vertical': context.mode === 'vertical',
  });
  let timer: number;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setOpen(toggle)
    }, 300) as unknown as number;
  }
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!menuOpen);
  }
  const clickEvent = context.mode === 'vertical' ? {
    onClick: handleClick
  } : {}

  const hoverEvent = context.mode !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => {
      handleMouse(e, true)
    },
    onMouseLeave: (e: React.MouseEvent) => {
      handleMouse(e, false)
    }
  } : {}


  const renderChildren = (children: React.ReactNode) => {
    const subMenuClasses = classNames('viking-submenu', {
      'menu-opened': menuOpen
    })
    const childComponent = React.Children.map(children, (child, i) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {index: `${index}-${i}`})
      } else {
        console.error("Warning: SubMenu has a child which is not a MenuItem component")
      }
    })

    return <ul className={subMenuClasses}>
      {childComponent}
    </ul>
  }


  return (
    <li key={index} className={classes} {...hoverEvent}>
      <div className="submenu-title" {...clickEvent}>
        {title}
      </div>
      <ul className="submenu-content">
        {renderChildren(children)}
      </ul>
    </li>
  )
}

SubMenu.displayName = 'SubMenu'
export default SubMenu