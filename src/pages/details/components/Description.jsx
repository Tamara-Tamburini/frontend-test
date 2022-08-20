import { Col, List, Row } from "antd";

function Description() {


  return (
    <Row span={12}>
      <Col>
        <Row className="descriptionTitle">Mobile Description</Row>
        <Row>
            <List>
                <List.Item>Test 01</List.Item>
                <List.Item>Test 02</List.Item>
            </List>
        </Row>
      </Col>
    </Row>
  );
}

export default Description
