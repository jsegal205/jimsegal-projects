import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const NotFound = () => (
  <>
    <h2>Sorry, looks like I couldn't find what you were looking for.</h2>
    <Link to="/">Click to return somewhere familiar</Link>
  </>
);

export default NotFound;
