import MainHome from "./pages/mainHome/MainHome";
import Details from "./pages/details/Details";
import Breadcrumbs from "./components/Breadcrumbs";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { Col, Row, Layout } from "antd";

import "./App.css";

const { Header, Content } = Layout;

function App() {
  // TODO:
  const [cache, setCache] = useState({});
  const [counter, setCounter] = useState(0);

  // useEffect(() => {
  // 	if (window.localStorage !== undefined) {
  // 		cache = window.localStorage.getItem('count');
  // 		cache !== null ? setCounter(JSON.parse(cache)) : null;
  // 	}
  // }, []);

  return (
    <Layout>
      <Header className="header" style={{ padding: "0 20px" }}>
        <Row align="middle">
          <Col xs={8} sm={6} md={6} lg={6} xl={6} className="headerTitle">
            <Link to="/">Mobile Shop App</Link>
          </Col>
          <Breadcrumbs />
          <Cart counter={counter}></Cart>
        </Row>
      </Header>

      <Layout className="layoutContent">
        <Content className="content">
          <Routes>
            <Route index element={<DefaultRoute />} />
            <Route path="/home">
              <Route index element={<MainHome />} />
              <Route
                path=":id"
                element={<Details counter={setCounter} cache={setCache} />}
              />
            </Route>
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

const DefaultRoute = () => <Navigate to="/home" replace />;

export default App;
