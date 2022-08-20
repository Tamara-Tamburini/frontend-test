import { Col, Row, Input } from "antd";
import { useState } from "react";

const { Search } = Input;

function SearchInput() {
  const [searchInput, setSearchInput] = useState("")

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
  }


  // const onSearch = (value) => {
    
  // };

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

export default SearchInput
