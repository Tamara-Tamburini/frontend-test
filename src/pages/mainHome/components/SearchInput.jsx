import { Col, Row, Input } from "antd";
import { useState } from "react";

const { Search } = Input;

function SearchInput({ items, setItems }) {
  const [searchInput, setSearchInput] = useState("");

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    items.filter((item) => {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });


  };

  return (
    <Row align="end">
      <Col>
        <Search
          placeholder="Search device"
          onSearch={searchItems}
          className="searchInput"
        />
      </Col>
    </Row>
  );
}

export default SearchInput;
