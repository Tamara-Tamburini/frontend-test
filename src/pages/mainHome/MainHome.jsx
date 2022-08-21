import SearchInput from "./components/SearchInput";
import ItemList from "./components/ItemList";
import { useState, useEffect } from "react";
import { getMobile } from "../../services/mobileServices";
import "./MainHome.css";

function MainHome() {
  const [items, setItems] = useState([])
  const [filteredResults, setFilteredResults] = useState([])

  useEffect(() => {
    getMobile().then((itemsData) => setItems(itemsData))
  }, []);

  console.log(items);
  return (
    <>
      <SearchInput items={items} setItems={() => setItems()} />

      <ItemList items={items}  />
    </>
  );
}

export default MainHome;
