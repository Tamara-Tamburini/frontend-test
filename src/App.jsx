import { Layout } from "antd";
import "./App.css";
import MainHome from "./pages/mainHome/MainHome";
import Details from "./pages/details/Details";
import Breadcrumbs from "./components/Breadcrumbs";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { Col, Row } from "antd";

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header className="header" style={{ padding: "0 20px" }}>
        <Row align="middle">
          <Col span={6} className="headerTitle">
            <Link to="/home">Mobile Shop App</Link>
          </Col>
          <Breadcrumbs />
          <Col span={2} offset={8} className="headerCart">
            <ShoppingCartOutlined />
          </Col>
        </Row>
      </Header>

      <Layout className="layoutContent">
        <Content className="content">
          <Routes>
            <Route index element={<DefaultRoute />} />
            <Route path="/home">
              <Route index element={<MainHome />} />
              <Route path=":id" element={<Details />} />
            </Route>
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

const DefaultRoute = () => <Navigate to="/home" replace />;

export default App;
