import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Hero from "./HeroSection";
import AvailableCourses from "./AvailableCourses";
import CertificatesAchieved from "./CertificatesAchieved";
import ScoreSum from "./Score";
import HTML from "./Courses/HTML";
import CSS from "./Courses/CSS";
import Ajax from "./Courses/Ajax";
import Bootstrap from "./Courses/Bootstrap";
import JavascriptCourse from "./Courses/JavascriptCourse";
import Nodejs from "./Courses/Nodejs";
import ReactCourse from "./Courses/ReactCourse";
import ResponsiveWebDesign from "./Courses/ResponsiveWebDesign";
import RestfulAPI from "./Courses/RestfulAPI";
import ColorTheory from "./Courses/ColorTheory";
import PremiumCourses from "./PremiumCourses";
const LMS = () => (
  <>
    <Header />

    <Hero />
    <Routes>
      <Route path="/lms" Component={AvailableCourses} />
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
    </Routes>
  </>
);

export default LMS;
