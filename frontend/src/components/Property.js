import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

function Property() {
    const [propList, setpropList] = useState([]);
    console.log(propList);

    //Similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        axios.get('http://localhost:8000/api/Property')
        .then(response => {
            console.log(response.data)
            setpropList(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    function viewpropList() {
        return propList.map((currentrow, index) => {
            return (
                <div className="card text-center card-width" key={index}>
                    <div className="card-header">
                        <h4 className="card-tittle col">
                            {currentrow.tittle}
                        </h4>
                    </div>
                    <div className="card-body">
                        <p className="card-text">
                            Location : {currentrow.location}, {currentrow.city} <br /> 
                            Price : Naira {currentrow.price} <br />
                            Bedrooms : {currentrow.bedroom} <br />
                            Bathrooms : {currentrow.bathroom} <br />

                        </p>
                    </div>
                    <div className="card-footer text-muted">
                        <a href="#" className="btn btn-primary">
                            Buy
                        </a>
                    </div>
                </div>
            );
        });
    }

    return (
        <div><Navbar />
            <div className="contact">
                <h1 className="head">Properties</h1>
                {viewpropList()}
            </div>
        </div>


    );
}

export default Property


//Property is to fetch