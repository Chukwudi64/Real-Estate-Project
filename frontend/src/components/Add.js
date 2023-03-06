import React from 'react'
import {useState} from 'react'
import axios from 'axios'


function Add() {
  const initialState=Object.freeze({
    title:"",
    city:"",
    location:"",
    price:"",
    bedroom:"",
    bathroom:""

  })

  const [addData, setaddData] = useState(initialState)
  console.log(addData);

  const HandleChange = (err) => {
    setaddData({...addData,[err.target.name]: err.target.value})
  }
  const HandleSubmit = (err) => {
    err.preventDefault();
    try{
      axios.post('http://127.0.0.1:8000/api/Addproperty/', addData).then(res => {
        console.log(res.data);
      })
      window.location.href ='/'
    }catch(err){
      console.log(err);
    }
  }
  return (
    
    <div className='wrapper'>
        <div className="form-wrapper">
            <h3>
                Add Properties
            </h3>
            <h4 style={{color:'brown'}}>msg</h4>
            <form onSubmit={HandleSubmit} noValidate>
                <input type="text"
                value={addData.title}
                noValidate onChange= {HandleChange}
                placeholder='Enter Title'
                name='title'
                required/>
                <br />
                <br />
                <input type="text"
                value={addData.city}
                noValidate onChange= {HandleChange}
                placeholder='Enter City'
                name='city'
                required/>
                <br />
                <br />
                <input type="text"
                value={addData.location}
                noValidate onChange= {HandleChange}
                placeholder='Enter Location'
                name='location'
                required/>
                <br />
                <br />
                <input type="number"
                value={addData.price}
                noValidate onChange= {HandleChange}
                placeholder='Enter Price'
                name='price'
                required/>
                <br />
                <br />
                <input type="number"
                value={addData.bedroom}
                noValidate onChange= {HandleChange}
                placeholder='Nos Of Bedrooms'
                name='bedroom'
                required/>
                <br />
                <br />
                <input type="number"
                value={addData.bathroom}
                noValidate onChange= {HandleChange}
                placeholder='Nos Of Bathrooms'
                name='bathroom'
                required/>
                <input type="submit" value="REGISTER" className='createAccount'/>
                
            </form>
        </div>
    </div>
  )
}

export default Add


//Add is to post