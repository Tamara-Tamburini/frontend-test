import { Row } from "antd";
import React, { useState, useEffect } from "react";
import SearchInput from "./components/SearchInput";
import ItemList from "./components/ItemList";
import { getMobile } from "../../services/mobileServices";

function MainHome() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getMobile().then((itemsArray) => setItems(itemsArray));
  }, []);
  return (
    <>
      <SearchInput />

      <Row align="middle" gutter={[24, 24]} className="listWrapper">
        <ItemList items={items} />
      </Row>
    </>
  );
}


export default MainHome;
