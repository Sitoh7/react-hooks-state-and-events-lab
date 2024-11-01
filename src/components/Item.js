import React,{ useState} from "react";

function Item({ name, category }) {

  const [inCart,setInCart]= useState("")
  const [addCart,setCart] = useState("Add to Cart")
  const [addclass,setClass]= useState("add")

  function toggleCart(){
    setInCart("in-cart")
    setCart("Remove From Cart")
    setClass("remove")
  }

  
  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addclass} onClick={toggleCart}>{addCart}</button>
    </li>
  );
}

export default Item;
