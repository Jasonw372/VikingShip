import Menu, {MenuProps} from "./menu.tsx";
import MenuItem, {MenuItemProps} from "./menuItem.tsx";
import {FC} from "react";
import SubMenu, {SubMenuProps} from "./subMenu.tsx";

export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>,
  SubMenu: FC<SubMenuProps>
}

const TransMenu = Menu as IMenuComponent;
TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;

export default TransMenu;