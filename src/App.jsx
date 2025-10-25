import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MenuList from "./components/MenuList";
function App() {
  const [category, setCategory] = useState("Seafood");

  function changeCategory(name) {
      setCategory(name);
  }

  return (
    <>
      <Header category={category} changeCategory={changeCategory} />
      <MenuList category={category} />
    </>
  );
}

export default App;
