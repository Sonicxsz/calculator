import styles from './app.module.css'
import PhoneInput from './components/inputs/PhoneInput'
import SelectInput from './components/inputs/SelectInput'
import CheckBox from './components/inputs/checkBox'
import MainButton from './components/mainButton/MainButton'
import Range from './components/range/Range'
import { useAppDispatch, useAppSelector } from './common/hooks/useRedux'
import { setMinutes, setInternet, setSms, countTotalPrice } from './store/reducer/formReducer'
import { rangeValueT } from './components/range/Range'
import { useEffect } from 'react'
const rangeMinutes = [
  {count: '200', cost: 60, id:1},
  {count: '350', cost: 80, id:2},
  {count: '600 мин.', cost: 120, id:3},
  {count: '650', cost: 130, id:4},

]
const rangeInternet = [
  {count: '5 гб', cost: 60, id:1},
  {count: '15', cost: 80, id:2},
  {count: '30', cost: 120, id:3},
  {count: '35', cost: 130, id:4},

]

const rangeSMS = [
  {count: '0 смс', cost: 60, id:1},
  {count: '50', cost: 80, id:2},
  {count: '100', cost: 120, id:3},
  {count: '150', cost: 130, id:4},

]

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(countTotalPrice())
  },[])
  
  return (
    <form className={styles.container}>
      <h1 className={styles.title}>Настройте Тариф</h1>
      <PhoneInput  />
      <SelectInput />
      <Range values={rangeMinutes} label='Минуты'  dispatcher={(item:rangeValueT) => dispatch(setMinutes(item))}/>
      <Range values={rangeInternet} label='Интернет'  dispatcher={(item:rangeValueT) => dispatch(setInternet(item))}/>
      <Range values={rangeSMS} label='Смс'  dispatcher={(item:rangeValueT) => dispatch(setSms(item))}/>
      <CheckBox />
      <MainButton />
    </form>
  )
}


export default App

