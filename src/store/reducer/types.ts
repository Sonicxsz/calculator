export interface IFormDataSliceState {
    phone: string;
    operator: string;
    router: {name: string, cost: number, id: number | string};
    internet: {count: string, cost: number, id: number | string};
    sms: {count: string, cost: number, id: number | string};
    minutes: {count: string, cost: number, id: number | string};
    sum: number;
  }
  
  export type ISetPhonePayload = string;
  export type ISetOperatorPayload = string;
  export type ISetRouterPayload = {name: string, cost: number, id: number | string};
  export type ISetInternetPayload = rangePayload;
  export type ISetSmsPayload = rangePayload;
  export type ISetMinutesPayload = rangePayload;
  export type ISetSumPayload = number;
  


type rangePayload = {count: string, cost: number, id: number | string};
