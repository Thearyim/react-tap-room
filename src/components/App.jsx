import React from 'react';
import Header from './Header';
import KegList from './KegList';
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import NewKeg from "./NewKeg";
import Error404 from "./Error404";

function App(){
  var appStyle={
    paddingTop: '50px'
  }
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/allkegs' component={KegList} />
        <Route path='/newkeg' component={NewKeg} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
