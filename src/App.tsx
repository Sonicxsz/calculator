import { useEffect } from 'react'
import { useActionDispatcher, useAppDispatch, useAppSelector } from './common/hooks/useRedux'
import styles from './app.module.css'
import PhoneInput from './components/inputs/PhoneInput'
import SelectInput from './components/inputs/SelectInput'
import CheckBox from './components/inputs/checkBox'
import MainButton from './components/mainButton/MainButton'
import Range from './components/range/Range'
import { setMinutes, setInternet, setSms, setData  } from './store/reducer/formReducer'
import { requiestData } from './common/fn/fn'
import { rangeInternet, rangeMinutes, rangeSMS } from './appdata'



function App() {
    const dispatch = useAppDispatch()
    const minutes = useAppSelector(state => state.formDataSlice.data.minutes)
    const sms = useAppSelector(state => state.formDataSlice.data.sms)
    const internet = useAppSelector(state => state.formDataSlice.data.internet)


    useEffect(() => {
        requiestData().then(data => JSON.parse(data)).then(data => dispatch(setData(data)))
    },[])

    const dispatchSetSms = useActionDispatcher(setSms);
    const dispatchSetMinutes = useActionDispatcher(setMinutes);
    const dispatchSetInternet = useActionDispatcher(setInternet);
    
      
    return (
        <form onSubmit={e => e.preventDefault()} className={styles.container}>
            <h1 className={styles.title}>Настройте Тариф</h1>
            <PhoneInput  />
            <SelectInput />
            <Range color='#000000' actualValue={minutes} values={rangeMinutes} label='Минуты'  dispatcher={dispatchSetMinutes}/>
            <Range color='#7A5CFA' actualValue={internet} values={rangeInternet} label='Интернет'  dispatcher={dispatchSetInternet}/>
            <Range color='#7A5CFA' actualValue={sms} values={rangeSMS} label='Смс'  dispatcher={dispatchSetSms}/>
            <CheckBox />
            <MainButton />
        </form>
    )
}


export default App

