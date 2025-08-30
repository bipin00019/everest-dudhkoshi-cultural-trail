import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import ContactPage from "../pages/ContactPage";
import { PATHS } from "../constants/Paths";
import About from "../pages/About";
const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={PATHS.CONTACTPAGE} element={<ContactPage />} />
        <Route path={PATHS.ABOUT} element={<About />} />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
