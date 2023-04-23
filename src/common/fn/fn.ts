import { IFormDataSliceState } from "../../store/reducer/types"

export function calcTotal(values:ITotal[]){
    console.log(values)
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
        'selectMinutes': data.minutes.count,
        'selectInterner': data.internet.count,
        'selectSms':data.sms.count,
        'WifiRouter':data.router.name,
        'totalPrice': data.sum
    })
    alert(jsonData)
}