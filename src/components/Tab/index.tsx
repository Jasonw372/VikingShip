import {FC} from 'react'
import Tabs, {TabsProps} from './tab.tsx'
import TabItem, {TabItemProps} from './tabItem.tsx'

export type ITabsComponent = FC<TabsProps> & {
  Item: FC<TabItemProps>
}
const TransTabs = Tabs as ITabsComponent
TransTabs.Item = TabItem

export default TransTabs