import Description from "./components/Description";
import Actions from "./components/Actions";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getMobileDetails } from "../../services/mobileServices"
import { Row, Col, Image } from "antd";
import "./Details.css";

function Details() {
  const { id } = useParams();
  const [mobileDetails, setMobileDetails] = useState([]);

  console.log(id);
  useEffect(() => {
    getMobileDetails(id).then((itemData) => setMobileDetails(itemData))
  }, [])

  console.log(mobileDetails);

  return (
    <>
      <Row className="detailsWrapper" justify="center">
        <Col span={8} className="deviceImg">
          <Image
            preview={false}
            width={200}
            src={mobileDetails.imgUrl}
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
