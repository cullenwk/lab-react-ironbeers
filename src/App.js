import React from 'react';
import {Routes, Route} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import Home from './components/Home';
import Header from './components/Header';
import BeerList from './components/BeerList';
import BeerDetail from './components/BeerDetail';
import BeerForm from './components/BeerForm';
import RandomBeer from './components/RandomBeer';


function App() {

  const [beers, setBeers] = useState([])

  return (
    <div>
      <Header />
     
    
      <Routes>
      <Route path="/" element={<Home beers={beers} /> } />
      <Route path="/beers" element={<BeerList beers={beers} /> } />
      <Route path="/beers/:beerId" element={<BeerDetail beers={beers}/>}/> 
      <Route exact path="/random-beer" element={<RandomBeer />} />
      <Route exact path="/new-beer" element={<BeerForm />} />


      </Routes>
    </div>
  );
}

export default App;
