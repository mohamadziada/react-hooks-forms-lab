import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [name, setNameState] = useState("")
  const [category, setCategory] = useState("Produce");


  function submitHandler(event){
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name,
      category,
    });
  }

  function nameChangeHandler(event){
    setNameState(event.target.value)
  }

  function categoryChangeHandler(event){
    setCategory(event.target.value)
  }

  return (
    <form onSubmit={submitHandler} className="NewItem">
      <label>
        Name:
        <input value={name} onChange={nameChangeHandler} type="text" name="name" />
      </label>

      <label>
        Category:
        <select value={category} onChange={categoryChangeHandler} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
