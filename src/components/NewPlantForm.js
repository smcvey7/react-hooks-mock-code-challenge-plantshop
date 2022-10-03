import React, {useState} from "react";

function NewPlantForm({ addNewPlant }) {
  const [newPlant, setNewPlant] = useState({
    name: "",
    image: "",
    price: ""
  })

  function onSubmitClick(e){
    if (newPlant.name !== "" && newPlant.image !== "" && newPlant.price !== ""){
      e.preventDefault();
      addNewPlant(newPlant)
      setNewPlant({
        "name": "",
        "image": "",
        "price": ""
      })
    }else alert("Please complete form")
  }

  function handleChange(e){
    setNewPlant({
      ...newPlant,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={onSubmitClick}>
        <input onChange={handleChange} type="text" name="name" placeholder="Plant name" value={newPlant.name} />
        <input onChange={handleChange} type="text" name="image" placeholder="Image URL" value={newPlant.image}/>
        <input onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" value={newPlant.price}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
