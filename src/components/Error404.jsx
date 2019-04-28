import React from "react";
import error404image from "../assets/images/error404.jpg";
import { Link } from "react-router-dom";

function Error404(props) {
  return(
    <div>
      <img src={error404image} />
      <h2>The page {props.name.pathname} you are looking for does not exist!</h2>
      <h3>Would you like to <Link to="/">return</Link> instead?</h3>
    </div>
  );
}

export default Error404;
