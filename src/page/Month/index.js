import { useState } from "react";
import { NavBar, DatePicker, Toast } from "antd-mobile";
import classNames from "classnames";

import "./index.scss";

const Month = () => {
  const [dateVisible, setDateVisible] = useState(false);

  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度支出
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date" onClick={() => setDateVisible(true)}>
            <span className="text">2023 | 3月份</span>
            <span className={classNames("arrow", { expand: dateVisible })}></span>
          </div>
          {/* 统计区域 */}
          <div className="twoLineOverview">
            <div className="item">
              <span className="money">{100}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{100}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{100}</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className="kaDate"
            title="记账日期"
            visible={dateVisible}
            max={new Date()}
            precision="month"
            onCancel={() => setDateVisible(true)}
            onClose={() => setDateVisible(false)}
            onConfirm={(val) => {
              Toast.show(val.toDateString());
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Month;
