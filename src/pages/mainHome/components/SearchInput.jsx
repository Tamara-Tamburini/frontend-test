import { Col, Row, Input } from "antd";

const { Search } = Input;

function SearchInput() {
  // TODO:
  const onSearch = (value) => console.log(value);

  return (
    <Row align="end">
      <Col>
        <Search
          placeholder="Search device"
          onSearch={onSearch}
          className="searchInput"
        />
      </Col>
    </Row>
  );
}

export default SearchInput
