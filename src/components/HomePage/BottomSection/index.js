import Slider from "react-slick";
import {v4} from "uuid"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillStar, AiOutlineInstagram } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

import {
  OurClientsHead,
  SliderClients,
  SliderTrackClients,
  SlideClients,
  Image,
  CustomerName,
  TestimonialsCont,
  CustomerTestimonialsHeading,
  ReviewsContainer,
  CustRating,
  CustReview,
  CustInsideCont,
  GoogleReviewsCont,
  GoogleReviewsInsideCont,
  GoogleLogo,
  GoogleLogoStarsCont,
  GoogleReviewsHead,
  SwiperCont,
  EachSwiperSlide,
  ImageNameLogoCont,
  GoogleReviewerName,
  NameDateCont,
  GoogleReviewDate,
  UserReview,
  FeedsCont,
  InstagramFeedsHead,
  FollowBtn,
  LetsDiscussPara,
  LetsDiscussParaSpan,
  QuestionHead,
  Unlist,
  ListItem,
  EveryBusinessHead,
  LetsDiscussParaTwo,
} from "./BottomSectionStyledComponents";

const customerReviews = [
  {
    id: 1,
    rating: 5,
    name: "Traveller Kannadiga",
    review:
      "I am working here as a Socail Media Marketer, really it's a good team of Digital IT and design experts. I also learning from them Our Clients are also very nice to work with Totally this organization provides good working environment and good services in Digital IT and many more fields",
  },
  {
    id: 2,
    rating: 5,
    name: "Shwetha Raju",
    review:
      "Working with Bidisha for our logo was great She is unbelievably patient and understood exactly what we wanted. She gave us so many beautiful design options. Thank you Bidisha for patiently listening to our inputs and accomodating each one of them We absolutely love the logo card and the sticker design!",
  },
  {
    id: 3,
    rating: 5,
    name: "Sabita bhatia",
    review:
      "For digital posts about the activities of our NGO we got great help from Prabisha Consulting The post were well created as per our briefs and always as per schedule agreed upon The reach and page visits increased largely once we got connected with Prabisha Consulting We are glad that we connected with Pratyush and team who are extremely diligent and patient",
  },
];
const googleReviews = [
  {
   id:v4(),
    image:
      "https://lh3.googleusercontent.com/a/ALm5wu3OvhaElYvSjuWaEbr-oghCtawAKPOT3yXCbqWe=s120-c-c-rp-w64-h64-mo-br100",
    name: "Preeti Tiwana",
    date: "2022-09-15",
    review:
      "Very happy With the service . Great quality work and very timely delivered.",
  },
  {
    id:v4(),
    image:
      "https://lh3.googleusercontent.com/a-/ACNPEu-VF_TyfB1flg6SNvechW1947-Pkn7IaE_eF_7iMw=s120-c-c-rp-w64-h64-mo-ba2-br100",
    name: "Pratyush Kumar",
    date: "2022-08-14",
    review: "Excellent work and great customer service 👍",
  },
  {
    id:v4(),
    image:
      "https://lh3.googleusercontent.com/a-/ACNPEu83PMMaoJ5V_ZAqoPeaotr5sRaaGfM99qaaV2x-=s120-c-c-rp-w64-h64-mo-br100",
    name: "Eco Clean...",
    date: "2022-08-09",
    review: "Excellent service",
  },
  {
    id:v4(),
    image:
      "https://lh3.googleusercontent.com/a-/ACNPEu_yqrK4Y2HLBCiIuy9PMShknmLVs-oFurHK9ONR=s120-c-c-rp-w64-h64-mo-ba2-br100",
    name: "Pramita Bhat...",
    date: "2022-06-14",
    review: "",
  },
  {
    id:v4(),
    image:
      "https://lh3.googleusercontent.com/a/ALm5wu1cG3E_vRDHJCk0062YSjv9-F-AxQUFSGBMzoHr=s120-c-c-rp-w64-h64-mo-br100",
    name: "Deepak garg",
    date: "2022-04-06",
    review: "",
  },
  {
    id:v4(),
    image:
      "https://lh3.googleusercontent.com/a-/ACNPEu-vYS8__EyYAoxxUMJy5Oo6U-HdE4oGUNgxLHLfew=s120-c-c-rp-w64-h64-mo-br100",
    name: "Archana chandel",
    date: "2022-11-07",
    review:
      "Thank you Prabisha consulting for such an amazing work. Your timely and prompt response has helped me a lot. Thank you for getting the editing work done within the limited time frame.I would definitely recommend Prabisha Consulting.",
  },
  {
    id:v4(),
    image:
      "https://lh3.googleusercontent.com/a/ALm5wu3zlRWi0TRdATTdSLHFixOZpE4DzBQFYYkzRSv5=s120-c-c-rp-w64-h64-mo-br100",
    name: "sabita bhatia",
    date: "2021-11-09",
    review:
      "For digital posts about the activities of our NGO we got great help from Prabisha Consulting. The post were well created as per our briefs and always as per schedule agreed upon . The reach and page visits increased largely once we got connected with Prabisha Consulting. We are glad that we connected with Pratyush and team who are extremely diligent and patient.",
  },
  {
    id:v4(),
    image:
      "https://lh3.googleusercontent.com/a-/ACNPEu_prGd3l9k9gMnIxRGAR9wHD35CcRLRR2nAip9nxQ=s120-c-c-rp-w64-h64-mo-br100",
    name: "Imran khan",
    date: "2021-11-01",
    review:
      "Fully satisfied by the final logo, the team was very co-operative. Thank you 🙂",
  },
  {
    id:v4(),
    image:
      "https://lh3.googleusercontent.com/a/ALm5wu0KEzcGgA9qoqEh5d4IZsHZDmeAghl8C5TvTrDY=s120-c-c-rp-w64-h64-mo-br100",
    name: "harish chainani",
    date: "2021-10-02",
    review: "",
  },
  {
    id:v4(),
    image:
      "https://lh3.googleusercontent.com/a/ALm5wu2kDsJeN4cP1YD5nIfZkP_9BaODAEKd_ppObGKN=s120-c-c-rp-w64-h64-mo-br100",
    name: "Shwetha Raju",
    date: "2021-09-30",
    review:
      "Working with Bidisha for our logo was great. She is unbelievably patient and understood exactly what we wanted. She gave us so many beautiful design options. Thank you Bidisha for patiently listening to our inputs and accomodating each one of them. We absolutely love the logo, card and the sticker design!",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const BottomSection = () => (
  <div>
    <OurClientsHead>Our Clients</OurClientsHead>
    <div>
      <SliderClients>
        <SliderTrackClients>
          <SlideClients>
            <Image src="https://prabisha.co.uk/wp-content/uploads/2022/09/1-1.png" />
          </SlideClients>
          <SlideClients>
            <Image src="https://prabisha.co.uk/wp-content/uploads/2022/09/2-2.png" />
          </SlideClients>
          <SlideClients>
            <Image src="https://prabisha.co.uk/wp-content/uploads/2022/09/3-1.png" />
          </SlideClients>
          <SlideClients>
            <Image src="https://prabisha.co.uk/wp-content/uploads/2022/09/4-1.png" />
          </SlideClients>
          <SlideClients>
            <Image src="https://prabisha.co.uk/wp-content/uploads/2022/09/5-2.png" />
          </SlideClients>
          <SlideClients>
            <Image src="https://prabisha.co.uk/wp-content/uploads/2022/09/6.png" />
          </SlideClients>
          <SlideClients>
            <Image src="https://prabisha.co.uk/wp-content/uploads/2022/09/7.png" />
          </SlideClients>
          <SlideClients>
            <Image src="https://prabisha.co.uk/wp-content/uploads/2022/09/8.png" />
          </SlideClients>
          <SlideClients>
            <Image src="https://prabisha.co.uk/wp-content/uploads/2022/09/9.png" />
          </SlideClients>
          <SlideClients>
            <Image src="https://prabisha.co.uk/wp-content/uploads/2022/09/10.png" />
          </SlideClients>
          <SlideClients>
            <Image src="https://prabisha.co.uk/wp-content/uploads/2022/09/1-1.png" />
          </SlideClients>
          <SlideClients>
            <Image src="https://prabisha.co.uk/wp-content/uploads/2022/09/2-2.png" />
          </SlideClients>
          <SlideClients>
            <Image src="https://prabisha.co.uk/wp-content/uploads/2022/09/3-1.png" />
          </SlideClients>
        </SliderTrackClients>
      </SliderClients>
    </div>
    <TestimonialsCont>
      <CustomerTestimonialsHeading>
        Customer Testimonials
      </CustomerTestimonialsHeading>
      <ReviewsContainer>
        <Slider {...settings}>
          {customerReviews.map((item) => (
            <CustInsideCont>
              <CustRating>
                <AiFillStar style={{ color: "gold", fontSize: "1.3rem" }} />
                <AiFillStar style={{ color: "gold", fontSize: "1.3rem" }} />
                <AiFillStar style={{ color: "gold", fontSize: "1.3rem" }} />
                <AiFillStar style={{ color: "gold", fontSize: "1.3rem" }} />
                <AiFillStar style={{ color: "gold", fontSize: "1.3rem" }} />
              </CustRating>
              <CustomerName>{item.name}</CustomerName>
              <CustReview>{item.review}</CustReview>
            </CustInsideCont>
          ))}
        </Slider>
      </ReviewsContainer>
    </TestimonialsCont>
    <GoogleReviewsCont>
      <GoogleReviewsHead>Google Reviews</GoogleReviewsHead>
      <GoogleReviewsInsideCont>
        <GoogleLogoStarsCont>
          <GoogleLogo
            src="https://cdn.trustindex.io/assets/platform/Google/logo.svg"
            alt="Google Logo"
          />
          <div>
            <AiFillStar style={{ color: "gold", fontSize: "1.3rem" }} />
            <AiFillStar style={{ color: "gold", fontSize: "1.3rem" }} />
            <AiFillStar style={{ color: "gold", fontSize: "1.3rem" }} />
            <AiFillStar style={{ color: "gold", fontSize: "1.3rem" }} />
            <AiFillStar style={{ color: "gold", fontSize: "1.3rem" }} />
          </div>
        </GoogleLogoStarsCont>
        <SwiperCont>
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1199: {
                slidesPerView: 3,
              },
            }}
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {googleReviews.map((item) => (
              <SwiperSlide>
                <EachSwiperSlide>
                  <ImageNameLogoCont>
                    <img src={item.image} key={item.id} alt="img" />
                    <NameDateCont>
                      <GoogleReviewerName>{item.name}</GoogleReviewerName>
                      <GoogleReviewDate>{item.date}</GoogleReviewDate>
                    </NameDateCont>
                    <FcGoogle style={{ fontSize: "2rem" }} />
                  </ImageNameLogoCont>
                  <div>
                    <AiFillStar style={{ color: "gold", fontSize: "1.2rem" }} />
                    <AiFillStar style={{ color: "gold", fontSize: "1.2rem" }} />
                    <AiFillStar style={{ color: "gold", fontSize: "1.2rem" }} />
                    <AiFillStar style={{ color: "gold", fontSize: "1.2rem" }} />
                    <AiFillStar style={{ color: "gold", fontSize: "1.2rem" }} />
                  </div>
                  <UserReview>{item.review}</UserReview>
                </EachSwiperSlide>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperCont>
      </GoogleReviewsInsideCont>
    </GoogleReviewsCont>
    <FeedsCont>
      <InstagramFeedsHead>Instagram Feeds</InstagramFeedsHead>
      <a
        href="https://www.instagram.com/prabishauk/"
        target="_blank"
        rel="noreferrer"
      >
        <FollowBtn>
          <AiOutlineInstagram /> Follow on Instagram
        </FollowBtn>
      </a>
      <LetsDiscussPara>
        Let's discuss how we can unlock the revenue growth of your company!{" "}
        <LetsDiscussParaSpan>
          To speak to our EXPERTS Call Now,
        </LetsDiscussParaSpan>
        <a
          href="tel:+447867090363"
          style={{
            color: "#a87e3b",
            fontWeight: "400",
            textDecoration: "none",
          }}
        >
          {" "}
          +44 (0) 78670 90363
        </a>
      </LetsDiscussPara>
      <QuestionHead>
        How Does Prabisha Consulting Help Brands excel?
      </QuestionHead>
      <Unlist>
        <ListItem>
          A unique mix of Advanced Technology and Marketing experts under one
          roof
        </ListItem>
        <ListItem>Time Specific & Result-Driven Professionals</ListItem>
        <ListItem>Client-centric service provider</ListItem>
        <ListItem>Credible & Influential Strategies</ListItem>
        <ListItem>Profitable & user-friendly digital solutions</ListItem>
      </Unlist>
      <EveryBusinessHead>
        Every business has a story to tell. Prabisha Consulting makes it
        engaging.
      </EveryBusinessHead>
      <LetsDiscussParaTwo>
        Lets discuss how we can unlock the revenue growth of your company! Talk
        to our world-class expert at: +44 7867090363
      </LetsDiscussParaTwo>
    </FeedsCont>
  </div>
);
export default BottomSection;
