import React from 'react';
import Cake from './Cake.jsx';

const CakeList = ({ cakes }) => (
  <div>
    {cakes.map((cake, index) => (
      <Cake key={index} cake={cake} />
    ))}
  </div>
);

export default CakeList;