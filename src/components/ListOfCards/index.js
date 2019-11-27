import React, {useState, useEffect} from 'react'
import { Card } from '../Card'
import { useStateValue } from '../../state'

export const ListOfCards = ()=>{

 const [data, setData] = useState([]),
  [{show, showAlert}, dispatch] = useStateValue()
 const getData = async()=>{
  const response = await fetch('http://localhost:3000/posts'),
   json = await response.json()
   setData(json)
   setTimeout(()=>{
    dispatch({
     type: 'showAlert',
     newShowAlert: null
    })
    console.log(`new show alert ${showAlert}`)
   },3000)
 }


 useEffect(()=>{
  getData()
 }, [show])


 return (
  <div style={{display: 'flex', flexWrap: 'wrap'}}>
   {
    data.map(el=><Card key={el.id} {...el} />)
   }
   {showAlert ? 
   <div>card added</div> : null
   }
  </div>
 )

}