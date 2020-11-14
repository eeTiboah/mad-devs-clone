import React, {useState} from 'react'
import data from '../../data.json'
import styles from './Tech.module.css'
import cx from 'classnames'

const NewTech = ()=>{
    const [tech, setTech] = useState(data)
    const [color, setColor] = useState('')


    const handleChange = function(e, i){
        tech[i].isChecked = e.target.checked
        setTech(tech)
        setColor(e.target.value)
        console.log(color)
     }

    const checkItems = tech.map(item=>{
        const techName = item.children
        return (
            <div key={item.id}>
                <div className={styles.tech_form} key={item.id}>
                    <input id={item.value} type='checkbox' checked={item.isChecked} value={item.value} onChange={(e) => handleChange(e, item.id)} />
                    <label className={styles.item_label} htmlFor={item.value}>{item.label}</label>
                </div>
                <div className='technologies'>
                    <div className={cx(styles.tech_item, (styles + `.${item.name}-${techName[0].identity}`), (styles + `.${techName[0].identity}`))}>
                        <img src={techName[0].image} alt={`${techName[0].identity}`.toLowerCase()} />
                        <span>{techName[0].name}</span>
                     </div>
                    <div className={cx(styles.tech_item, (styles + `.${item.name}-${techName[1].identity}`), (styles + `.${techName[1].identity}`))}>
                        <img src={techName[1].image} alt={`${techName[1].identity}`.toLowerCase()} />
                        <span>{techName[1].name}</span>
                     </div>
                    <div className={cx(styles.tech_item, (styles + `.${item.name}-${techName[2].identity}`), (styles + `.${techName[2].identity}`))}>
                        <img src={techName[2].image} alt={`${techName[2].identity}`.toLowerCase()} />
                        <span>{techName[2].name}</span>
                    </div>
                    <div className={cx(styles.tech_item, (styles + `.${item.name}-${techName[3].identity}`), (styles + `.${techName[3].identity}`))}>
                        <img src={techName[3].image} alt={`${techName[3].identity}`.toLowerCase()} />
                        <span>{techName[3].name}</span>
                    </div>
                </div>
                
            </div>
        )
    })
    return (
        <div className={styles.tech}>
            <h1 className={styles.tech_title}>Technologies & Tools</h1>
            <div className={styles.tech_div}>
                {checkItems}
            </div>
        </div>
    )
}

export default NewTech