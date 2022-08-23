import { Col } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

function Cart({ counter }) {
  
  return (
    <>
      <Col flex="auto" className="headerCart">
        <ShoppingCartOutlined />
        {parseInt(counter) > 0 ? (
          <div className="cartCounter">{parseInt(counter)}</div>
        ) : null}
      </Col>
    </>
  );
}

export default Cart;
