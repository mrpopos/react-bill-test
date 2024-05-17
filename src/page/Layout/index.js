import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <h1>layout 组件</h1>
      <Outlet />
    </div>
  )
}

export default Layout
