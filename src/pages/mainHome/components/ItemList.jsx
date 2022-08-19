import { useEffect } from "react";
import { Skeleton, Row, Col, Image } from "antd";
import { useLocation, Link } from "react-router-dom";

function ItemList({ items }) {
  if (!items) {
    return <Skeleton />;
  }

  if (items) {
    return (
      <>
        {items.map((item, index) => {
            console.log(index);
          return (
            <Col xs={2} sm={4} md={6} lg={6} xl={6}>
              <Link to={`/${item.id}`}>
                <Row justify="center">
                  <Image preview={false} width={200} src={item.imgUrl} />
                </Row>
                <Row justify="center" className="itemModel">{item.brand} - {item.model}</Row>
                <Row justify="center" className="itemPrice">{item.price}€</Row>
              </Link>
            </Col>
          );
        })}
      </>
    );
  }
}
export default ItemList;
