import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './Loader'

import Error from './Error'
import './home.css'

const Home = () => {
    const[errorr,SetError]= useState(false)
    const[loading,setloading]= useState(true)
    const[det,setdet]= useState([])
    const[det2,setdet2]= useState([])
    const[det3,setdet3]= useState([])

    const fetchdata =async()=>{
        try {
            const data = await axios.get('https://api.ipify.org/?format=json')
            setdet(data.data)
            setloading((false))
            
        } catch (error) {
            SetError(true)
        }
}

    const fetchipdata =async()=>{
        // const data = await axios.get('https://ipinfo.io/192.168.0.1/geo')
        try {
        const data = await axios.get(`https://ipinfo.io/${det.ip}?token=23bd1e38ddeb09`)
        console.log(data)
        setdet2(data.data)
        setloading(false)
            
        } catch (error) {
            SetError(true)
        }
    }
    const fetchipdata2 =async()=>{
        try {
        // const data = await axios.get('https://ipinfo.io/192.168.0.1/geo')
        const data = await axios.get(`https://ipinfo.io/${det3}?token=23bd1e38ddeb09`)
        // console.log(data.data)
        setdet2(data.data)
        setloading(false)
        
    } catch (error) {
            SetError(true)
           
        }
    }
    
    useEffect(() => {
      fetchdata()
    }, [])
    
    const clickmydet=()=>{
          fetchipdata()
          console.log(det.ip)
    }
    const clickmydet2=()=>{
          fetchipdata2()
        console.log(det3)
    }
    const dett3val =(e)=>{
        setdet3(e.target.value)
        // setdet2(e.target.value)
    }

  return (
    <div>
        <div className='bg'></div>
        {loading?<Loader/>:
        <div className='maincom'>
            <h4>IP TRACKER</h4>
      <br></br>

      <input placeholder='Search for any IP adress' value={det3} onChange={dett3val}/>
      <button className='button1' onClick={clickmydet2} >Search</button>
      <br></br>
      <div className='ip'>Your IP adress is : {det.ip}</div>
      <button className='button2' onClick={clickmydet} >Get details of your own IP</button>
      <br></br>
      
      <div className='detailz'>
        {errorr?<Error/>:<>
        {det2.length<=0?<h5>Search for any IP to get details here</h5>:<><h4>Here are the details of entered ip</h4>
        {loading?<Loader/>:<>
        <div>City: {det2.city}</div>
        <div>Country: {det2.country}</div>
        <div>IP Adress: {det2.ip}</div>
        <div>Location: {det2.loc}</div>
        <div>Company: {det2.org}</div>
        <div>Postal Code: {det2.postal}</div>
        <div>Reigon: {det2.reigon}</div>
        <div>{det2.timezone}</div>
        </>}
            </>}
        
     </>}</div>
        
     <p>IPTracker is a powerful website that provides you with accurate and comprehensive information about IP addresses. With IPTracker, you can effortlessly discover your own IP address and gain insights into various details associated with it. Additionally, you have the option to manually enter any IP address and instantly retrieve detailed information about it, including geolocation data, ISP, organization, time zone, and more. Whether you need to track your own IP or investigate specific IP addresses, IPTracker simplifies the process, empowering you with valuable insights and enhancing your understanding of IP-related information. Stay informed and explore the world of IP addresses with ease using IPTracker.</p>
         </div>
    }
     </div>
   )
}

export default Home
