import { BlogsContainer } from "./BlogsStyledComponents";
import BlogItem from "../BlogItem";
import MainHeader from "../../MainHeader";

const BlogDetails = [
  {
    id: 21,
    imageUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/09/PC-Logo-NEW-for-Website-Page-PNG-1-300x140.png",
    title:
      "Partner with Us for Customised and Impactful Brochure Designing Services",
    keyvalue: "Brochure Design",
    description:
      "Are you looking for ways to promote your business and reach more potential customers? A well-designed brochure can be a powerful tool in your marketing arsenal. But creating a brochure that truly captures the essence of your brand and communicates your message effectively is no easy task. That’s where Prabisha Consulting comes in. Our team …",
  },
  {
    id: 0,
    imageUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2023/03/WHAT-IS-WEB-DESIGN-1-1536x900.jpg",
    title: "Web Design Mistakes to Avoid in 2023",
    keyvalue: "Website Design",
    description:
      "As we enter the year 2023, it is crucial to recognize the importance of good web design for businesses and individuals alike. A well-designed website not only helps to establish credibility and trust with potential customers, but it also enhances the user experience and ultimately leads to higher conversion rates. However, there are several common...",
  },
  {
    id: 1,
    imageUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2023/03/which-web-design-platform-is-right-for-you-5e4d59fb941b9-1536x806.png",
    title: "The Impact of Colour Psychology in Web Design",
    keyvalue: "Website Design",
    description:
      "In today's digital age, websites are the face of businesses. It is essential to have a website that not only looks aesthetically pleasing but also attracts potential customers. Colour psychology is a crucial factor that can impact the user's experience on a website. In this article, we will explore the importance of colour psychology in...",
  },
  {
    id: 2,
    imageUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-03-at-5.22.08-PM.jpeg",
    title: "Build Your Dream Website with the Top 8 CMS Tools in the Market",
    keyvalue: "Website Design",
    description:
      "Website development has come a long way in recent years and there are now many CMS (Content Management System) tools available to help make the process much easier and efficient. A CMS is a software application that provides website owners with the ability to manage and publish digital content. It is used to create and …",
  },
  {
    id: 3,
    imageUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-03-at-6.12.45-PM.jpeg",
    title: "The Essential Guide to CMS Security for Website Owners",
    keyvalue: "Tips & Tricks, Website Design",
    description:
      "As a website owner, you’re responsible for making sure that your site is secure and protected from potential cyber threats. With a CMS (Content Management System) platform, you have the tools you need to create a dynamic and engaging website, but you also need to be aware of the security risks involved. Whether it’s hacking, …",
  },
  {
    id: 4,
    imageUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-30-at-4.24.09-PM.jpeg",
    title: "Website Design Tips for Small Businesses and Startups",
    keyvalue: "Tips & Tricks, Website Design",
    description:
      "A website is one of the most robust tools that a small business & startup can have. It is a way to reach out to potential customers and let them know what you offer. A well-designed website can be the difference between a successful business and one that struggles to get by.  With the availability …",
  },
  {
    id: 5,
    imageUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-24-at-1.23.57-PM.jpeg",
    title:
      "10 Best Social Media Automation Tools for Managing Your Business Social Accounts",
    keyvalue: "Marketing, Social Media Marketing",
    description:
      "For millions of individuals worldwide, social media sites like Facebook, Twitter, and Instagram have developed into important information sources. It’s crucial to arm yourself with the appropriate tools because scheduling posts and analysing social media insights are now essential components of any content strategy. There are numerous free &amp; paid tools available for social media …",
  },
  {
    id: 6,
    imageUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-14-at-6.42.09-PM.jpeg",
    title: "eCommerce SEO: Effective Guide for Online Store",
    keyvalue: "Marketing, SEO",
    description:
      "With the increase in customers’ digital shopping behavior nowadays every business is coming digital to enhance their revenue, conversions, and product sales through eCommerce marketing. But do they know that only creating an eye-catchy eCommerce website is not efficient to skyrocket sales, your website should appear on SERP to generate sales &amp; drive organic website …",
  },
  {
    id: 7,
    imageUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-27-at-5.09.40-PM.jpeg",
    title: "How Does SEO Help Businesses to Generate Leads?",
    keyvalue: "Marketing, SEO",
    description:
      "With the advent of the digital era, it is important to understand how to market business with new technology. Digital marketing has become an essential part of business in this era of technology and nurturing marketing techniques while adding powerful growth elements becomes vital for business owners. With an effective SEO & Lead Generation plan, …",
  },
  {
    id: 8,
    imageUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-14-at-1.24.23-PM.jpeg",
    title: "Prabisha Consulting Celebrates Inauguration of Their London Branch",
    keyvalue: "Marketing, Social Media Marketing",
    description:
      "Prabisha Consulting, Delhi-based, one of the fastest growing &amp; technology-driven IT Solutions, Digital Marketing &amp; Business Consulting firms, has opened a new branch in London, UK. Intending to serve more Start-ups, MSMEs, NGOs and Entrepreneurs and provide job opportunities, Prabisha Consulting chose London: the extensive &amp; diverse pool of potential clients and global talent, for …",
  },
];
console.log(BlogDetails);
const Blogs = () => (
  <>
  <MainHeader/>
  <BlogsContainer>
    {BlogDetails.map((eachBlog) => (
      <BlogItem key={eachBlog.index} data={eachBlog} />
    ))}
  </BlogsContainer>
  </>
);

export default Blogs;