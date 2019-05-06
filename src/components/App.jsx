import React from 'react';
import Header from './Header';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
//import Moment from 'moment';
import EditKeg from './EditKeg';
import { v4 } from 'uuid';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: {},
      selectedKeg: null
    };

    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.handleChangingSelectedKeg = this.handleChangingSelectedKeg.bind(this);
  }

  handleAddingNewKegToList(newKeg){
    console.log("Adding new keg: " + newKeg);
    var newKegId = v4();
    var newMasterKegList = Object.assign({}, this.state.masterKegList, {
      [newKegId]: newKeg
    });

    this.setState({masterKegList: newMasterKegList});
  }

  handleChangingSelectedKeg(kegId){
    this.setState({selectedKeg: kegId});
  }

  render(){
    return(
      <div>
        <Header/>
        <Switch>
          <Route exact path='/'
            render={() => (
              <KegList kegList={this.state.masterKegList}
              />
            )}
          />
          <Route path='/editKeg' render={(props)=>(
            <EditKeg kegList={this.state.masterKegList} currentRouterPath={props.location.pathname}
              />
            )}
          />
          <Route path='/newkeg' render={()=>(
            <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}
              />
            )}
          />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
