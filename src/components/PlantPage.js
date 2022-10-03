import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantListings, setPlantListings] = useState([])
  const [query, setQuery] = useState("") 
  const filteredListing = plantListings.filter(plant=>plant.name.toLowerCase().includes(query.toLowerCase()));

  useEffect(()=>{
  fetch( `http://localhost:6001/plants`, {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
    }
  })
  .then(res=>res.json())
  .then(data=>{setPlantListings(data)})
  }, [])

  function handleNewPlant(newPlant){
    console.log("prepost", newPlant)

    fetch(`http://localhost:6001/plants`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(newPlant)
    })
    .then(res=> res.json())
    .then(data=>console.log("Posted", data))
  
    setPlantListings([
      ...plantListings,
      newPlant
    ])
  }

  function handlePriceChange(id, price){
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        price: price
      })
    })
    .then(res=>res.json())
    .then(data=>console.log("patched", data))
    console.log("new price: ", id, price)

    const updatedPrice = plantListings.map(item=>{
      if (item.id === id){
        return {
          ...item,
          price: price
        }
      } else return item
    })

    setPlantListings(updatedPrice)
  }

  return (
    <main>
      <NewPlantForm addNewPlant={handleNewPlant} />
      <Search query={query} setQuery={setQuery} />
      <PlantList handlePriceChange={handlePriceChange} filteredListing = {filteredListing} />
    </main>
  );
}

export default PlantPage;
