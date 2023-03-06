import React from 'react'
import { Redirect, Link } from "react-router-dom";
import Navbar from './Navbar';

function UserAfterLogin() {
    let authUser = sessionStorage.getItem('Key_Veriable')
    console.log(authUser)
    if (authUser == null) {
        return(<Redirect to="/Login" />)
    }
    else {
        let name = sessionStorage.getItem('username')
        console.log(name)
        return(
            <div>
                <Navbar />
                <div className='wrapper'>
                    <div className="form-wrapper">
                        <br /> <br />
                        <h3 className='margin'>WELCOME</h3>
                        <br /><br />
                        <Link to="#"><button type='button' className='btn btn-info margin'>Go to Properties</button></Link>
                    </div>
                </div>
            </div>        
        )
    }
 
}

export default UserAfterLogin