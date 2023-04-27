import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import BlogPage from "./components/BlogPage";
import Services from "./components/ServicesPage";
import PortfolioPage from "./components/PortfolioPage";
import TypoGraphy from "./components/LMS/Courses/TypoGraphy";
import Login from "./components/Login";
import Register from "./components/Register";
import ColorTheory from "./components/LMS/Courses/ColorTheory";
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
import LayoutDesign from "./components/LMS/Courses/LayoutDesign";
import UIDesign from "./components/LMS/Courses/UIDesign";
import UXDesign from "./components/LMS/Courses/UXDesign";
import WireFraming from "./components/LMS/Courses/WireFraming";
import Accessibility from "./components/LMS/Courses/Accessibility";
import WebDevelopmentWithPython from "./components/LMS/Courses/PythonWebDev";

import PremiumCourses from "./components/LMS/PremiumCourses";
import WebScrappingWithPython from "./components/LMS/Courses/WebScrappingWithPython";
import WebSecurityFundamentals from "./components/LMS/Courses/WebSecurityFundamentals";
import PHPProgramming from "./components/LMS/Courses/PHPProgramming";
import MySQLFundamentals from "./components/LMS/Courses/MySQLFundamentals"


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
      <Route path="/learn-Color-Theory" Component={ColorTheory} />
      <Route path="/learn-Typography" Component={TypoGraphy} />
      <Route path="/learn-Responsive-Design" Component={ResponsiveWebDesign} />
      <Route path="/learn-Layout-Design" Component={LayoutDesign} />
      <Route path="/learn-User-Interface-Design" Component={UIDesign} />
      <Route path="/learn-User-Experience-Design" Component={UXDesign} />
      <Route path="/learn-Wireframing" Component={WireFraming} />
      <Route path="/learn-Accessibility" Component={Accessibility} />
      <Route path="/learn-Visual-Hierarchy" Component={Accessibility} />
      <Route path="/learn-Full-Stack-Web-Development-with-Python" Component={WebDevelopmentWithPython} />
      <Route path="/learn-Web-Dev-with-Python" Component={WebDevelopmentWithPython}/>
      <Route path="/learn-Scraping-with-Python" Component={WebScrappingWithPython}/>
      <Route path="/learn-Security-Fundamentals" Component={WebSecurityFundamentals}/>
      <Route path="/learn-PHP-Programming" Component={PHPProgramming}/>
      <Route path="/learn-Python-Web-Dev" Component={WebDevelopmentWithPython}/>
      <Route path="/learn-MySQL-Fundamentals" Component={MySQLFundamentals}/>

      
    </Routes>
  </>
);

export default App;
