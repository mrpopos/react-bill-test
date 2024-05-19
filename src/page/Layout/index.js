import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import { TabBar } from 'antd-mobile'
import { fetchBillList } from "@/store/modules/billStore"
import {
  AppOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'

import '@/page/Layout/index.scss'

const Layout = () => {
  const tabs = [
    {
      key: '/month',
      title: '月度账单',
      icon: <AppOutline />,
    },
    {
      key: '/new',
      title: '记账',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/year',
      title: '年度账单',
      icon: <UserOutline />,
    },
  ]
  const dispatch = useDispatch()
  // 触发异步store获取billList
  useEffect(() => {
    dispatch(fetchBillList())
  }, [dispatch])
  const navigate = useNavigate()
  const setRouteActive = (value) => {
    navigate(value)
  }

  return (
    <div className="layout">
      <div className="container">
        <Outlet />
      </div>
      <div className="footer">
      <TabBar safeArea onChange={value => setRouteActive(value)}>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
      </div>
    </div>
  )
}

export default Layout
