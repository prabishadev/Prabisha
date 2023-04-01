import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import BlogPage from "./components/BlogPage";
import Services from "./components/ServicesPage";
import PortfolioPage from "./components/PortfolioPage";
import Login from "./components/Login";
import Register from "./components/Register";

import AvailableCourses from "./components/LMS/AvailableCourses";
import CertificatesAchieved from "./components/LMS/CertificatesAchieved";
import ScoreSum from "./components/LMS/Score";
import HTML from "./components/LMS/Courses/HTML";
import CSS from "./components/LMS/Courses/CSS";
import Ajax from "./components/LMS/Courses/Ajax";
import Bootstrap from "./components/LMS/Courses/Bootstrap";
import JavascriptCourse from "./components/LMS/Courses/JavascriptCourse";
import Nodejs from "./components/LMS/Courses/Nodejs";
import ReactCourse from "./components/LMS/Courses/ReactCourse";
import ResponsiveWebDesign from "./components/LMS/Courses/ResponsiveWebDesign";
import RestfulAPI from "./components/LMS/Courses/RestfulAPI";

import PremiumCourses from "./components/LMS/PremiumCourses";

const App = () => (
  <>
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/about" Component={AboutPage} />
      <Route path="/contact" Component={ContactPage} />
      <Route path="/blogs" Component={BlogPage} />
      <Route path="/portfolio" Component={PortfolioPage} />
      <Route path="/services" Component={Services} />
      <Route path="/login" Component={Login} />
      <Route path="/register" Component={Register} />
      <Route path="/lms-available" Component={AvailableCourses} />
      <Route path="/lms-premium" Component={PremiumCourses} />
      <Route path="/lms-certificates" Component={CertificatesAchieved} />
      <Route path="/lms-score" Component={ScoreSum} />
      <Route path="/learn-HTML" Component={HTML} />
      <Route path="/learn-CSS" Component={CSS} />
      <Route path="/learn-Ajax" Component={Ajax} />
      <Route path="/learn-Bootstrap" Component={Bootstrap} />
      <Route path="/learn-Javascript" Component={JavascriptCourse} />
      <Route path="/learn-Node.js" Component={Nodejs} />
      <Route path="/learn-React" Component={ReactCourse} />
      <Route path="/learn-RESTful-API" Component={RestfulAPI} />
      <Route
        path="/learn-Responsive-Web-Design"
        Component={ResponsiveWebDesign}
      />
    </Routes>
  </>
);

export default App;
