import MainHome from "./pages/mainHome/MainHome";
import Details from "./pages/details/Details";
import Breadcrumbs from "./components/Breadcrumbs";
import { useEffect } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { Col, Row,Layout } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./App.css";

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header className="header" style={{ padding: "0 20px" }}>
        <Row align="middle">
          <Col xs={8} sm={6} md={6} lg={6} xl={6} className="headerTitle">
            <Link to="/">Mobile Shop App</Link>
          </Col>
          <Breadcrumbs />
          <Col flex="auto" className="headerCart">
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
