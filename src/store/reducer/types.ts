export interface IFormDataSliceState {
    phone: string;
    operator: string;
    router: rangePayload;
    internet: rangePayload;
    sms: rangePayload;
    minutes: rangePayload;
    sum: number;
  }
  
  export type ISetPhonePayload = string;
  export type ISetOperatorPayload = string;
  export type ISetRouterPayload = rangePayload;
  export type ISetInternetPayload = rangePayload;
  export type ISetSmsPayload = rangePayload;
  export type ISetMinutesPayload = rangePayload;
  export type ISetSumPayload = number;
  


type rangePayload = {name: string, cost: number, id: number | string};
