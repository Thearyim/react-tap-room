import React from 'react';
import Header from './Header';
import Home from "./Home";
import KegList from './KegList';
import NewKegControl from "./NewKegControl";
import Error404 from "./Error404";
import { Switch, Route } from "react-router-dom";

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
        <Route path='/newkeg' component={NewKegControl} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
