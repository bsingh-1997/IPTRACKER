import React from 'react'
import './error.css'
const error = () => {
  return (
    <div>
   <h4>Fetching Data Failed
     </h4>   
    <br></br>
    <img className='imgimg' src='https://ieeemait.com/images/error.gif'/>
    <br></br>
    Here are few possible reasons:
    
        <div>1. Entered ip adress is false</div>
        <div>2. Our servers are Down</div>
        <div>3. Connection Error</div>
        <div>If nothing works,Try after sometime</div>
    
    </div>
  )
}

export default error
