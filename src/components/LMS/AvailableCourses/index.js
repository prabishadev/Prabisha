import {
  ACContainer,
  ACTitle,
  TabContainer,
  TabItem,
  SearchContainer,
  SearchInput,
  TabContent,
  SearchIcon
} from "./ACStyledComponents";
import Header from "../Header";

import CoursesCards from "../CoursesCards";
import Hero from "../HeroSection";
import { useState } from "react";
const TabItems = [
  { id: "WebDevelopment", title: "Web Development" },
  { id: "webdesign", title: "Web Designing" },
  { id: "marketing", title: "Digital Marketing" },
  {id:"onboarding", title:"Onboarding" },
];

const Courses = [
  {
    id: "WT001",
    title: "HTML",
    image: "https://wallpapercave.com/wp/wp7421222.jpg",
    description:
      "Hypertext Markup Language is the standard markup language for creating web pages...",
      category:'WebDevelopment',
  },
  {
    id: "WT002",
    title: "CSS",
    image: "https://mona.media/wp-content/uploads/2021/07/css.png",

    description:
      "Cascading Style Sheets is a style sheet language used for describing the presentation...",
      category:'WebDevelopment',

  },
  {
    id: "WT003",
    title: "JavaScript",
    image:
      "https://www.tutorialrepublic.com/lib/images/javascript-illustration.png",
    description:
      "JavaScript is a programming language used to create interactive effects within web...",
      category:'WebDevelopment',

  },
  {
    id: "WT004",
    title: "Responsive Web Design",
    image:
      "https://static.vecteezy.com/system/resources/previews/000/304/787/original/vector-responsive-web-design.jpg",
    description:
      "Responsive web design is an approach to web design that makes web pages render...",
      category:'WebDevelopment',

  },
  {
    id: "WT005",
    title: "AJAX",
    image: "https://aitta.in/wp-content/uploads/2018/06/ajax.png",
    description:
      "Asynchronous JavaScript and XML is a set of web development techniques...",
      category:'WebDevelopment',

  },
  {
    id: "WT006",
    title: "Bootstrap",
    image:
      "https://msatechnosoft.in/blog/wp-content/uploads/2018/06/bootstrap-image-MSA-Technosoft-1536x864.jpg",
    description:
      "Bootstrap is a popular front-end development framework that helps developers create...",
      category:'WebDevelopment',

  },
  {
    id: "WT007",
    title: "Node.js",
    image:
      "https://mobidev.biz/wp-content/uploads/2020/02/node-js-development-company-1-1200x550@2x.png",
    description:
      "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment...",
      category:'WebDevelopment',

  },
  {
    id: "WT008",
    title: "React",
    image: "https://infolific.com/images/technology/react_js.jpg",
    description:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook...",
      category:'WebDevelopment',

  },
  {
    id: "WT009",
    title: "RESTful API",
    image:
      "https://www.anynode.de/wp-content/uploads/2020/04/InfoGraphic_REST_API_B.jpg",
    description:
      "A RESTful API is a web service that uses HTTP requests to GET, PUT, POST and DELETE data...",
      category:'WebDevelopment',

  },
    {
      id: "WT010",
      title: 'Web Dev with Python',
      image: 'https://jafricode.com/wp-content/uploads/2022/12/full-stack-web-development-with-python-copy.png',
      description: 'Learn to build dynamic web applications using the Python programming language...',
      category:'WebDevelopment',
    },
    {
      id: "WT011",
      title: 'Scraping with Python',
      image: 'https://scrape-it.cloud/assets/cache_image/assets/blog_img/web-scraping-with-python_1536x640_7dd.webp',
      description: 'Discover how to extract data from websites and automate web-based tasks using Python libraries...',
      category:'WebDevelopment',

    },
    {
      id: "WT012",
      title: 'Security Fundamentals',
      image: 'https://file-uploads.teachablecdn.com/b3fccdb407584ca6a85feaa4ec0853e1/1eb8af61e43f4c0b88d417ec58ee6ac5',
      description: 'Learn the basics of web security, including common vulnerabilities and attacks...',
      category:'WebDevelopment',

    },
    {
      id: "WT013",
      title: "PHP Programming",
      description: "Learn how to build dynamic websites using PHP, a popular server-side scripting language...",
      image: "https://ng.smartthink.co.uk/wp-content/uploads/2017/03/PHP.jpg",
      category:'WebDevelopment',
    },
    {
      id: "WT014",
      title: "Python Web Dev",
      description: "Discover how to create web applications using Python and popular frameworks...",
      image: "https://www.developeronrent.com/blogs/wp-content/uploads/2019/09/python-for-web-development.jpg",
      category:'WebDevelopment',
    },
    {
      id: "WT015",
      title: "MySQL Fundamentals",
      description: "Learn the basics of MySQL, a popular open-source database management system used...",
      image: "https://i.pinimg.com/originals/33/4f/7a/334f7acddae2b05a1e52eb7ef774a2e9.jpg",
      category:'WebDevelopment',

    },
    {
      id: "WT016",
      title: "MongoDB for Web",
      description: "Explore MongoDB, a popular NoSQL database used in many web applications...",
      image: "https://imgs.search.brave.com/9JDauiYinmWseVT-4FgUa2WqIneeE2VjIgzlKXtFBaA/rs:fit:1024:500:1/g:ce/aHR0cHM6Ly9rcmlm/eS5jby93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8xMC9CZW5l/Zml0cy1vZi1DaG9v/c2luZy1Nb25nb0RC/LURhdGFiYXNlLWZv/ci1Zb3VyLVdlYi1B/cHBsaWNhdGlvbi5w/bmc",
      category:'WebDevelopment',
    },
    {
      id: "WT017",
      title: "GraphQL Fundamentals",
      description: "Discover how to build APIs using GraphQL, a modern alternative to REST APIs...",
      image: "https://graphql.org/img/og-image.png",
      category:'WebDevelopment',

    },
    {
      id: "WT018",
      title: "Amazon Web Services",
      description: "Learn the fundamentals of Amazon Web Services (AWS), a popular cloud computing platform...",
      image: "https://miro.medium.com/v2/resize:fit:552/1*EOoftx5rrvmZ5KhaZACMbA.png",
      category:'WebDevelopment',

    },
    {
      id: "WT019",
      title: "Google Cloud Platform",
      description: "Discover how to use Google Cloud Platform (GCP) to build and deploy web applications in the cloud...",
      image: "https://ayudaleyprotecciondatos.es/wp-content/uploads/2020/10/cloud-computing-google.jpg",
      category:'WebDevelopment',

    },
    {
      id: "WT020",
      title: "Firebase Fundamentals",
      description: "Explore Firebase, a popular mobile and web application development platform that provides...",
      image: "https://cdn-images-1.medium.com/v2/resize:fit:1600/1*7hyRM50LJZP5sgEg3a76Xw.png",
      category:'WebDevelopment',

    },
    {
      id: "WT021",
      title: "Content Management",
      description: "Learn how to use popular content management systems (CMS) such as WordPress, Drupal...",
      image: "https://www.unixmen.com/wp-content/uploads/2015/03/Content-Management-System.jpg",
      category:'WebDevelopment',

    },
    {
      id: "WT022",
      title: "WebRTC Fundamentals",
      description: "Discover how to build real-time communication applications using WebRTC...",
      image: "https://blog.wildix.com/wp-content/uploads/2021/08/WebRTC-a-Critical-Component-of-VoIP-and-UCC-scaled-e1627652078448.jpg",
      category:'WebDevelopment',

      },
      {
        id: "WT023",
        title: "Web Components",
        description: "Explore web components, a set of standards for building reusable UI elements that...",
        image: "https://howtocreateapps.com/wp-content/uploads/2019/05/Web-Components.jpg",
        category:'WebDevelopment',

        },
        {
          id: "WT024",
          title: "WebGL Fundamentals",
          description: "Learn how to use WebGL, a JavaScript API for rendering 2D and 3D graphics in the browser...",
          image: "https://i.extremetech.com/imagery/content-types/03VXEDe26oHapswsfFn14jH/hero-image.jpg",
          category:'WebDevelopment',

          },{
            id: "WT025",
            title: "WebVR Fundamentals",
            description: "Learn how to create virtual reality experiences for the web using WebVR, a set of browser APIs for interacting with VR devices.",
            image: "https://uiux.cc/blog/wp-content/uploads/2017/05/vr-2-1024x573.jpg",
            category:'WebDevelopment',

            },
            {
              id: "WT026",
              title: "Web Authentication",
              description: "Learn about web authentication standards such as OAuth and OpenID Connect...",
              image: "https://webauthn.guide/dist/images/webauthn-meta-image.jpg",
              category:'WebDevelopment',

              },
              {
              id: "WT027",
              title: "Websockets Basics",
              description: "Explore websockets, a protocol for bi-directional, real-time communication...",
              image: "https://www.tutorialspoint.com/websockets/images/web-sockets-mini-logo.jpg",
              category:'WebDevelopment',

              },
    {
      id: "WT029",
      title: 'Web Design Principles',
      image: 'https://www.webalive.com.au/wp-content/uploads/2019/05/Good-website-design.jpg',
      description: 'Explore the fundamental principles of web design, including layout, typography, color...',
      category:'WebDevelopment',

    },
    {
      id: "WT030",
      title: 'Web Animation ',
      image: 'https://www.bluecompass.com/filesimages/News%20and%20Blog/2020/web-animation.gif',
      description: 'Learn the basics of creating animations for the web, including CSS animations...',
      category:'WebDevelopment',

    },
    {
      id: "WT031",
      title: 'Web Typography',
      image: 'https://assets.toptal.io/images?url=https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1140645/retina_500x200_cover-typeface-classification-f1707430870c13c8f86e2b71fa0c7f48.png',
      description: 'Explore the principles of typography as they apply to the web, including font choice, hierarchy...',
      category:"webdesign"


    },
    {
      id: "WT032",
      title: 'Web Design for Mobile',
      image: 'https://digitalinsider.com.au/wp-content/uploads/2022/03/Mobile-first-web-blog-1024x683.png',
      description: 'Discover the principles and techniques for designing web applications and websites...',
      category:"webdesign"
    },
    {
      id: "WT033",
      title: 'Web for E-commerce',
      image : 'https://5.imimg.com/data5/VO/JF/MY-51537875/e-commerce-website-design-1000x1000.png',
      description: 'Learn how to design and build e-commerce websites that are effective, user-friendly...',
      category:"webdesign"
      },
      {
      id: "WT034",
      title: 'Web for Nonprofits',
      image: 'https://cornershopcreative.com/wp-content/uploads/2020/03/website-maintenance-for-nonprofits_Feature.jpg',
      description: 'Explore the unique challenges and opportunities of designing websites and web applications...',
      category:"webdesign"
      },
      {
      id: "WT035",
      title: 'Web for Small Business',
      image: 'https://www.zauca.com/wp-content/uploads/small-business-web-desig.png',
      description: 'Learn how to design and build websites and web applications that meet the needs of...',
      category:"webdesign"
      },
      {
      id: "WT036",
      title: 'Web for Education',
      image: 'https://img.freepik.com/free-vector/education-horizontal-typography-banner-set-with-learning-knowledge-symbols-flat-illustration_1284-29493.jpg',
      description: 'Discover the unique challenges and opportunities of designing websites and web applications...',
      category:"webdesign"

      },
      {
      id: "WT037",
      title: 'Web for Healthcare',
      image: 'https://www.scnsoft.com/blog-pictures/ecommerce/healthcare-website-design/medical-website-design.png',
      description: 'Learn how to design and build websites and web applications that meet the needs...',
      category:"webdesign"

      },
      {
      id: "WT038",
      title: 'Web for Government',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1L7yitJzIYPdYjGdu4Pf33DMsnt5I0qLGxg&usqp=CAU',
      description: 'Explore the unique challenges and opportunities of designing websites and web applications...',
      category:"webdesign"
      },
      {
      id: "WT039",
      title: 'Web Design for the Arts',
      image: 'https://themeforest.img.customer.envatousercontent.com/files/233447893/preview/00.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=b3d76ee6e34ee576c296c64b33238872',
      description: 'Discover the principles and techniques for designing websites and web applications...',
      category:"webdesign"

      },
      {
      id: "WT040",
      title: 'Web Design for Sports',
      image: 'https://media.designrush.com/articles/272495/conversions/Best-Sports-Web-Design-v1-details.jpg',
      description: 'Learn how to design and build websites and web applications that meet the needs of sports...',
      category:"webdesign"
      },
      {
      id: "WT041",
      title: 'Web for Social Media',
      image: 'https://www.aabhishek.com/wp-content/uploads/2020/10/Creative-Website-Social-Banner-Design-Company-in-Vadodara-India.jpg',
      description: 'Explore the unique challenges and opportunities of designing websites and web applications...',
      category:"webdesign"
      },
      {
      id: "WT042",
      title: 'Web for Marketing',
      image: 'https://www.kindpng.com/picc/m/151-1512076_web-design-marketing-animation-hd-png-download.png',
      description: 'Learn how to design and build websites and web applications that are optimized for...',
      category:"webdesign"
      },
      {
      id: "WT043",
      title: 'Web Design for Gaming',
      image: 'https://www.bootstrapdash.com/wp-content/uploads/2020/04/gaming-website-template.jpg',
      description: 'Discover the principles and techniques for designing websites and web applications...',
      category:"webdesign"
      },
      {
      id: "WT044",
      title: 'Web Design for Music',
      image: 'https://imgs.search.brave.com/VOe_uYPxvTYYIwADffT3Hq54HM1JRlWifYOVHjglfuU/rs:fit:1200:714:1/g:ce/aHR0cHM6Ly93d3cu/Ym9vdHN0cmFwZGFz/aC5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjAvMDMvbXVz/aWMtd2Vic2l0ZS10/ZW1wYWx0ZS5qcGc',
      description: 'Learn how to design and build websites and web applications that showcase music...',
      category:"webdesign"
      },
      {
      id: "WT045",
      title: 'Web Design for Travel',
      image: 'https://landisher.com/wp-content/uploads/2016/01/travel-agency-web-design.jpg',
      description: 'Explore the unique challenges and opportunities of designing websites and web applications...',
      category:"webdesign"
      },
      {
      id: "WT046",
      title: 'Web Design for Food',
      image: 'https://cdn.dribbble.com/users/669353/screenshots/11281912/media/0d82f9835f2437cf0aaacfc952cb7547.jpg',
      description: 'Learn how to design and build websites and web applications that showcase food and the culinary...',
      category:"webdesign"
      },
      {
      id: "WT047",
      title: 'Web for Real Estate',
      image: 'https://image.freepik.com/free-vector/real-estate-banner-template_23-2148781688.jpg',
      description: 'Discover the principles and techniques for designing websites and web applications...',
      category:"webdesign"

      },
      {
      id: "WT048",
      title: 'Web for Law Firms',
      image: 'https://www.theedigital.com/wp-content/uploads/2022/09/law-firm-website-design.webp',
      description: 'Learn how to design and build websites and web applications that meet the needs of law...',
      category:"webdesign"

    },
  {
    id: "WD049",
    title: "Color Theory",
    image:
      "https://blog.printleaf.com/wp-content/uploads/2017/12/Color-Theory-Featured-Image-790x345.jpg",
    description:
      "Color theory is the study of the relationships between colors, often used in graphic design...",
      category:"webdesign"
  },
  {
    id: "WD050",
    title: "Typography",
    image:
      "http://www.fastartup.com/wp-content/uploads/2017/08/Digital-Design-Typography-The-Right-Way-1163x423.png",
    description:
      "Typography is the art and technique of arranging type to make written language legible, readable...",
      category:"webdesign"

  },
  {
    id: "WD051",
    title: "Layout Design",
    image:
      "https://www.educba.com/academy/wp-content/uploads/2016/01/Website-Design-Layout.jpg",
    description:
      "Layout design is the process of arranging visual elements on a page or screen...",
      category:"webdesign"
  },
  {
    id: "WD052",
    title: "User Interface Design",
    image:
      "https://uiuxdesignguide.com/wp-content/uploads/2020/11/6-Principles-of-User-Interface-Design.jpg",
    description:
      "User interface (UI) design is the process of designing the visual layout of website...",
      category:"webdesign"

  },
  {
    id: "WD053",
    title: "User Experience Design",
    image:
      "https://www.mobinfo.net/wp-content/uploads/2019/08/user-experience.jpg",
    description:
      "User experience (UX) design is the process of designing products and services...",
      category:"webdesign"

  },
  {
    id: "WD054",
    title: "Responsive Design",
    image:
      "https://www.perfecto.io/sites/perfecto/files/styles/social_preview_image/public/image/2019-06/image-blog-responsive-web-design-testing-tips-600x400.jpg?itok=kP1j7B73",
    description:

      "Responsive design is an approach to web design that makes web pages render well on a variety...",
      category:"webdesign"

  },
  {
    id: "WD055",
    title: "Wireframing",
    image:
      "https://cdn.sanity.io/images/oneb1r22/production/bc8a2c5fa93120abe148012e3112ac6e7544cb30-1960x1140.jpg",
    description:
      "Wireframing is the process of creating a visual representation of the layout and structure...",
      category:"webdesign"

  },
  {
    id: "WD056",
    title: "Accessibility",
    image:
      "https://www.bostonwebdesigners.net/wp-content/uploads/seo-ACCESSIBILITY-Recovered-3.png",
    description:
      "Accessibility refers to the design of products, devices, services, or environments...",
      category:"webdesign"

  },
  {
    id: "WD057",
    title: "Visual Hierarchy",
    image:
      "https://2stallions.com/blog/wp-content/uploads/2019/12/blog-feature-visualhierarchy-1.jpg",
    description:
      "Visual hierarchy refers to the arrangement of visual elements in a way that prioritizes...",
      category:"webdesign"

  },
  {
    id: 'WD058',
    title: "Search Optimization",
    image:
      "https://thesocialmediamonthly.com/wp-content/uploads/2020/09/search-engine-optimisation-scaled-1.jpg",
    description:
      "The practice of increasing the quantity and quality of traffic to your website...",
      category:"marketing"

  },
  {
    id: 'WD059',
    title: "Pay-Per-Click (PPC)",
    image:
      "https://blog.whitehat-seo.co.uk/hs-fs/hubfs/social-suggested-images/ppc-management.png?width=824&name=ppc-management.png",
    description:
      "A model of internet marketing in which advertisers pay a fee each time one of their ads is clicked...",
      category:"marketing"

  },
  {
    id: 'WD060',
    title: "Content Marketing",
    image:
      "https://contentwriters.com/blog/wp-content/uploads/2019/08/Content-Marketing-Strategy-2020-Basics.jpg",
    description:
      "A strategic marketing approach focused on creating valuable, relevant, and consistent...",
      category:"marketing"

  },
  {
    id: 'WD061',
    title: "Social Media Marketing",
    image:
      "https://experienceadvertising.com/wp-content/uploads/2019/09/shutterstock_684313486.jpg",
    description:
      "The process of creating content and engaging with audiences on social media platforms...",
      category:"marketing"

  },
  {
    id: 'WD062',
    title: "Email Marketing",
    image: "https://blog.kulturekonnect.com/hubfs/email-marketing.jpg",
    description:
      "The use of email to promote products or services and build relationships...",
      category:"marketing"

  },
  {
    id: 'WD063',
    title: "Influencer Marketing",
    image:
      "https://nuundigital.com/wp-content/uploads/2019/11/influencer-marketing-1.jpg",
    description:
      "A form of marketing that focuses on using influential people to drive a brand’s message...",
      category:"marketing"

  },
  {
    id: 'WD064',
    title: "Video Marketing",
    image:
      "https://scooparticle.com/wp-content/uploads/2019/11/Video-Marketing.png",
    description:
      "Video marketing is a strategy of promoting products or services using videos...",
      category:"marketing"

  },
  {
    id: 'WD065',
    title: "Mobile Marketing",
    image:
      "https://blog.revalsys.com/wp-content/uploads/2016/11/mobile-marketing.jpg",
    description:
      "A multi-channel, digital marketing strategy aimed at reaching a target audience...",
      category:"marketing"

  },
  {
    id: 'WD066',
    title: "Analytics and Reporting",
    image:
      "https://thumbs.dreamstime.com/b/digital-marketing-analytics-data-report-flat-design-concept-displaying-computer-screen-web-research-97837474.jpg",
    description:
      "The collection, analysis, and reporting of website and social media data to understand...",
      category:"marketing"

  },
  {
    id: 'OB067',
    title: "New Employee Onboarding",
    image:
      "https://res.cloudinary.com/dlovqnrza/image/upload/v1683260487/NewEmp_rh7ge0.jpg",
    description:
      "New employee onboarding is the process of integrating new hires...",
      category:"onboarding"

  },
  {
    id: 'OB067',
    title: "New Joinee Onboarding",
    image:
      "https://res.cloudinary.com/dlovqnrza/image/upload/v1683261476/Employee-Onboarding_ixijsz.png",
    description:
      "Onboarding is the process of integrating a new employee into...",
      category:"onboarding"
  },
  
  
];

const AvailableCourses = () => {
  const [activeTab, setActiveTab] = useState('WebDevelopment');
  const [searchKeyword, setSearchKeyword] = useState('');


  const handleSearchInputChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const filteredCourses = Courses.filter((course) => {
    // check if the course matches the active tab and search keyword
    return  course.category === activeTab && course.title.toLowerCase().includes(searchKeyword.toLowerCase());
  });


  return (
    <>
      <Header />
      <Hero />
      <ACContainer>
    
        <ACTitle>Available Courses</ACTitle>
        <SearchContainer>
      <SearchInput type="text" placeholder="Search" value={searchKeyword} onChange={handleSearchInputChange} />
      <SearchIcon />

    </SearchContainer>

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
          {
            filteredCourses.map((each) => (
              <CoursesCards eachCourse={each} key={each.id} />))
            }
        </TabContent>
      </ACContainer>
    </>
  );
};

export default AvailableCourses;
