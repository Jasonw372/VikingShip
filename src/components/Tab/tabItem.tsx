import React, {FC} from "react";

export interface TabItemProps {
  label: string;
  disabled?: boolean;
  children: React.ReactNode;
}

const TabItem: FC<TabItemProps> = ({children}) => {
  return <div className="viking-tab-panel">
    {children}
  </div>
};

TabItem.displayName = 'Tabs.Item'

export default TabItem;