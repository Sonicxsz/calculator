import styles from './range.module.css'
import {useState, useEffect} from 'react'
function Range({label, values, dispatcher}:IRangeProps) {
    const [value, setValue] = useState<number | string>(0)

    useEffect(() => {
        const newValue = values.filter(i => i.id === value)
        if(newValue.length){
            dispatcher(newValue[0])
        }
    }, [value])
  
  return (
   <div className={styles.container}>
     <h2 className={styles.title}>{label}</h2>
     <div className={styles.rangeSlider}>
      <input
        type="range"
        min="1"
        max="4"
        step="1"
        value={value}
        className={styles.slider}
        id="range"
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <div className={styles.sliderValue}>
        {values.map(i => {
            return <span key={i.id}>{i.count}</span>
        })}
      </div>
    </div>
   </div>
  );
}


interface IRangeProps {
    label: string,
    values: rangeValueT[],
    //actualValue: rangeValueT,
    dispatcher: (item: rangeValueT) => void
}

export type rangeValueT = {count: string, cost: number, id: number | string}

export default Range