import React from "react";
import Keg from "./Keg";
import { Link } from 'react-router-dom';

var masterKegList = [
  {
    name: 'Stellar',
    brand: 'Stellar',
    price: '6',
    alcoholContent: '5%'
  },
  {
    name: 'Guinness',
    brand: 'Guinness',
    price: '7',
    alcoholContent: '6%'
  },
  {
    name: 'Stone',
    brand: 'Stone',
    price: '8',
    alcoholContent: '7%'
  },
];

function KegList(){
  return(
    <div>
      <hr/>
      {masterKegList.map((keg, index) =>
        <Keg names={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          key={index}/>
      )}
      <Link to="/newkeg"><button>New Keg</button></Link>
      <Link to="/"><button>Home</button></Link>
    </div>
  );
}

export default KegList;
