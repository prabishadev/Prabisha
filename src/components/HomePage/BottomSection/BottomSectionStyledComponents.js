import { keyframes } from "styled-components";
import styled from "styled-components";

export const OurClientsHead = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 2.3rem;
  color: #2f1d59;
  margin-top: 100px;
`;

export const SliderClients = styled.div`
  height: 300px;
  margin: auto;
  position: relative;
  width: 90%;
  display: -ms-grid;
  display: grid;
  place-items: center;
  overflow: hidden;
  margin-top: 80px;
`;

export const Scroll = keyframes`
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
    100% {
        -webkit-transform: translateX(calc(-250px * 9));
        transform: translateX(calc(-250px * 9));
    }
`;

export const SliderTrackClients = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: calc(250px * 18);
  -webkit-animation: ${Scroll} 40s linear infinite;
  animation: ${Scroll} 40s linear infinite;
`;

export const SlideClients = styled.div`
  height: 200px;
  width: 250px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 15px;
  -webkit-perspective: 100px;
  perspective: 100px;
`;

export const Image = styled.img`
  width: 100%;
  -webkit-transition: -webkit-transform 1%;
  transition: -webkit-transform 1%;
  transition: transform 1%;
  transition: transform 1%, -webkit-transform 1%;
`;

export const TestimonialsCont = styled.div`
  background-image: linear-gradient(to bottom, #fafbfc, #ffffff);
  padding: 80px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const CustomerTestimonialsHeading = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 2.3rem;
  color: #2f1d59;
`;

export const ReviewsContainer = styled.div`
  border-radius: 20px;
  padding: 10px;
`;

export const CustInsideCont = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CustRating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CustomerName = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 1.5rem;
  color: #5481eb;
`;

export const CustReview = styled.p`
  margin-right: 25px;
  text-align: left;
  font-weight: 400;
  font-style: italic;
  font-size: 1.1rem;
  color: #454647;
  background-color: #f7faff;
  padding: 30px;
`;

export const GoogleReviewsCont = styled.div`
  background-color: #d5d1f678;
  padding: 80px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const GoogleReviewsInsideCont = styled.div`
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const GoogleLogoStarsCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
// display:flex;
//     justify-content:center;
//     align-items:center;

export const GoogleReviewsHead = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 2.3rem;
  color: #2f1d59;
`;

export const GoogleLogo = styled.img`
  height: 50px;
  width: 200px;
  margin: 10px 0px 10px 0px;
`;

export const SwiperCont = styled.div`
  padding: 80px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const EachSwiperSlide = styled.div`
  padding: 7px;
  background-color: #f5f5f7;
  border: 4px solid white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 40px;
  width: 270px;
  cursor: pointer;
  @media (min-width: 769px) and (max-width:1199px){
    width: 95%;
    padding: 10px;
  }
  @media (max-width: 768px) {
    width: 90%;
    padding: 10px;
  }
`;

export const ImageNameLogoCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 10px 0;
`;

export const GoogleReviewerName = styled.h1`
  text-align: left;
  font-weight: 500;
  color: #2f1d59;
  font-size: 1rem;
  @media (min-width: 769px) and (max-width:1199px){
    font-size: 0.9rem;
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const GoogleReviewDate = styled.p`
  text-align: left;
  font-weight: 400;
  color: #454647;
  font-size: 0.8rem;
`;

export const UserReview = styled.p`
  font-size: 1rem;
  color: #2f1d59;
  height: 160px;
  overflow-y: auto;
  @media (min-width: 769px) and (max-width:1199px){
    font-size: 0.8rem;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const NameDateCont = styled.div`
  padding: 0px;
  margin: 0 20px 0 20px;
`;

export const FeedsCont = styled.div`
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const InstagramFeedsHead = styled.h1`
  text-align: center;
  font-weight: 500;
  color: #2f1d59;
  font-size: 2rem;
  margin: 0px 0px 30px 0px;
`;

export const FollowBtn = styled.button`
  color: white;
  background-color: #3e8ad6;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const LetsDiscussPara = styled.p`
  text-align: center;
  color: white;
  background-color: #0b034f;
  padding: 20px;
  width: 90%;
  margin: 100px 0px 100px 0px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
`;

export const LetsDiscussParaSpan = styled.span`
  text-align: center;
  color: #c99b3b;
  font-weight: 400;
`;

export const QuestionHead = styled.h1`
  font-weight: bold;
  color: #2f1d59;
  font-size: 2rem;
  margin: 0px 0px 10px 0px;
`;

export const Unlist = styled.ul`
  align-self: flex-start;
  font-weight: 400;
  color: #454647;
  font-size: 1.1rem;
  margin: 20px 0px 0px 60px;
  @media (max-width: 768px) {
    margin: 0px;
  }
`;

export const ListItem = styled.li`
  margin: 6px 0px 6px 0px;
`;

export const EveryBusinessHead = styled.h1`
  align-self: flex-start;
  font-weight: 700;
  color: #000000;
  font-size: 1.1rem;
  margin: 40px 0px 20px 0px;
`;

export const LetsDiscussParaTwo = styled.p`
  align-self: flex-start;
`;
