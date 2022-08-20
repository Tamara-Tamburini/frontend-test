import { Row } from "antd";
import React, { useState, useEffect } from "react";
import SearchInput from "./components/SearchInput";
import ItemList from "./components/ItemList";
import { getMobile } from "../../services/mobileServices";
import styles from "./MainHome.css";

function MainHome() {
  const [items, setItems] = useState([])
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    getMobile().then((itemsData) => setItems(itemsData))
  }, []);
  return (
    <>
      <SearchInput items={items} setItems={() => setItems()} />

      <ItemList items={items}  />
    </>
  );
}

export default MainHome;
