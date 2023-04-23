import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFormDataSliceState, 
    ISetPhonePayload, 
    ISetOperatorPayload, 
    ISetRouterPayload, 
    ISetInternetPayload, 
    ISetMinutesPayload, 
    ISetSmsPayload, 
   } from "./types";
import { calcTotal } from "../../common/fn/fn";
  
  
  const initialState: {data: IFormDataSliceState, valid: {
    phone: boolean, operator: boolean
  }} = {
    data: {
      phone: "",
      operator: 'Оператор 1',
      router: {name: 'Аренда 99 ₽/мес.', cost: 99, id: 1},
      internet: {name: '5 гб', cost: 60, id:1},
      sms: {name: '50', cost: 80, id:2},
      minutes: {name: '200', cost: 60, id:1},
      sum: 0,
    },
    valid: {
      phone: false,
      operator: false
    }
  };
  
  const formDataSlice = createSlice({
    name: "formData",
    initialState,
    reducers: {
      setPhone(state, action: PayloadAction<ISetPhonePayload>) {
        state.data.phone = action.payload;
      },
      setOperator(state, action: PayloadAction<ISetOperatorPayload>) {
        state.data.operator = action.payload;
        state.data.sum = calcTotal([state.data.minutes, state.data.internet, state.data.router, state.data.sms])
    
      },
      setRouter(state, action: PayloadAction<ISetRouterPayload>) {
        state.data.router = action.payload;
        state.data.sum = calcTotal([state.data.minutes, state.data.internet, state.data.router, state.data.sms])
      },
    
      setInternet(state, action: PayloadAction<ISetInternetPayload>) {
        state.data.internet = action.payload;
        state.data.sum = calcTotal([state.data.minutes, state.data.internet, state.data.router, state.data.sms])


      },
      setSms(state, action: PayloadAction<ISetSmsPayload>) {
        state.data.sms = action.payload;
        state.data.sum = calcTotal([state.data.minutes, state.data.internet, state.data.router, state.data.sms])


      },
      setMinutes(state, action: PayloadAction<ISetMinutesPayload>) {
        state.data.minutes = action.payload;
        state.data.sum = calcTotal([state.data.minutes, state.data.internet, state.data.router, state.data.sms])
      
      },

      countTotalPrice(state){
        state.data.sum = calcTotal([state.data.minutes, state.data.internet, state.data.router, state.data.sms])
      },
     setData(state, action){
        state.data = action.payload
        state.data.sum = calcTotal([state.data.minutes, state.data.internet, state.data.router, state.data.sms])
      }
    },
  });
  
  export const {
    setPhone,
    setOperator,
    setRouter,
    setInternet,
    setSms,
    setMinutes,
    countTotalPrice,
    setData
  
  } = formDataSlice.actions;
  
  export default formDataSlice.reducer;