import { Link } from "react-router-dom";
import { Row, Col, Image } from "antd";

function Item({ items }) {
  return (
    <>
      {items.map((item, index) => {
        return (
          <Col key={index} xs={24} sm={12} md={12} lg={6} xl={6}>
            <Link to={item.id}>
              <Row justify="center">
                <Image preview={false} width={200} src={item.imgUrl} />
              </Row>
              <Row justify="center" className="itemModel">
                {item.brand} - {item.model}
              </Row>
              <Row justify="center" className="itemPrice">
                {item.price}€
              </Row>
            </Link>
          </Col>
        );
      })}
    </>
  );
}

export default Item;
