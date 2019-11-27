import React, {useState} from 'react'
import { useStateValue } from '../../state'

export const Form = ()=>{

 const [{show, showAlert}, dispatch] = useStateValue()

 const [data, setData] = useState({
  id: '',
  title: '',
  imgSrc: ''
 }),
  handleInputValue = (e)=>{
   const {name, value} = e.target
    setData({...data, [name]: value })
    console.log(data)
  },
  postData = async()=>{
   const response = await fetch('http://localhost:3000/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {'Content-Type': 'application/json'}
   }),
   json = await response.json()
   if (json.id !== null) {
    dispatch({
     type: 'showSomething',
     newShow: !show
    })
    dispatch({
     type: 'showAlert',
     newShowAlert: true
    })
    console.log(` show alert ${showAlert}`)
   }
  },
  handleSubmit = (e)=>{
   e.preventDefault()
   postData()
  }

 return (
  <div>
   <form onSubmit={handleSubmit}>
    {console.log(show)}
    <input name='id' placeholder='id' value={data.id} onChange={handleInputValue} />
    <input name='title' placeholder='title' value={data.title} onChange={handleInputValue} />
    <input name='imgSrc' placeholder='image src' value={data.imgSrc} onChange={handleInputValue} />
    <input type='submit' value='Send' />
   </form>
  </div>
 )

}