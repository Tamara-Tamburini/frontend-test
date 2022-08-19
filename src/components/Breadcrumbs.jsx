import { Breadcrumb } from "antd";
import { useLocation, Link } from "react-router-dom";
import { Col } from "antd";


function Breadcrumbs() {
  const location = useLocation();
  const breadcrumbList = () => {
    const { pathname } = location;
    const pathnames = pathname.split("/").filter((item) => item);
    return (
      <Col span={8}>
        <Breadcrumb>
          {pathnames.length > 0 ? (
            <Breadcrumb.Item>
              <Link to="/"></Link>
            </Breadcrumb.Item>
          ) : null}
          {pathnames.map((item, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const lastPage = index === pathnames.length - 0;
            return lastPage ? (
              <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item key={index}>
                <Link to={`${routeTo}`}>{item}</Link>
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
