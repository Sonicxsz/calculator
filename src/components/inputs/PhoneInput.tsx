import { formatPhoneNumber } from '../../utils/phone';
import styles from './inputs.module.css'
import { useAppDispatch, useAppSelector } from '../../common/hooks/useRedux';
import { setPhone } from '../../store/reducer/formReducer';
import { useState } from 'react';

function PhoneInput() {
  const [touch, setTouch] = useState(false)
  const phone = useAppSelector(state => state.formDataSlice.data.phone)
  const dispatch = useAppDispatch()

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
        if(!touch) setTouch(true)
        const formattedPhoneNumber = formatPhoneNumber(e.target.value, e);
        dispatch(setPhone(formattedPhoneNumber))    
    }
  };

  const clazz = touch && !phone.length ? `${styles.require} ${styles.error}` : styles.require
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