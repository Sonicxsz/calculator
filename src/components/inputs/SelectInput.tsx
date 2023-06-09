import styles from './inputs.module.css'
import { useAppDispatch, useAppSelector } from '../../common/hooks/useRedux'
import { setOperator } from '../../store/reducer/formReducer'
const selectData = [{name:'Оператор 1', id: 1}, {name:'Оператор 2', id: 2}, {name:'Оператор 3', id: 3}]

function SelectInput() {
    const activeValue = useAppSelector(state => state.formDataSlice.data.operator) 
    const validSelector = useAppSelector(state => state.formDataSlice.valid.operator) 

    const dispatch = useAppDispatch()


    const clazz = (validSelector) ? styles.require : `${styles.require} ${styles.error}`  
 
    return (
        <div className={styles.container}>   
            <label className={styles.title} htmlFor='user_oper'>Оператор</label>
            <div className={styles.arrow}>
                <select 
                    value={activeValue}  
                    onChange={(e) => dispatch(setOperator(e.target.value))}
                    className={styles.inputWrapper}  name='user_oper' >
                    {selectData.map((i) => {
                        return (
                            <option value={i.name} key={i.id}>{i.name}</option>
                        )
                    })}
                </select>

            </div>
            <span className={clazz}>Обязательное поле</span>

        </div>
    )
}

export default SelectInput