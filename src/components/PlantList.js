import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ handlePriceChange, filteredListing }) {

  const plantCardMaker = filteredListing.map(plant=>{
    return <PlantCard handlePriceChange={handlePriceChange} id={plant.id} key={plant.id} name={plant.name} image={plant.image} price={plant.price} />
  })

  return (
    <ul className="cards">{plantCardMaker}</ul>
  );
}

export default PlantList;
