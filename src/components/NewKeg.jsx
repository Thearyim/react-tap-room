import React from "react";
import { Link } from "react-router-dom";

function NewKeg(){
  return(
    <div>
      <form>
        <label for="name">Name:</label>
        <input type="text" id="name"></input>

        <label for="brand">Brand:</label>
        <input type="text" id="brand"></input>

        <label for="price">Price:</label>
        <input type="text" id="price"></input>

        <label for="alcoholContent">Alcohol Content:</label>
        <input type="text" id="alcoholContent"></input>

        <Link to="/allkegs">
          <button>Submit</button>
        </Link>
      </form>
    </div>
  );
}

export default NewKeg;
