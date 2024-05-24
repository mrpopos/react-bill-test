import { useEffect, useMemo, useState } from "react";
import { NavBar, DatePicker } from "antd-mobile";
import classNames from "classnames";
import dayjs from "dayjs";
import _ from "lodash";

import "./index.scss";
import { useSelector } from "react-redux";

const Month = () => {
  // 按月做数组分组
  const { billList } = useSelector((state) => state.bill);
  const monthGroup = useMemo(() => {
    // return计算之后的值
    return _.groupBy(billList, (item) => dayjs(item.date).format("YYYY / MM"));
  }, [billList]);
  // 初始化渲染当前月数据
  useEffect(() => {
    const formatDate = dayjs(new Date()).format("YYYY / MM");
    setCurrentMonthList(monthGroup[formatDate] || []);
    // setCurrentDate(formatDate);
  }, [monthGroup]);
  const [dateVisible, setDateVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState(() => dayjs(new Date()).format("YYYY / MM"));
  const [currentMonthList, setCurrentMonthList] = useState([]);

  const monthSummary = useMemo(() => {
    // 支出
    const pay = currentMonthList
      .filter((item) => item.type === "pay")
      .reduce((pre, cur) => {
        return pre + cur.money;
      }, 0);
    // 收入
    const income = currentMonthList
      .filter((item) => item.type === "income")
      .reduce((pre, cur) => {
        return pre + cur.money;
      }, 0);
    // 结余
    const balance = income - pay;
    return { pay, income, balance };
  }, [currentMonthList]);

  const onConfirm = (date) => {
    const formatDate = dayjs(date).format("YYYY / MM");
    setCurrentMonthList(monthGroup[formatDate] || []);
    setCurrentDate(formatDate);
  };

  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度支出
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date" onClick={() => setDateVisible(true)}>
            <span className="text">{currentDate}月份</span>
            <span className={classNames("arrow", { expand: dateVisible })}></span>
          </div>
          {/* 统计区域 */}
          <div className="twoLineOverview">
            <div className="item">
              <span className="money">{monthSummary.pay.toFixed(2)}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{monthSummary.income.toFixed(2)}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{monthSummary.balance.toFixed(2)}</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker className="kaDate" title="记账日期" visible={dateVisible} max={new Date()} precision="month" onCancel={() => setDateVisible(true)} onClose={() => setDateVisible(false)} onConfirm={onConfirm} />
        </div>
      </div>
    </div>
  );
};

export default Month;
