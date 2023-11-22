import { useState, useEffect} from 'react'

export default function Advantages() {
    const [advantages, setAdvatages] = useState([])

    useEffect(()=>{
        const fetchData = async function (){
            const response = await fetch('http://37.228.116.165/api/advantages/?format=json')
            const data = await response.json()
            setAdvatages(data)
        }
        fetchData()
    }, [])
    return(
        <ul className="advantages_items">
            {advantages.map((advantage) => {
                return <li key={advantage.id}>
                            <div className="advantages_item" id={advantage.css_id}>
                                <p className="advantage_item_text">{advantage.first_raw}<br/><b className="item_b">{advantage.bold}</b><br/>{advantage.second_raw}</p>
                            </div>
                        </li>
            })}
        </ul>
    )
}