import React from 'react';
import Home from './Home';

function Body() {
  var bodyStyle={
    color: 'red'
  }
  return(
    <div style={bodyStyle}>
      <Home/>
    </div>
  );
}

export default Body;
