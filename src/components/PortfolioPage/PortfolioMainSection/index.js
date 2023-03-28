import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EachImageItem from "../EachImageItem";
import TabItem from "../TabItem";

import {
  PortfolioSection,
  PortfolioHead,
  TabsAndImagesCont,
  TabsUnlist,
  ImagesUnlist,
} from "./PMSStyledComponents";

const tabsList = [
  { tabId: "LOGO", displayText: "LOGO" },
  { tabId: "BUSINESSCARDS", displayText: "BUSINESS CARDS" },
  { tabId: "FLYERS", displayText: "FLYERS" },
  { tabId: "SOCIALMEDIA", displayText: "SOCIAL MEDIA" },
  { tabId: "WEBSITE", displayText: "WEBSITE" },
];

const businessCards = [
  {
    id: uuidv4(),
    category: "BUSINESSCARDS",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/Nispaditha-Jewelry-BC-2A.jpg",
    hoverText: "Business Card",
    link: "https://www.prabisha.co.uk/portfolio/",
  },
  {
    id: uuidv4(),
    category: "BUSINESSCARDS",
    imgUrl: "https://www.prabisha.co.uk/wp-content/uploads/2022/11/1-11.jpg",
    hoverText: "Business Card",
    link: "https://www.prabisha.co.uk/portfolio/",
  },
  {
    id: uuidv4(),
    category: "BUSINESSCARDS",
    imgUrl: "https://www.prabisha.co.uk/wp-content/uploads/2022/11/1-10.jpg",
    hoverText: "Business Card",
    link: "https://www.prabisha.co.uk/portfolio/",
  },
  {
    id: uuidv4(),
    category: "BUSINESSCARDS",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/Pk-UK-BC-Bc.jpg",
    hoverText: "Business Card",
    link: "https://www.prabisha.co.uk/portfolio/",
  },
  {
    id: uuidv4(),
    category: "BUSINESSCARDS",
    imgUrl: "https://www.prabisha.co.uk/wp-content/uploads/2022/11/1-7.jpg",
    hoverText: "Business Card",
    link: "https://www.prabisha.co.uk/portfolio/",
  },
  {
    id: uuidv4(),
    category: "BUSINESSCARDS",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/Pk-UK-BC-Fr.jpg",
    hoverText: "Business Card",
    link: "https://www.prabisha.co.uk/portfolio/",
  },
  {
    id: uuidv4(),
    category: "BUSINESSCARDS",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/PREETI-TIWANA-V-CARD.jpg",
    hoverText: "Business Card",
    link: "https://www.prabisha.co.uk/portfolio/",
  },
  {
    id: uuidv4(),
    category: "BUSINESSCARDS",
    imgUrl: "https://www.prabisha.co.uk/wp-content/uploads/2022/11/1-5.jpg",
    hoverText: "Business Card",
    link: "https://www.prabisha.co.uk/portfolio/",
  },
  {
    id: uuidv4(),
    category: "BUSINESSCARDS",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/The-Fashion-Silk-VC-1.jpg",
    hoverText: "Business Card",
    link: "https://www.prabisha.co.uk/portfolio/",
  },
  {
    id: uuidv4(),
    category: "BUSINESSCARDS",
    imgUrl: "https://www.prabisha.co.uk/wp-content/uploads/2022/11/1-3.jpg",
    hoverText: "Business Card",
    link: "https://www.prabisha.co.uk/portfolio/",
  },
  {
    id: uuidv4(),
    category: "BUSINESSCARDS",
    imgUrl: "https://www.prabisha.co.uk/wp-content/uploads/2022/11/1-2.jpg",
    hoverText: "Business Card",
    link: "https://www.prabisha.co.uk/portfolio/",
  },
  {
    id: uuidv4(),
    category: "BUSINESSCARDS",
    imgUrl: "https://www.prabisha.co.uk/wp-content/uploads/2022/11/1-1.jpg",
    hoverText: "Business Card",
    link: "https://www.prabisha.co.uk/portfolio/",
  },
];

const flyers = [
  {
    id: uuidv4(),
    category: "FLYERS",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/Le-Grand-School-Flyer-01-Bc.jpg",
    hoverText: "Flyer",
    link: "https://www.prabisha.co.uk/portfolio/",
  },
  {
    id: uuidv4(),
    category: "FLYERS",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/2-2-scaled.jpg",
    hoverText: "Flyer",
    link: "https://www.prabisha.co.uk/portfolio/",
  },
  {
    id: uuidv4(),
    category: "FLYERS",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/Le-Grand-School-Flyer-01-Bc.jpg",
    hoverText: "Flyer",
    link: "https://www.prabisha.co.uk/portfolio/",
  },
  {
    id: uuidv4(),
    category: "FLYERS",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/Le-Grand-School-Flyer-01-Fr.jpg",
    hoverText: "Flyer",
    link: "https://www.prabisha.co.uk/portfolio/",
  },
  {
    id: uuidv4(),
    category: "FLYERS",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/Wedding-Photoshoot-Fashion-Flyer.jpg",
    hoverText: "Flyer",
    link: "https://www.prabisha.co.uk/portfolio/",
  },
  {
    id: uuidv4(),
    category: "FLYERS",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/2-4-scaled.jpg",
    hoverText: "Flyer",
    link: "https://www.prabisha.co.uk/portfolio/",
  },
  {
    id: uuidv4(),
    category: "FLYERS",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/2-6-scaled.jpg",
    hoverText: "Flyer",
    link: "https://www.prabisha.co.uk/portfolio/",
  },
  {
    id: uuidv4(),
    category: "FLYERS",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/2-7-scaled.jpg",
    hoverText: "Flyer",
    link: "https://www.prabisha.co.uk/portfolio/",
  },
];

const logos = [
  {
    id: uuidv4(),
    category: "LOGO",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/10/HERBSHINE-Logo.png",
    hoverText: "Logo",
    link: "https://www.prabisha.co.uk/portfolio/",
  },
  {
    id: uuidv4(),
    category: "LOGO",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/10/Zydillac-Dermaceuticals-Logo.png",
    hoverText: "Logo",
    link: "https://www.prabisha.co.uk/portfolio/",
  },
  {
    id: uuidv4(),
    category: "LOGO",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/10/AMW-New-Logo.png",
    hoverText: "Logo",
    link: "https://www.prabisha.co.uk/portfolio/",
  },
  {
    id: uuidv4(),
    category: "LOGO",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/Posh-Prop-Logo.jpg",
    hoverText: "Logo",
    link: "https://www.prabisha.co.uk/portfolio/",
  },
  {
    id: uuidv4(),
    category: "LOGO",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/10/Bhagwanti-Traducer-Pvt.-Ltd..jpg",
    hoverText: "Logo",
    link: "https://www.prabisha.co.uk/portfolio/",
  },
  {
    id: uuidv4(),
    category: "LOGO",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/10/The-Kusni-Logo-Final.png",
    hoverText: "Logo",
    link: "https://www.prabisha.co.uk/portfolio/",
  },
  {
    id: uuidv4(),
    category: "LOGO",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/10/Greentech-India-MH-Logo-PNG.png",
    hoverText: "Logo",
    link: "https://www.prabisha.co.uk/portfolio/",
  },
  {
    id: uuidv4(),
    category: "LOGO",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/10/OakHill-Organics.png",
    hoverText: "Logo",
    link: "https://www.prabisha.co.uk/portfolio/",
  },
];

const websites = [
  {
    id: uuidv4(),
    category: "WEBSITE",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/shubhfinal-uk.jpg",
    hoverText: "Shubhaarambh",
    link: "https://www.shubhaarambh.co.uk/",
  },
  {
    id: uuidv4(),
    category: "WEBSITE",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/iba-final.jpg",
    hoverText: "ibadvisors",
    link: "https://www.ibadvisors.us/",
  },
  {
    id: uuidv4(),
    category: "WEBSITE",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/maahir-final-uk.jpg",
    hoverText: "Maahir Jain",
    link: "https://www.maahirjain.com/",
  },
  {
    id: uuidv4(),
    category: "WEBSITE",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/hashtag-final.jpg",
    hoverText: "Hashtagfashion",
    link: "https://www.hashtagfashion.co/",
  },
  {
    id: uuidv4(),
    category: "WEBSITE",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/gogopala-go-final-okay.jpg",
    hoverText: "Gogopalgo",
    link: "https://www.gogopalgo.com/",
  },
  {
    id: uuidv4(),
    category: "WEBSITE",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/Aadil-anand-fianl-uk.jpg",
    hoverText: "Aadil Anand",
    link: "https://www.aadilanand.com/",
  },
  {
    id: uuidv4(),
    category: "WEBSITE",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/Mehek-Vora-final-uk.jpg",
    hoverText: "Mehek Vore",
    link: "https://www.mehekvora.com/",
  },
  {
    id: uuidv4(),
    category: "WEBSITE",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/Arogya-fianl.jpg",
    hoverText: "Arogyanilayam",
    link: "https://www.arogyanilayam.org/",
  },
  {
    id: uuidv4(),
    category: "WEBSITE",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/le-final-uk.jpg",
    hoverText: "Arogyanilayam",
    link: "http://www.lgisdehradun.com/",
  },
];

const socialMedia = [
  {
    id: uuidv4(),
    category: "SOCIALMEDIA",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/Shubh-Aarambh-Post-3.jpg",
    hoverText: "Shubhaarambh",
    link: "https://www.instagram.com/shubhaarambh.uk/?hl=en",
  },
  {
    id: uuidv4(),
    category: "SOCIALMEDIA",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/Shubh-Aarambh-Post-3A.jpg",
    hoverText: "Shubhaarambh",
    link: "https://www.instagram.com/shubhaarambh.uk/?hl=en",
  },
  {
    id: uuidv4(),
    category: "SOCIALMEDIA",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/Shubh-Aarambh-Post-11.jpg",
    hoverText: "Shubhaarambh",
    link: "https://www.instagram.com/shubhaarambh.uk/?hl=en",
  },
  {
    id: uuidv4(),
    category: "SOCIALMEDIA",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/Shubh-Aarambh-Post-13.jpg",
    hoverText: "Shubhaarambh",
    link: "https://www.instagram.com/shubhaarambh.uk/?hl=en",
  },
  {
    id: uuidv4(),
    category: "SOCIALMEDIA",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/Manea-Post-1.jpg",
    hoverText: "Manea",
    link: "https://www.prabisha.co.uk/portfolio/#",
  },
  {
    id: uuidv4(),
    category: "SOCIALMEDIA",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/Manea-Post-4.jpg",
    hoverText: "Manea",
    link: "https://www.prabisha.co.uk/portfolio/#",
  },
  {
    id: uuidv4(),
    category: "SOCIALMEDIA",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/Manea-Post-5.jpg",
    hoverText: "Manea",
    link: "https://www.prabisha.co.uk/portfolio/#",
  },
  {
    id: uuidv4(),
    category: "SOCIALMEDIA",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/Manea-Post-6.jpg",
    hoverText: "Manea",
    link: "https://www.prabisha.co.uk/portfolio/#",
  },
  {
    id: uuidv4(),
    category: "SOCIALMEDIA",
    imgUrl: "https://www.prabisha.co.uk/wp-content/uploads/2022/11/00.jpg",
    hoverText: "Smart Roof",
    link: "https://www.instagram.com/smartroofshade/?hl=en",
  },
  {
    id: uuidv4(),
    category: "SOCIALMEDIA",
    imgUrl: "https://www.prabisha.co.uk/wp-content/uploads/2022/11/01.jpg",
    hoverText: "Smart Roof",
    link: "https://www.instagram.com/smartroofshade/?hl=en",
  },
  {
    id: uuidv4(),
    category: "SOCIALMEDIA",
    imgUrl: "https://www.prabisha.co.uk/wp-content/uploads/2022/11/02.jpg",
    hoverText: "Smart Roof",
    link: "https://www.instagram.com/smartroofshade/?hl=en",
  },
  {
    id: uuidv4(),
    category: "SOCIALMEDIA",
    imgUrl: "https://www.prabisha.co.uk/wp-content/uploads/2022/11/03.jpg",
    hoverText: "Smart Roof",
    link: "https://www.instagram.com/smartroofshade/?hl=en",
  },
  {
    id: uuidv4(),
    category: "SOCIALMEDIA",
    imgUrl: "https://www.prabisha.co.uk/wp-content/uploads/2022/11/Post-42.jpg",
    hoverText: "Essential Shades",
    link: "https://www.instagram.com/essentialshadesllc/?hl=en",
  },
  {
    id: uuidv4(),
    category: "SOCIALMEDIA",
    imgUrl: "https://www.prabisha.co.uk/wp-content/uploads/2022/11/Post-43.jpg",
    hoverText: "Essential Shades",
    link: "https://www.instagram.com/essentialshadesllc/?hl=en",
  },
  {
    id: uuidv4(),
    category: "SOCIALMEDIA",
    imgUrl: "https://www.prabisha.co.uk/wp-content/uploads/2022/11/Post-45.jpg",
    hoverText: "Essential Shades",
    link: "https://www.instagram.com/essentialshadesllc/?hl=en",
  },
  {
    id: uuidv4(),
    category: "SOCIALMEDIA",
    imgUrl: "https://www.prabisha.co.uk/wp-content/uploads/2022/11/Post-46.jpg",
    hoverText: "Essential Shades",
    link: "https://www.instagram.com/essentialshadesllc/?hl=en",
  },
  {
    id: uuidv4(),
    category: "SOCIALMEDIA",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/Skinlogix-Post-1-A-1.jpg",
    hoverText: "Skinologix",
    link: "https://skinlogixlondon.com/",
  },
  {
    id: uuidv4(),
    category: "SOCIALMEDIA",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/Skinlogix-Post-2-1.jpg",
    hoverText: "Skinologix",
    link: "https://skinlogixlondon.com/",
  },
  {
    id: uuidv4(),
    category: "SOCIALMEDIA",
    imgUrl:
      "https://www.prabisha.co.uk/wp-content/uploads/2022/11/Skinlogix-Post-1-1.jpg",
    hoverText: "Skinologix",
    link: "https://skinlogixlondon.com/",
  },
];

const allImages = [
  ...businessCards,
  ...flyers,
  ...logos,
  ...websites,
  ...socialMedia,
];

const PortfolioMainSection = () => {
  const [array, setArray] = useState(allImages);

  const clickTabItem = (tabValue) => {
    setArray(allImages.filter((each) => each.category === tabValue));
  };

  return (
    // const array = getFilteredProjects()
    <PortfolioSection>
      <TabsAndImagesCont>
      <PortfolioHead>PORTFOLIO</PortfolioHead>
        <TabsUnlist>
          {tabsList.map((tabDetails) => (
            <TabItem
              key={tabDetails.tabId}
              tabDetails={tabDetails}
              clickTabItem={clickTabItem}
            />
          ))}
        </TabsUnlist>
        <ImagesUnlist>
          {array.map((EachImage) => (
            <EachImageItem key={EachImage.id} EachImage={EachImage} />
          ))}
        </ImagesUnlist>
      </TabsAndImagesCont>
    </PortfolioSection>
  );
};

export default PortfolioMainSection;
