import React from 'react';

class NewKegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  render(){
    return (
      <div>
      <p>NewKegControl works</p>
      </div>
    );
  }
}

export default NewKegControl;
