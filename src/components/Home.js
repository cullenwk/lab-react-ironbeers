import { Link } from "react-router-dom";
import React from 'react';
import beers from '../assets/beers.png'
import newBeer from '../assets/newBeer.png'
import randomBeer from '../assets/randomBeer.png'

function Home() {
  return (
    <div>
    <div>
        <img style={{width: "1500px"}} src={beers} alt='All Beers'/>
        <Link to='/beers'>All Beers</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           In ut placerat ex. Sed feugiat sollicitudin ipsum ac malesuada. 
           Phasellus eu tellus luctus, aliquet lorem eu, faucibus magna. Phasellus tellus elit, auctor eget leo nec, convallis vulputate diam. 
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius posuere tempus. Cras sed mauris ligula. Curabitur in felis sem. 
           Donec nisl dolor, eleifend in gravida vel, dapibus sed mauris. Maecenas quis rhoncus enim, a luctus quam. Ut venenatis feugiat posuere. 
           Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
    </div>
    <div>
        <img style={{width: "1500px"}} src={randomBeer} alt='Random Beer'/>
        <Link to='/random-beer'>Random Beer</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           In ut placerat ex. Sed feugiat sollicitudin ipsum ac malesuada. 
           Phasellus eu tellus luctus, aliquet lorem eu, faucibus magna. Phasellus tellus elit, auctor eget leo nec, convallis vulputate diam. 
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius posuere tempus. Cras sed mauris ligula. Curabitur in felis sem. 
           Donec nisl dolor, eleifend in gravida vel, dapibus sed mauris. Maecenas quis rhoncus enim, a luctus quam. Ut venenatis feugiat posuere. 
           Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
    </div>
        <div>
        <img style={{width: "1500px"}} src={newBeer} alt='New Beer'/>
        <Link to='/new-beer'>New Beer</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           In ut placerat ex. Sed feugiat sollicitudin ipsum ac malesuada. 
           Phasellus eu tellus luctus, aliquet lorem eu, faucibus magna. Phasellus tellus elit, auctor eget leo nec, convallis vulputate diam. 
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius posuere tempus. Cras sed mauris ligula. Curabitur in felis sem. 
           Donec nisl dolor, eleifend in gravida vel, dapibus sed mauris. Maecenas quis rhoncus enim, a luctus quam. Ut venenatis feugiat posuere. 
           Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
    </div>
    </div>
  )
}


export default Home;