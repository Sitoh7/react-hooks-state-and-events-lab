import React,{ useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

const [darkMode,setDarkmode] = useState(false)

function toggleDark(){
  setDarkmode(darkMode => !darkMode)
}
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = darkMode ? "App dark" : "App light"
  const btnName = darkMode ? "Dark Mode" : "Light Mode" 

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDark}>{btnName}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
