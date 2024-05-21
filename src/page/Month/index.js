import { useState } from 'react';
import { NavBar,DatePicker, Toast } from 'antd-mobile'

import './index.scss'

const Month = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>月度支出</NavBar>
      <div className="content">
        <div className='header'>
          {/* 时间切换区域 */}
          <div className='date'>
            <span className='text'>
              2023 | 3月份
            </span>
            <span className='arrow expand'></span>
          </div>
          {/* 统计区域 */}
          <div className='twoLineOverview'>
            <div className='item'>
              <span className='money'>{100}</span>
              <span className='type'>支出</span>
            </div>
            <div className='item'>
              <span className='money'>{100}</span>
              <span className='type'>收入</span>
            </div>
            <div className='item'>
              <span className='money'>{100}</span>
              <span className='type'>结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className='kaDate'
            title='记账日期'
            visible={visible}
            max={new Date()}
            precision="month"
            onClose={() => {
              setVisible(false)
            }}
            onConfirm={val => {
              Toast.show(val.toDateString())
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Month
