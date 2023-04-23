import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './common/hooks/useRedux'
import styles from './app.module.css'
import PhoneInput from './components/inputs/PhoneInput'
import SelectInput from './components/inputs/SelectInput'
import CheckBox from './components/inputs/checkBox'
import MainButton from './components/mainButton/MainButton'
import Range from './components/range/Range'
import { setMinutes, setInternet, setSms, setData  } from './store/reducer/formReducer'
import { rangeValueT } from './components/range/Range'
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
  
    return (
        <form onSubmit={e => e.preventDefault()} className={styles.container}>
            <h1 className={styles.title}>Настройте Тариф</h1>
            <PhoneInput  />
            <SelectInput />
            <Range actualValue={minutes} values={rangeMinutes} label='Минуты'  dispatcher={(item:rangeValueT) => dispatch(setMinutes(item))}/>
            <Range actualValue={internet} values={rangeInternet} label='Интернет'  dispatcher={(item:rangeValueT) => dispatch(setInternet(item))}/>
            <Range actualValue={sms} values={rangeSMS} label='Смс'  dispatcher={(item:rangeValueT) => dispatch(setSms(item))}/>
            <CheckBox />
            <MainButton />
        </form>
    )
}


export default App

