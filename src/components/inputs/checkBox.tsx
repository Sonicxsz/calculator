import styles from './inputs.module.css'
import { useAppDispatch, useAppSelector } from '../../common/hooks/useRedux'
import { setRouter } from '../../store/reducer/formReducer'
const check = [{name: 'Аренда 99 ₽/мес.', cost: 99, id: 1}, {name:'Выкупить 2 600 ₽', cost: 200, id: 2}]

function CheckBox() {
  const checked = useAppSelector(state => state.formDataSlice.router)
  const dispatch = useAppDispatch()
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Wi-Fi роутер</h2>
        <div className=''>
          {check.map((i, ind) => {
            return (
              <label className={styles.wrapper}>{i.name}
                <input type="checkbox" checked={checked.id === ind + 1} onChange={e => dispatch(setRouter({name: i.name, cost: i.cost, id: i.id}))}/>
                <span className={styles.mark}></span>
            </label>
            )
          })}
        </div>
    </div>
  )
}

export default CheckBox