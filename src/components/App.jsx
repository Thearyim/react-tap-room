import React from 'react';
import Header from './Header';
import Body from './Body';

function App(){
  var appStyle={
    paddingTop: '50px'
  }
  return(
    <div>
      <Header/>
      <div>
        <Body/>
      </div>
    </div>
  );
}

export default App;
