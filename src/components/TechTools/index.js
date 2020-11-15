import React, {useState} from 'react'
import data from '../../data.json'
import './Tech.css'

const NewTech = ()=>{
    const [tech, setTech] = useState(data)
    const [name, setName] = useState('')
    const [active, setActive] = useState(false)

    const handleClick = (item) => {
        setActive(!active)
        setName(item.name)
        item.name === name ? setActive(!active) : setActive(true)
    }


    // console.log(`name is ${name}. active is ${active}`)

    const checkItems = tech.map(item=>{
        const techName = item.children
        return (
            <div key={item.id}>
                    <div className={`tech_form`} key={item.id} onClick={()=> handleClick(item)}>
                        <div className={`tech_check ${item.name}`}></div>
                        <div>{item.label}</div>
                    </div>
                
                <div className={`${item.name}`}>
                    <div className={`tech_item ${item.name}-${techName[0].identity} ${techName[0].identity}`}>
                        <img className={`tech_img`} src={techName[0].image} alt={`${techName[0].identity}`.toLowerCase()} />
                        <span className={`tech_span`}>{techName[0].name}</span>
                     </div>
                    <div className={`tech_item ${item.name}-${techName[1].identity} ${techName[1].identity}`}>
                        <img className={`tech_img`} src={techName[1].image} alt={`${techName[1].identity}`.toLowerCase()} />
                        <span className={`tech_span`}>{techName[1].name}</span>
                     </div>
                    <div className={`tech_item ${item.name}-${techName[2].identity} ${techName[2].identity}`}>
                        <img className={`tech_img`} src={techName[2].image} alt={`${techName[2].identity}`.toLowerCase()} />
                        <span className={`tech_span`}>{techName[2].name}</span>
                    </div>
                    <div className={`tech_item ${item.name}-${techName[3].identity} ${techName[3].identity}`}>
                        <img className={`tech_img`} src={techName[3].image} alt={`${techName[3].identity}`.toLowerCase()} />
                        <span className={`tech_span`}>{techName[3].name}</span>
                    </div>
                </div>   
            </div>
        )
    })
    return (
        <div className={`tech`}>
            <h1 className={`tech_title`}>Technologies & Tools</h1>
            <div className={`tech_div`}>
            <div className={`technologies`}>
                {checkItems}
            </div>
            </div>
        </div>
    )
}

export default NewTech