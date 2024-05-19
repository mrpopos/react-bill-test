import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const store = createSlice({
  name: 'bill',
  initialState: {
    billList: []
  },
  reducers: {
    setBillList(state, action) {
      state.billList = action.payload
    }
  }
})

// 结构actionCreater函数
const { setBillList } = store.actions
// 异步请求
const fetchBillList = () => {
  return async (dispath) => {
    const res = await axios.get('http://localhost:8888/list')
    dispath(setBillList(res.data))
  }
}

export { fetchBillList }

const billReducer = store.reducer

export default billReducer
