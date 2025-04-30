// src/components/PlantPage.js
import React from 'react';
import Header from './Header';
import NewPlantForm from './NewPlantForm';
import PlantList from './PlantList';
import Search from './Search';

function PlantPage() {
  return (
    <div className="plant-page">
      <Header />
      <NewPlantForm />
      <Search />
      <PlantList />
    </div>
  );
}

export default PlantPage;