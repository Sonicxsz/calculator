function getDigitsFromValue(value:string){
    return value.replace(/\D/gi, '')
}

export function formatPhoneNumber(value: string, e:React.ChangeEvent<HTMLInputElement>){
   let inputValues = getDigitsFromValue(value);
   let formattedValues = '';

   if(!inputValues.length){
    return ''
   }
   if(['7', '8', '9'].includes(inputValues[0])){

    if(inputValues[0] === '9') inputValues = '7' + inputValues;
    
    const firstSymbols = (inputValues[0] === '8') ? '8' : '+7';
    formattedValues = firstSymbols

    if(inputValues.length > 1){
        formattedValues += ' (' + inputValues.substring(1, 4)
    }
    if(inputValues.length >= 5){
        formattedValues += ') ' + inputValues.substring(4,7)
    }
    if(inputValues.length >= 8){
        formattedValues += '-' + inputValues.substring(7,9)
    }
    if(inputValues.length >= 10){
        formattedValues += '-' + inputValues.substring(9,11)
    }

   }else{
    formattedValues = '+' + inputValues.substring(0, 16)
   }
   return formattedValues
}



