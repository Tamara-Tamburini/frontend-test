import { Layout } from "antd";
import styles from "./App.module.css";
import MainHome from "./pages/mainHome/MainHome";
import Details from "./pages/details/Details";
import { Routes, Route, Navigate } from "react-router-dom";
import Breadcrumbs from "./components/Breadcrumbs";

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header className={styles.header}> 
        <Breadcrumbs />
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

const DefaultRoute = () => <Navigate to="/home" replace />

export default App;
