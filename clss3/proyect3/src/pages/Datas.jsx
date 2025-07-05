import {useState, useEffect, useRef} from 'react'
import dataJson from '../assets/data.json'
function Datas() {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log(dataJson)
        fetch("/data.json")
        .then(res => res.json())
        .then(res => {
            setData(res)
        })
        .catch(e => console.log(e))
    }, [])
  return (
    <div >
      <ul>
        <li>Nombres: {data.name} {data.last}</li>
        <li>Edad: {data.age}</li>
        <li>Telefono: {data.phone}</li>
        <li>Ciudad: {data.city}</li>
      </ul>
    </div>
  )
}

export default Datas
