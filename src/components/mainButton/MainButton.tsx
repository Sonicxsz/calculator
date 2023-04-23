import styles from './mainButton.module.css'
import { useAppSelector, useAppDispatch } from '../../common/hooks/useRedux'
import { showAlert } from '../../common/fn/fn'
import { setValidOperator, setValidPhone } from '../../store/reducer/formReducer'
function MainButton() {
    const data = useAppSelector(state => state.formDataSlice.data)
    const valid = useAppSelector(state => state.formDataSlice.valid)
    const dispatch = useAppDispatch()
    
    function handleSubmit() {
        if(data.phone.length < 16){
            dispatch(setValidPhone(false))
        }
        if(!data.operator.length){
            dispatch(setValidOperator(false))
        }
        if(valid.phone && valid.operator){
            showAlert(data)
        }
    }
    return (
        <button className={styles.container} onClick={handleSubmit} >
            <h2 className={styles.price}>{data.sum} ₽</h2> 
            <span className={styles.title}>в месяц</span>
        </button>
    )
}

export default MainButton