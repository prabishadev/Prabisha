import {
  ACContainer,
  ACTitle,
  TabContainer,
  TabItem,
  TabContent,
} from "./ACStyledComponents";
import Header from "../Header";

import CoursesCards from "../CoursesCards";
import Hero from "../HeroSection";
import { useState } from "react";
const TabItems = [
  { id: 1, title: "Web Development" },
  { id: 2, title: "Web Designing" },
  { id: 3, title: "Digital Marketing" },
];

const WebTechnologies = [
  {
    id: "WT001",
    title: "HTML",
    image: "https://wallpapercave.com/wp/wp7421222.jpg",
    description:
      "Hypertext Markup Language is the standard markup language for creating web pages and web applications.",
  },
  {
    id: "WT002",
    title: "CSS",
    image: "https://mona.media/wp-content/uploads/2021/07/css.png",

    description:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in HTML or XML.",
  },
  {
    id: "WT003",
    title: "JavaScript",
    image:
      "https://www.tutorialrepublic.com/lib/images/javascript-illustration.png",
    description:
      "JavaScript is a programming language used to create interactive effects within web browsers.",
  },
  {
    id: "WT004",
    title: "Responsive Web Design",
    image:
      "https://static.vecteezy.com/system/resources/previews/000/304/787/original/vector-responsive-web-design.jpg",
    description:
      "Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.",
  },
  {
    id: "WT005",
    title: "AJAX",
    image: "https://aitta.in/wp-content/uploads/2018/06/ajax.png",
    description:
      "Asynchronous JavaScript and XML is a set of web development techniques using many web technologies . . .",
  },
  {
    id: "WT006",
    title: "Bootstrap",
    image:
      "https://msatechnosoft.in/blog/wp-content/uploads/2018/06/bootstrap-image-MSA-Technosoft-1536x864.jpg",
    description:
      "Bootstrap is a popular front-end development framework that helps developers create responsive and mobile-first websites.",
  },
  {
    id: "WT007",
    title: "Node.js",
    image:
      "https://mobidev.biz/wp-content/uploads/2020/02/node-js-development-company-1-1200x550@2x.png",
    description:
      "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine . . .",
  },
  {
    id: "WT008",
    title: "React",
    image: "https://infolific.com/images/technology/react_js.jpg",
    description:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community . . .",
  },
  {
    id: "WT009",
    title: "RESTful API",
    image:
      "https://www.anynode.de/wp-content/uploads/2020/04/InfoGraphic_REST_API_B.jpg",
    description:
      "A RESTful API is a web service that uses HTTP requests to GET, PUT, POST and DELETE data. It is based on the principles . . .",
  },
];
const WebDesignConcepts = [
  {
    id: "WD001",
    title: "Color Theory",
    image:
      "https://blog.printleaf.com/wp-content/uploads/2017/12/Color-Theory-Featured-Image-790x345.jpg",
    description:
      "Color theory is the study of the relationships between colors, often used in graphic design to create harmonious color palettes . . .",
  },
  {
    id: "WD002",
    title: "Typography",
    image:
      "http://www.fastartup.com/wp-content/uploads/2017/08/Digital-Design-Typography-The-Right-Way-1163x423.png",
    description:
      "Typography is the art and technique of arranging type to make written language legible, readable . . .",
  },
  {
    id: "WD003",
    title: "Layout Design",
    image:
      "https://www.educba.com/academy/wp-content/uploads/2016/01/Website-Design-Layout.jpg",
    description:
      "Layout design is the process of arranging visual elements on a page or screen, such as text, images, and other media . . .",
  },
  {
    id: "WD004",
    title: "User Interface Design",
    image:
      "https://uiuxdesignguide.com/wp-content/uploads/2020/11/6-Principles-of-User-Interface-Design.jpg",
    description:
      "User interface (UI) design is the process of designing the visual layout of an application or website, focusing on the look . . .",
  },
  {
    id: "WD005",
    title: "User Experience Design",
    image:
      "https://www.mobinfo.net/wp-content/uploads/2019/08/user-experience.jpg",
    description:
      "User experience (UX) design is the process of designing products and services with a focus placed on the quality . . .",
  },
  {
    id: "WD006",
    title: "Responsive Design",
    image:
      "https://www.perfecto.io/sites/perfecto/files/styles/social_preview_image/public/image/2019-06/image-blog-responsive-web-design-testing-tips-600x400.jpg?itok=kP1j7B73",
    description:
      "Responsive design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.",
  },
  {
    id: "WD007",
    title: "Wireframing",
    image:
      "https://cdn.sanity.io/images/oneb1r22/production/bc8a2c5fa93120abe148012e3112ac6e7544cb30-1960x1140.jpg",
    description:
      "Wireframing is the process of creating a visual representation of the layout and structure of a website or application . . .",
  },
  {
    id: "WD008",
    title: "Accessibility",
    image:
      "https://www.bostonwebdesigners.net/wp-content/uploads/seo-ACCESSIBILITY-Recovered-3.png",
    description:
      "Accessibility refers to the design of products, devices, services, or environments for people with disabilities . . .",
  },
  {
    id: "WD009",
    title: "Visual Hierarchy",
    image:
      "https://2stallions.com/blog/wp-content/uploads/2019/12/blog-feature-visualhierarchy-1.jpg",
    description:
      "Visual hierarchy refers to the arrangement of visual elements in a way that prioritizes the importance of each element . . .",
  },
];

const digitalMarketingConcepts = [
  {
    id: 1,
    title: "Search Engine Optimization (SEO)",
    image:
      "https://thesocialmediamonthly.com/wp-content/uploads/2020/09/search-engine-optimisation-scaled-1.jpg",
    description:
      "The practice of increasing the quantity and quality of traffic to your website through organic search engine results.",
  },
  {
    id: 2,
    title: "Pay-Per-Click Advertising (PPC)",
    image:
      "https://blog.whitehat-seo.co.uk/hs-fs/hubfs/social-suggested-images/ppc-management.png?width=824&name=ppc-management.png",
    description:
      "A model of internet marketing in which advertisers pay a fee each time one of their ads is clicked.",
  },
  {
    id: 3,
    title: "Content Marketing",
    image:
      "https://contentwriters.com/blog/wp-content/uploads/2019/08/Content-Marketing-Strategy-2020-Basics.jpg",
    description:
      "A strategic marketing approach focused on creating valuable, relevant, and consistent content to attract and retain a clearly defined audience.",
  },
  {
    id: 4,
    title: "Social Media Marketing",
    image:
      "https://experienceadvertising.com/wp-content/uploads/2019/09/shutterstock_684313486.jpg",
    description:
      "The process of creating content and engaging with audiences on social media platforms to promote a product or service.",
  },
  {
    id: 5,
    title: "Email Marketing",
    image: "https://blog.kulturekonnect.com/hubfs/email-marketing.jpg",
    description:
      "The use of email to promote products or services and build relationships with potential and existing customers.",
  },
  {
    id: 6,
    title: "Influencer Marketing",
    image:
      "https://nuundigital.com/wp-content/uploads/2019/11/influencer-marketing-1.jpg",
    description:
      "A form of marketing that focuses on using influential people to drive a brand’s message to the larger market.",
  },
  {
    id: 7,
    title: "Video Marketing",
    image:
      "https://scooparticle.com/wp-content/uploads/2019/11/Video-Marketing.png",
    description:
      "The use of video to promote and market your product or service.",
  },
  {
    id: 8,
    title: "Mobile Marketing",
    image:
      "https://blog.revalsys.com/wp-content/uploads/2016/11/mobile-marketing.jpg",
    description:
      "A multi-channel, digital marketing strategy aimed at reaching a target audience on their smartphones, tablets . . .",
  },
  {
    id: 9,
    title: "Analytics and Reporting",
    image:
      "https://thumbs.dreamstime.com/b/digital-marketing-analytics-data-report-flat-design-concept-displaying-computer-screen-web-research-97837474.jpg",
    description:
      "The collection, analysis, and reporting of website and social media data to understand and optimize performance . . .",
  },
];

const AvailableCourses = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <>
      <Header />
      <Hero />
      <ACContainer>
        <ACTitle>Available Courses</ACTitle>

        <TabContainer>
          {TabItems.map((item) => (
            <TabItem
              key={item.id}
              active={activeTab === item.id}
              onClick={() => handleTabClick(item.id)}
            >
              {item.title}
            </TabItem>
          ))}
        </TabContainer>
        <TabContent>
          {activeTab === 1 &&
            WebTechnologies.map((each) => (
              <CoursesCards eachCourse={each} key={each.id} />
            ))}
          {activeTab === 2 &&
            WebDesignConcepts.map((each) => (
              <CoursesCards eachCourse={each} key={each.id} />
            ))}
          {activeTab === 3 &&
            digitalMarketingConcepts.map((each) => (
              <CoursesCards eachCourse={each} key={each.id} />
            ))}
        </TabContent>
      </ACContainer>
    </>
  );
};

export default AvailableCourses;
