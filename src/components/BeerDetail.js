import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import {Spinner} from 'react-bootstrap'


function BeerDetail() {
  const {beerId} = useParams()
  const [beer, setBeer] = useState([]);


useEffect(()=> {
async function getData() {
    const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
    // console.log("this is the response",response)
    // console.log("this is the response data",response.data)
    setBeer(response.data)
    // console.log("this is the beer",beer)
  }
getData()

}, [])

if(!BeerDetail) {
    return (
    <>
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="light" />
            <Spinner animation="grow" variant="dark" />
        </>
    )
}

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
export default BeerDetail