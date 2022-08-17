import { Layout } from "antd";
import styles from "./App.css";
import MainHome from "./pages/mainHome/MainHome";
import Details from "./pages/details/Details";
import Breadcrumbs from "./components/Breadcrumbs";
import { MobileOutlined } from "@ant-design/icons";
import { Routes, Route, Navigate } from "react-router-dom";
import { Col, Row } from "antd";

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header className="header">
        <Row align="middle">
          <Col span={6} className="headerTitle"> Mobile Shop App</Col>
          <Col span={8} >
            <Breadcrumbs />
          </Col>
        </Row>
      </Header>

      <Layout>
        <Content>
          <Routes>
            <Route index element={<DefaultRoute />} />
            <Route path="home">
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
