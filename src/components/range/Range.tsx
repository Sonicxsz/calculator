import styles from './range.module.css'

export type rangeValueT = {name: string, cost: number, id: number | string}

interface IRangeProps {
  label: string,
  values: rangeValueT[],
  actualValue: rangeValueT,
  dispatcher: (item: rangeValueT) => void
}

function Range({label, values, dispatcher, actualValue}:IRangeProps) {

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const newValue = values.filter(i => i.id == e.target.value)
        if(newValue.length){
            dispatcher(newValue[0])
        }
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{label}</h2>
            <div className={styles.rangeSlider}>
                <input
                    type="range"
                    min="1"
                    max="4"
                    step="1"
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