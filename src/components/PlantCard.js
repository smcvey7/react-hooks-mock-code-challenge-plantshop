import React, {useState} from "react";

function PlantCard({id, name, image, price, handlePriceChange}) {
  const [inStock, setInStock] = useState(true)
  const [changePrice, setChangePrice] = useState(false)
  const [newPrice, setNewPrice] = useState("")

  return (
    <li key = {id} className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p onClick={()=>setChangePrice(!changePrice)}>Price: {price}</p>
      
        {changePrice ? (
          <form onSubmit={(e)=>{e.preventDefault() ; handlePriceChange(id, newPrice); setNewPrice(""); setChangePrice(false)}}>
            <input onChange={(e)=>setNewPrice(e.target.value)} value={newPrice} placeholder={"new price"}></input>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <p></p>
        )}
      
      {inStock ? (
        <button onClick={()=>setInStock(!inStock)} className="primary">In Stock</button>
      ) : (
        <button onClick={()=>setInStock(!inStock)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
