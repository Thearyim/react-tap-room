import React from "react";
import { Link } from "react-router-dom";

function NewKegForm() {
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _alcoholContent.value = '';
  }

  return(
    <div>
      <form onSubmit={handleNewKegFormSubmission}>
        <input type="text" id="name" placeholder='Beer Name' ref={(input) => {_name = input;}}/>

        <input type="text" id="brand" placeholder='Beer Brand' ref={(input) => {_brand = input;}}/>

        <input type="text" id="price" placeholder='Price per Pint' ref={(input) => {_price = input;}}/>

        <input type="text" id="alcoholContent" placeholder='Alcohol Content' ref={(input) => {_alcoholContent = input;}}/>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default NewKegForm;
