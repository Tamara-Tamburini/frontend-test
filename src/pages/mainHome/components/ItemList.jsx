import { Link } from "react-router-dom";
import { Row, Col, Image } from "antd";

function ItemList({ items, filteredItems }) {
  // Controls if the received items are those obtained from the search or from API call obtined data
  items = filteredItems.length > 0 ? filteredItems : items;

  return (
    <>
      <Row align="middle" gutter={[24, 24]} className="listWrapper">
        {items.map((item, index) => {
          // Only list products with price
          // Because without a price I take it for granted that there is no stock
          if (item.price) {
            return (
              <Col key={index} xs={24} sm={12} md={12} lg={6} xl={6} className="itemWrapper">
                <Link to={item.id}>
                  <Row justify="center">
                    <Image preview={false} width={200} src={item.imgUrl} />
                  </Row>
                  <Row justify="center" className="itemModel">
                    {item.model}
                  </Row>
                  <Row justify="center" className="itemPrice">
                    {item.price}€
                  </Row>
                </Link>
              </Col>
            );
          }
        })}
      </Row>
    </>
  );
}
export default ItemList;
