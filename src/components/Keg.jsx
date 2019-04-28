import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  var myKegStyle = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px'
  }
  return(
  <div>
    <h3>{props.name} - {props.brand} - {props.price}</h3>
    <p><em>{props.alcoholContent}</em></p>
    <hr/>
  </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string,
  alcoholContent: PropTypes.string
};

export default Keg;
