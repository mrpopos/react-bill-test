import { createBrowserRouter } from "react-router-dom";
import Layout from '@/page/Layout'
import Month from '@/page/Month'
import Year from '@/page/Year'
import New from '@/page/New'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Month />
      },
      {
        path: '/month',
        element: <Month />
      },
      {
        path: 'year',
        element: <Year />
      }
    ]
  },
  {
    path: 'new',
    element: <New />
  }
])

export default router
