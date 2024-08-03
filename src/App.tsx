import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import TabItem from "./components/Tab/tabItem.tsx";
import Tabs from "./components/Tab/tab.tsx";

library.add(fas)

const App = () => {

  return (
    <>
      <Tabs>
        <TabItem label="选项卡一">this is content one</TabItem>
        <TabItem label="选项卡二">this is content two</TabItem>
        <TabItem label="用户管理">this is content three</TabItem>
      </Tabs>
    </>
  )
}

export default App
