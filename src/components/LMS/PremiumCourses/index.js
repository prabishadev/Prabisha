import { ACContainer, ACTitle, TabContent } from "./PCStyledComponents";
import Header from "../Header";

import CoursesCards from "../CoursesCards";

const Premium = [
  {
    id: 1,
    title: "Complete Web Development Course",
    image: "https://www.filepicker.io/api/file/FSIjaoI2QtKWZL65cogd",
    description:
      "Learn all the skills you need to become a professional web developer, from HTML and CSS to JavaScript and beyond.",
  },
  {
    id: 2,
    title: "Advanced Web Design Techniques",
    image:
      "https://i.pinimg.com/originals/ae/bb/9d/aebb9dc2c49466122342931dc72b921c.jpg",
    description:
      "Take your web design skills to the next level with this advanced course, which covers the latest techniques and trends in web design.",
  },
  {
    id: 3,
    title: "Digital Marketing Masterclass",
    image:
      "https://www.stormimc.co.nz/wp-content/uploads/2016/03/Digital-MArketing-Master-Class-2016.jpg",
    description:
      "Learn the ins and outs of digital marketing, including social media, SEO, email marketing, and more.",
  },
  {
    id: 4,
    title: "Responsive Web Design Fundamentals",
    image:
      "https://augsutcodebackoffice.augustinfotech.com/apps/uploads/2016/06/10-Responsive-Web-Design-Principles-directly-from-our-Designer-Hub-Gif.gif",
    description:
      "Discover how to create responsive websites that look great on any device, from smartphones to desktops.",
  },
  {
    id: 5,
    title: "JavaScript for Beginners",
    image:
      "https://miro.medium.com/v2/resize:fit:1200/1*_Xqei5CDKIPJ7VewFuAPjA.png",
    description:
      "Get started with JavaScript, the programming language of the web, and learn how to create interactive websites and web applications.",
  },
  {
    id: 6,
    title: "Advanced JavaScript Techniques",
    image:
      "https://www.codeimmersives.com/wp-content/uploads/2018/06/Advanced-JS-OOP-logos.jpg",
    description:
      "Take your JavaScript skills to the next level with this advanced course, which covers topics like object-oriented programming and functional programming.",
  },
  {
    id: 7,
    title: "Introduction to Web Accessibility",
    image:
      "https://pinsourcing.com/wp-content/uploads/2018/02/Web-Accessibility-Converted.png",
    description:
      "Learn how to create websites that are accessible to everyone, including people with disabilities.",
  },
  {
    id: 8,
    title: "User Experience Design Fundamentals",
    image:
      "https://i.pinimg.com/originals/95/fc/e6/95fce638cd0faa62aa9cdb09857800de.jpg",
    description:
      "Discover the principles of user experience design, and learn how to create websites and apps that are easy to use and navigate.",
  },
  {
    id: 9,
    title: "Advanced CSS Techniques",
    image:
      "https://web-crunch.s3.amazonaws.com/uploads/post/feature_image/83/advanced-css-selectors.png",
    description:
      "Take your CSS skills to the next level with this advanced course, which covers topics like CSS grid and flexbox.",
  },
  {
    id: 10,
    title: "Introduction to Responsive Email Design",
    image:
      "https://richestsoft.com/blog/wp-content/uploads/2016/06/responsive-email-templates.png",
    description:
      "Learn how to create responsive emails that look great on any device, from smartphones to desktops.",
  },
  {
    id: 11,
    title: "WordPress Theme Development",
    image:
      "https://alamstore.com/wp-content/uploads/2020/05/wordpress-theme-development-tutorial-Page-Templates.jpg",
    description:
      "Discover how to create custom WordPress themes from scratch, and learn how to customize existing themes to suit your needs.",
  },
  {
    id: 12,
    title: "Social Media Marketing Strategies",
    image:
      "https://miro.medium.com/v2/resize:fit:4318/1*a8W7jaUv3PeeAyz8gEEruA.jpeg",
    description:
      "Learn how to create effective social media marketing campaigns that drive engagement and conversions.",
  },
  {
    id: 13,
    title: "Introduction to Graphic Design",
    image:
      "https://www.thoughtmedia.com/wp-content/uploads/2016/07/web-graphic-design.jpg",
    description:
      "Discover the basics of graphic design, including color theory, typography, and layout.",
  },
  {
    id: 14,
    title: "Ecommerce Website Development",
    image:
      "https://stintlieftechnologies.com/asset/images/ecom-development.png",
    description:
      "Learn how to create ecommerce websites that are secure, scalable, and easy to use, using platforms like Shopify and WooCommerce.",
  },
  {
    id: 15,
    title: "Introduction to SEO",
    image:
      "https://thesocialmediamonthly.com/wp-content/uploads/2020/09/search-engine-optimisation-scaled-1.jpg",
    description:
      "Discover the basics of search engine optimization, and learn how to improve your website's visibility in search results.",
  },
];

const PremiumCourses = () => (
  <>
    <Header />
    <ACContainer>
      <ACTitle>Premium Courses </ACTitle>
      <TabContent>
        {Premium.map((each) => (
          <CoursesCards eachCourse={each} key={each.id} />
        ))}
      </TabContent>
    </ACContainer>
  </>
);

export default PremiumCourses;
