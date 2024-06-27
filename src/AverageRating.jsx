import React from 'react';

const AverageRating = ({ averageRating }) => (
  <div>
    <h2>Average Rating: {averageRating.toFixed(2)}</h2>
  </div>
);

export default AverageRating;