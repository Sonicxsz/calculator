import { IFormDataSliceState } from "../../store/reducer/types"

export function calcTotal(values:ITotal[]){
    return values.reduce((acc, obj) => {
        return acc += obj.cost
    }, 0)
}


interface ITotal {
    cost: number
}



export function showAlert(data:IFormDataSliceState) {
    const jsonData = JSON.stringify({
        'phoneNumber': data.phone,
        'operator': data.operator,
        'selectMinutes': data.minutes.name,
        'selectInterner': data.internet.name,
        'selectSms':data.sms.name,
        'WifiRouter':data.router.name,
        'totalPrice': data.sum
    })
    alert(jsonData)
}