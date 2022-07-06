import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";
import { interfaces } from "mocha";

function ShoppingList({ items, onItemFormSubmit }) {
  console.log(items)
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("") 

  const [newItemName, setNewItemName] = useState("")
  const [newCat, setNewCat] = useState("Produce")
  const [finalItems, setFinalItems] = useState(items)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(newSearch){
    setSearch(newSearch)
  }


  const itemsToDisplay = items.filter(item => {
      if (selectedCategory === "All") {
        return true;
      } 
      else {
        return item.category === selectedCategory;
      }
  })
  
  const searchItems = itemsToDisplay.filter(item => item.name.includes(search))
  
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange}  onSearchChange={handleSearchChange} search={search}/>
      <ul className="Items">
        {searchItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
//items ={items} newItemName={newItemName} newCat={newCat} test={handleNewItemName} test2={handleCatChange}