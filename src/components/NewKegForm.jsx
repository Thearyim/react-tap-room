import React from "react";
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';

function NewKegForm(props) {
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: _name.value, brand: _brand.value, price: _price.value, alcoholContent: _alcoholContent.value, id: v4(), timeAdded: new Moment()});
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _alcoholContent.value = '';
  }

  return(
    <div>
      <form onSubmit={handleNewKegFormSubmission}>
        <input type='text' id='name' placeholder='Beer Name' ref={(input) => {_name = input;}}/>

        <input type='text' id='brand' placeholder='Beer Brand' ref={(input) => {_brand = input;}}/>

        <input type='text 'id='price' placeholder='Price per Pint' ref={(input) => {_price = input;}}/>

        <input type="text" id="alcoholContent" placeholder='Alcohol Content' ref={(input) => {_alcoholContent = input;}}/>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
