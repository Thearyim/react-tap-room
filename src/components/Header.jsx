import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  var headerStyle={
    color: 'blue',
    textAlign: 'center',
  };
  return(
    <div>
      <h1 style={headerStyle}>Tap Room</h1>
      <Link to="/">
        <span>View Kegs</span>
      </Link>
      <Link to="/newkeg">
        <span>New Keg</span>
      </Link>
      <Link to="/editKeg">
        <span>Edit Kegs</span>
      </Link>
    </div>
  );
}

export default Header;
