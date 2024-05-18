import { Button } from "antd-mobile"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <Outlet />
      <Button color="primary">测试全局</Button>
      <div className="puple">
        <Button color="primary">测试局部</Button>
      </div>
      <h1>layout 组件</h1>
    </div>
  )
}

export default Layout
