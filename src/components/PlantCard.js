// src/components/PlantCard.js
import React, { useState } from 'react';

function PlantCard({ plant, onUpdatePlant, onDeletePlant }) {
  const [isEditing, setIsEditing] = useState(false);
  const [price, setPrice] = useState(plant.price);

  const handlePriceUpdate = () => {
    onUpdatePlant(plant.id, { price });
    setIsEditing(false);
  };

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      {isEditing ? (
        <div>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            step="0.01"
          />
          <button onClick={handlePriceUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <p>Price: ${plant.price}</p>
      )}
      <p>{plant.outOfStock ? 'Out of Stock' : 'In Stock'}</p>
      <button onClick={() => onUpdatePlant(plant.id, { outOfStock: !plant.outOfStock })}>
        {plant.outOfStock ? 'Mark In Stock' : 'Mark Out of Stock'}
      </button>
      {!isEditing && <button onClick={() => setIsEditing(true)}>Edit Price</button>}
      <button onClick={() => onDeletePlant(plant.id)}>Delete</button>
    </div>
  );
}

export default PlantCard;