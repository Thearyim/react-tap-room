import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  var homeStyle={
    color: 'red',
  }
  return(
    <div style={homeStyle}>
      Welcome!

      <Link to="/allkegs"><button>All Keg</button></Link>
      <Link to="/newkeg"><button>New keg</button></Link>
    </div>
  );
}

export default Home;
