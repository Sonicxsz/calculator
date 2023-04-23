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



export function requiestData():Promise<any> {
    const data = {
        phone: "",
        operator: 'Оператор 1',
        router: {name: 'Аренда 99 ₽/мес.', cost: 99, id: 1},
        internet: {name: '15', cost: 80, id:2},
        sms: {name: '150', cost: 130, id:4},
        minutes: {name: '200', cost: 60, id:1},
        sum: 0,
      }
    return  new Promise((res, rej) => {
        setTimeout(() => {
            res(JSON.stringify(data))
        }, 500)
      })
}