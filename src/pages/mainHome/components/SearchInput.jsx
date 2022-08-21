import { Col, Row, Input } from "antd";

const { Search } = Input;

function SearchInput({ items, filteredItem }) {
  const searchItems = (searchValue) => {
    const filteredData = items.filter((item) => {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    });

    filteredItem(filteredData);

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
