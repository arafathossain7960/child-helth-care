import React, { useEffect, useState } from 'react';
import {Link, useParams}from "react-router-dom";
import './SingleService.css';

const SingleService = () => { 

   const {id}= useParams();
  const [singleService, setSingleService]= useState([]);
  const [oneService, setOneService]=useState({});
  useEffect(()=>{
      fetch('/singleService.json')
      .then(res=>res.json())
      .then(data=> setSingleService(data));
  },[]);

  useEffect(()=>{
  const srv=singleService.find(service=>service.id===+id);
 setOneService(srv);
 console.log(srv)
  },[singleService]);
   


    return (
        <div className="single-service-container">
            <div className="single-service">
                <h1 className="text-primary bold py-5">This is our spacial service</h1>
                <h1><span>{oneService?.operationName}</span></h1>
               <div>
                   <img src={oneService?.photo} alt="" />
               </div>
                <p>About: {oneService?.description}</p>
                <br />
                <img src={oneService?.img } alt="" />
                <br />
                <p><b>More About: </b>{oneService?.fullDescribe}</p>
                <Link to="/home">
                <button className="btn btn-primary" >Go home</button>
                </Link>

            </div>
           
        </div>
    );
};

export default SingleService;