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
  
  
  const initialState: IFormDataSliceState = {
    phone: "",
    operator: 'Оператор 1',
    router: {name: 'Аренда 99 ₽/мес.', cost: 99, id: 1},
    internet: {name: '5 гб', cost: 60, id:1},
    sms: {name: '0 смс', cost: 60, id:1},
    minutes: {name: '200', cost: 60, id:1},
    sum: 0,
  };
  
  const formDataSlice = createSlice({
    name: "formData",
    initialState,
    reducers: {
      setPhone(state, action: PayloadAction<ISetPhonePayload>) {
        state.phone = action.payload;
      },
      setOperator(state, action: PayloadAction<ISetOperatorPayload>) {
        state.operator = action.payload;
        state.sum = calcTotal([state.minutes, state.internet, state.router, state.sms])
    
      },
      setRouter(state, action: PayloadAction<ISetRouterPayload>) {
        state.router = action.payload;
        state.sum = calcTotal([state.minutes, state.internet, state.router, state.sms])
      },
    
      setInternet(state, action: PayloadAction<ISetInternetPayload>) {
        state.internet = action.payload;
        state.sum = calcTotal([state.minutes, state.internet, state.router, state.sms])


      },
      setSms(state, action: PayloadAction<ISetSmsPayload>) {
        state.sms = action.payload;
        state.sum = calcTotal([state.minutes, state.internet, state.router, state.sms])


      },
      setMinutes(state, action: PayloadAction<ISetMinutesPayload>) {
        state.minutes = action.payload;
        state.sum = calcTotal([state.minutes, state.internet, state.router, state.sms])
      
      },

      countTotalPrice(state){
        state.sum = calcTotal([state.minutes, state.internet, state.router, state.sms])
      },
     
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
  
  } = formDataSlice.actions;
  
  export default formDataSlice.reducer;