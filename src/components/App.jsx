import React from 'react';
import Header from './Header';
import Home from "./Home";
import KegList from './KegList';
import NewKegControl from "./NewKegControl";
import Error404 from "./Error404";
import { Switch, Route } from "react-router-dom";


class App extends React.component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }

handleAddingNewKegToList(newKeg){
  var newMasterKegList = this.state.masterKegList.slice();
  newMasterKegList.push(newKeg);
  this.setState({masterKegList: newMasterKegList});
}

  render(){
    var appStyle={
      paddingTop: '50px'
    }
    return(
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/allkegs' render={()=><KegList kegList={this.state.masterKegList} />} />
          <Route path='/newkeg' render={()=><NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
