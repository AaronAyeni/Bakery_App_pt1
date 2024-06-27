import React, { useState } from 'react';
import AverageRating from './AverageRating.jsx';
import CakeList from './CakeList.jsx';

const App = () => {
  const [cakes] = useState([
    {
      cakeName: "Victoria Sponge",
      ingredients: ["eggs", "butter", "sugar", "self-raising flour", "baking powder", "milk"],
      price: 5,
      rating: 5
    },
    {
      cakeName: "Tea Loaf",
      ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
      price: 2,
      rating: 3
    },
    {
      cakeName: "Carrot Cake",
      ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
      price: 8,
      rating: 5
    }
  ]);

  const calculateAverageRating = () => {
    const totalRating = cakes.reduce((sum, cake) => sum + cake.rating, 0);
    return totalRating / cakes.length;
  };

  const averageRating = calculateAverageRating();

  return (
    <div>
      <h1>Cake Recipes App</h1>
      <AverageRating averageRating={averageRating} />
      <CakeList cakes={cakes} />
    </div>
  );
};

export default App;