import React from "react";

function PizzasList(props) {
  console.log(props);
  return (
    <ul>
      {props.pizzas.map((pizza) => (
        <li key={pizza}>{pizza} </li>
      ))}
    </ul>
  );
}

export default PizzasList;
