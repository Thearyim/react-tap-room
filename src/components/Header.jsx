import React from  'react';

function Header() {
  var headerStyle={
    display: "inline-block",
    color: "blue",
  }
  return(
    <div>
      <h1 style={headerStyle}>Tap Room</h1>
    </div>
  );
}

export default Header;
