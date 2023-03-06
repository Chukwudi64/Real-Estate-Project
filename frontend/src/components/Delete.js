import React from 'react'
import Navbar from './Navbar';
import {useState} from 'react'
import axios from 'axios'

function Delete() {
  const initialState=Object.freeze({
    tittle:""
  })

  const [deleteData, setDeleteData] = useState(initialState)
  console.log(deleteData);

  const HandleChange = (e) => {
    setDeleteData({...deleteData,[e.target.name]: e.target.value})
  }
  const HandleSubmit = (e) => {
    e.preventDefault();
    try{
        axios.post('http://127.0.0.1:8000/api/Deleteproperty/', deleteData).then(res => {
            console.log(res.data);
        }) 
        // window.location.href = '/'
    }catch(err){
            console.log(err);
        }
    }

  return (
    <div>
      <div className="agentlogin">
        <Navbar />
        <br />
        <div class="wrapper">
          <div class="form-wrapper">
            <h3> Enter Title of Property to Delete </h3>{" "}
            <b style={{ color: "red" }}> msg </b>{" "}
            <form onSubmit={HandleSubmit} noValidate>
              <input
                type="text"
                value={deleteData.title}
                noValidate onChange= {HandleChange}
                name='title'
                placeholder="Title"
                required
              />
                <br />
                <br />
              <input
                type="submit"
                value="Delete Property"
                noValidate onChange= {HandleChange}
                className="btn btn-danger"
              />
            </form>{" "}
          </div>
        </div>
      </div>;

    </div>
  )
}

export default Delete