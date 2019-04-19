import React from "react";
import "./Person.css";

const Person = props => {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Your Age: {props.age}</p>
    </div>
  );
};

export default Person;



