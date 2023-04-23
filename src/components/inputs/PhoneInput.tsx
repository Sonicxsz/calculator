import { formatPhoneNumber } from '../../utils/phone';
import styles from './inputs.module.css'
import { useAppDispatch, useAppSelector } from '../../common/hooks/useRedux';
import { setPhone, setValidPhone } from '../../store/reducer/formReducer';
import { useEffect } from 'react';

function PhoneInput() {
    const phone = useAppSelector(state => state.formDataSlice.data.phone)
    const validPhone = useAppSelector(state => state.formDataSlice.valid.phone)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if(phone.length >= 16){
            dispatch(setValidPhone(true))
        }
    }, [phone])

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target) {
            const formattedPhoneNumber = formatPhoneNumber(e.target.value, e);
            dispatch(setPhone(formattedPhoneNumber))    
        }
    };

    const clazz = (validPhone) ? styles.require : `${styles.require} ${styles.error}`  
    return (
        <div className={styles.container}>
            <label className={styles.title}>Телефон</label>
            <input type={'tel'}
                name="user_phone"
                placeholder='+7 (____) ___-__-__'
                className={styles.inputWrapper}
                onChange={(e) => handleInput(e)}
                value={phone}/>
            <span className={clazz}>Обязательное поле</span>
        </div>
    )
}





export default PhoneInput