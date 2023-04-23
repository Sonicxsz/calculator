import styles from './mainButton.module.css'
import { useAppSelector } from '../../common/hooks/useRedux'
import { showAlert } from '../../common/fn/fn'
function MainButton() {
  const data = useAppSelector(state => state.formDataSlice.data)

  return (
    <button className={styles.container} onClick={() => showAlert(data)} >
        <h2 className={styles.price}>{data.sum} ₽</h2> 
        <span className={styles.title}>в месяц</span>
    </button>
  )
}

export default MainButton