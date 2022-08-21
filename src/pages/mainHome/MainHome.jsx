import SearchInput from "./components/SearchInput";
import ItemList from "./components/ItemList";
import { useState, useEffect } from "react";
import { getMobile } from "../../services/mobileServices";
import "./MainHome.css";

function MainHome() {
  const [items, setItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])

  useEffect(() => {
    getMobile().then((itemsData) => setItems(itemsData))
  }, []);

  return (
    <>
      <SearchInput items={items} filteredItem={setFilteredItems} />
      <ItemList items={items} filteredItems={filteredItems} />
    </>
  );
}

export default MainHome;
