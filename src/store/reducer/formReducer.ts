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
          operator: '',
          router: {name: '', cost: 0, id: 0},
          internet: {name: '', cost: 0, id:0},
          sms: {name: '', cost: 0, id:0},
          minutes: {name: '', cost: 0, id:0},
          sum: 0,
      },
      valid: {
          phone: false,
          operator: true
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
        setValidPhone(state, action:PayloadAction<boolean>){
            state.valid.phone = action.payload
        },
        setValidOperator(state, action:PayloadAction<boolean>){
            state.valid.operator = action.payload
        },
        setData(state, action){
            state.data = action.payload
            state.data.sum = calcTotal([state.data.minutes, state.data.internet, state.data.router, state.data.sms])
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
    setData,
    setValidPhone,
    setValidOperator
  
} = formDataSlice.actions;
  
export default formDataSlice.reducer;