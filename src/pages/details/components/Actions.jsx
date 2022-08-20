import { Col, Row, Form, Button, Radio } from "antd";

function Actions() {
    

  return (
    <Row >
      <Form>
        <Form.Item label="Colors">
            <Radio.Group value="black">
                <Radio.Button value="black">Black</Radio.Button>
                <Radio.Button value="white">White</Radio.Button>
            </Radio.Group>
        </Form.Item>
        <Form.Item label="Storages">
            <Radio.Group value="2000">
                <Radio.Button value="2000">16 GB</Radio.Button>
                <Radio.Button value="2001">32 GB</Radio.Button>
            </Radio.Group>
        </Form.Item>
        <Form.Item>
            <Button type="primary">Add to Card</Button>
        </Form.Item>
      </Form>
    </Row>
  );
}

export default Actions
