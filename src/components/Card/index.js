import React from 'react'

export const Card = ({title, imgSrc})=>(
 <div style={{width: '270px'}}>
  {console.log(title)}
  <h2>{title}</h2>
  <div style={{width: '250px'}}>
   <img style={{height: '100%', width: '100%'}} src={imgSrc} />
  </div>
 </div>
)