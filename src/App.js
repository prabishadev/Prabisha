import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import BlogPage from "./components/BlogPage";
import Services from "./components/ServicesPage";
import PortfolioPage from "./components/PortfolioPage";
import Footer from "./components/Footer";

const App = () => (
  <>
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/about" Component={AboutPage} />
      <Route path="/contact" Component={ContactPage} />
      <Route path="/blogs" Component={BlogPage} />
      <Route path="/portfolio" Component={PortfolioPage} />
      <Route path="/services" Component={Services} />
    </Routes>
    <Footer/>
  </>
);

export default App;
