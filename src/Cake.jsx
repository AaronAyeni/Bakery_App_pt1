import React from 'react';

const Cake = ({ cake }) => (
  <div>
    <h3>Cake Name: {cake.cakeName}</h3>
    <p>Ingredients:</p>
    <ul>
      {cake.ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
    <p>Price: £{cake.price}</p>
    <p>Rating: {cake.rating}</p>
  </div>
);

export default Cake;