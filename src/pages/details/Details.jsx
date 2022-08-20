import styles from "./Details.css";
import { Row, Col, Image } from "antd";
import Description from "./components/Description";
import Actions from "./components/Actions";

function Details() {
 
  return (
    <>
      <Row className="detailsWrapper" justify="center" >
        <Col span={8} className="deviceImg">
          <Image 
            preview={false}
            width={200}
            src="https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg"
          ></Image>
        </Col>
        <Col span={12} className="deviceDetails">
          <Description />
          <Actions />
        </Col>
      </Row>
    </>
  );
}

export default Details;
