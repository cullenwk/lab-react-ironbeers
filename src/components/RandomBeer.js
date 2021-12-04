import React from 'react'
import Header from '../components/Header';
import axios from "axios";
import { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";



 function RandomBeer() {
     
  const {beerId} = useParams()
  const [beer, setBeer] = useState([]);

useEffect (() => {
async function getData() {
    const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
    console.log("this is the response",response)
    console.log("this is the response data",response.data)
    setBeer(response.data)
    console.log("this is the beer",beer)
  }


getData()
}, [beerId])


    return ( 
    <div >
       
  <div className='main-beer-container'>
            <div key={beer._id} className="card" className='beer-container'>
              <img  height='250px' src={beer.image_url} alt="beers" />
              <div>
                      <h3>{beer.name}</h3>
                  <p>{beer.tagline}</p>
                    <p>First brewed : {beer.first_brewed}</p>
                    <p>Attenuation level: {beer.attenuation_level}</p>
                    <p>Description: {beer.description}</p> 
                  <p>Created by: {beer.contributed_by}</p>                 
              </div>
            </div>
        </div>
    </div>
    )
} 
export default RandomBeer