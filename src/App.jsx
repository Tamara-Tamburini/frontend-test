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
  // Cart counter hook
  const [counter, setCounter] = useState(0);

  // If there was data stored in localStore, sends it to the cart
  useEffect(() => {
    if (window.localStorage !== undefined) {
      const count = window.localStorage.getItem("count");
      if (count !== null) {
        setCounter(count);
      }
    }
  }, []);

  // Local storage expiration
  var hours = 1; // to clear the localStorage after 1 hour
  var now = new Date().getTime();
  var setupTime = localStorage.getItem("setupTime");
  if (setupTime == null) {
    localStorage.setItem("setupTime", now);
  } else {
      if (now - setupTime > hours * 60 * 60 * 1000) {
      localStorage.clear();
      localStorage.setItem("setupTime", now);
      setCounter(0);
      console.log("Local storage has expired");
    }
  }

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
              <Route path=":id" element={<Details counter={setCounter} />} />
            </Route>
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

const DefaultRoute = () => <Navigate to="/home" replace />;

export default App;
