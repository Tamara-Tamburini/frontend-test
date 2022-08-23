import { useLocation, Link } from "react-router-dom";
import { Col, Breadcrumb } from "antd";

function Breadcrumbs({breadcrumbName}) {
  const location = useLocation();
  const breadcrumbList = () => {
    const { pathname } = location;
    const pathnames = pathname.split("/").filter((item) => item);
    return (
      <Col xs={12} sm={10} md={10} lg={10} xl={10}>
        <Breadcrumb>
          {pathnames.map((item, index) => {
            var itemName = item === "home" ? "Products List" : breadcrumbName;
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const lastPage = index === pathnames.length - 0;
            return lastPage ? (
              <Breadcrumb.Item key={index}>{itemName}</Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item key={index}>
                <Link to={`${routeTo}`}>{itemName}</Link>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </Col>
    );
  };
  return breadcrumbList();
}

export default Breadcrumbs;
