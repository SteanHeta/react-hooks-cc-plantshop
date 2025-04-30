// src/components/PlantList.js
import React from 'react';
import PlantCard from './PlantCard';

function PlantList({ plants, onUpdatePlant, onDeletePlant }) {
  return (
    <div className="plant-list">
      {plants.map(plant => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onUpdatePlant={onUpdatePlant}
          onDeletePlant={onDeletePlant}
        />
      ))}
    </div>
  );
}

export default PlantList;