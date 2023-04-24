import styles from './range.module.css'
import { useEffect, useState } from 'react'



export type rangeValueT = {name: string, cost: number, id: number | string}
interface IRangeProps {
  label: string,
  values: rangeValueT[],
  actualValue: rangeValueT,
  dispatcher: (item: rangeValueT) => void,
  color: string
}

function Range({label, values, dispatcher, actualValue, color}:IRangeProps) {
    const [percent, setPersent] = useState(0)
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const newValue = values.filter(i => i.id == e.target.value)
        if(newValue.length){
            dispatcher(newValue[0])
        }
    }

    useEffect(() => {
        const id = typeof actualValue.id === 'string' ? parseInt(actualValue.id) : actualValue.id
        const newPercent = (id / (values.length -1)) * 100
        setPersent(newPercent)
        
    }, [actualValue])

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{label}</h2>
            <div className={styles.rangeSlider}>
                <input
                    type="range"
                    min="0"
                    max={values.length -1}
                    step="1"
                    style={{background: `linear-gradient(90deg, ${color} ${percent}%, #fff ${percent}%)`}}
                    value={actualValue.id}
                    className={styles.slider}
                    id="range"
                    onChange={(e) => handleChange(e)}
                />
                <div className={styles.sliderValue}>
                    {values.map(i => {
                        return <span key={i.id}>{i.name}</span>
                    })}
                </div>
            </div>
        </div>
    );
}





export default Range