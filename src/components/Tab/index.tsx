import TabItem, {TabItemProps} from './tabItem.tsx'
import Tabs, {TabsProps} from "./tab.tsx";
import {FC} from "react";

export type TabsWithItem = FC<TabsProps> & {
  Item: FC<TabItemProps>;
}

const TabsWithItem = Tabs as TabsWithItem;
TabsWithItem.Item = TabItem;

export default TabsWithItem;