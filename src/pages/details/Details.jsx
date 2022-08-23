import Description from "./components/Description";
import Actions from "./components/Actions";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMobileDetails } from "../../services/mobileServices";
import { Row, Col, Image } from "antd";
import "./Details.css";

function Details({ counter, breadcrumbName }) {
  const { id } = useParams();
  const [mobileDetails, setMobileDetails] = useState([]);

  // Gets the specific device API data and send it to setMobileDeatails hook
  useEffect(() => {
    getMobileDetails(id).then((itemData) => {
      setMobileDetails(itemData)
      breadcrumbName(itemData.model)
    });
  }, []);

  return (
    <>
      <div className="detailsWrapper">
        <Row className="detailsRow" justify="center">
          {/* Image Column */}
          <Col
            span={8}
            className="deviceImg"
            xs={24}
            sm={6}
            md={8}
            lg={8}
            xl={8}
          >
            <Image
              preview={false}
              width={200}
              src={mobileDetails.imgUrl}
            ></Image>
          </Col>

          {/* Details Column */}
          <Col
            span={12}
            className="deviceDetails"
            xs={24}
            sm={8}
            md={12}
            lg={12}
            xl={12}
          >
            <div className="detailsTitle">
              {mobileDetails.brand} - {mobileDetails.model}
            </div>
            <h2 className="detailsPrice">{mobileDetails.price}€</h2>

            {/* Actions Section */}
            <Actions
              id={mobileDetails.id}
              options={mobileDetails.options}
              counter={counter}
            />

            {/* Description Section */}
            <h2 className="descriptionTitle">Details</h2>
            <Description details={mobileDetails} />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Details;
