import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [selectedCat, setSelectedCat] = useState("Produce")
  const [text, setText] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    onItemFormSubmit({ id: uuid(),name: text, category: selectedCat})
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={text}
          placeholder="Name:..."
          onChange={(e) => setText(e.target.value)} 
        />
      </label>

      <label>
        Category:
        <select 
          name="category" 
          onChange={(e) => setSelectedCat(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;

//onSubmit={e => {e.preventDefault(); onItemFormSubmit(newItem)}}

//   function handleSubmit(e){
//     e.preventDefault()
//     const newItem ={
//     id: uuid(),
//     name: newItemName,
//     category: newCat
//   }
//   onItemFormSubmit(newItem)
// }

  

  // function handleSubmit(e){
  //   e.preventDefault();
  //   const newItem = {
  //     id: uuid(),
  //     name: itemName,
  //     category: itemCategory
  //   }
  //   formSubmit(newItem)
  // }