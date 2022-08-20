import { Skeleton, Row, Col, Image } from "antd";
import { Link } from "react-router-dom";

function ItemList({ items, result }) {
 
  if (!items) {
    return <Skeleton />;
  }

  if (items) {
    // items = result === !undefined ? result : items;
    return (
      <>
        <Row align="middle" gutter={[24, 24]} className="listWrapper">
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
          {/* {result === !undefined
            ? null
            : items.map((item, index) => {
                return (
                  <Col key={index} xs={24} sm={12} md={12} lg={6} xl={6}>
                    <Link to={`/${item.id}`}>
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
              })} */}
        </Row>
      </>
    );
  }
}
export default ItemList;
