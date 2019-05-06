import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  var myKegStyle = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px'
  }
  const kegInformation =
    <div>
      <h3>{props.name} - {props.brand} - {props.price}</h3>
      <p><em>{props.alcoholContent}</em></p>
      <hr/>
    </div>;
  if (props.currentRouterPath === '/editKeg'){
    return (
      <div onClick={() => {props.onKegSelection(props.kegId);}}> {kegInformation}</div>
    );
  } else {
    return (
      <div>{kegInformation}</div>
    );
  }
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func,
  kegId: PropTypes.string.isRequired
};

export default Keg;
