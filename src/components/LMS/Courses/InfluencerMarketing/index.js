import React, { useState } from "react";
import Header from "../../Header";

import {
  CourseContentContainer,
  CourseImage,
  ConceptTitle,
  ConceptDescription,
  DownloadCertificate,
  BtnContainer,
  CountContainer,
  Score,
  QNSCount,
  LinkItem,
  ExamPassed,
  Option,
  StartExam,
  Certificate,
  FailedMessage,
  ExamContainer,
  Question,
  ExamTitle,
  HrLine,
  Arrow
} from "./IMStyledComponents";


const questions = [  {    question: "What is influencer marketing?",    options: [      "A marketing strategy that uses influential people to promote a product or service",      "A marketing strategy that uses celebrities to promote a product or service",      "A marketing strategy that uses radio and TV ads to promote a product or service",      "A marketing strategy that uses social media ads to promote a product or service"    ],
    answer: "A marketing strategy that uses influential people to promote a product or service"
  },
  {
    question: "Who are influencers?",
    options: [
      "People who have a large following on social media and can persuade their followers to take action",
      "People who work for a marketing agency and create ads for a living",
      "People who work for a PR agency and handle crisis management",
      "People who work for a media company and produce content"
    ],
    answer: "People who have a large following on social media and can persuade their followers to take action"
  },
  {
    question: "What is the main benefit of influencer marketing?",
    options: [
      "Increased brand awareness",
      "Increased website traffic",
      "Increased sales",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "What is the difference between macro and micro influencers?",
    options: [
      "Macro influencers have a larger following than micro influencers",
      "Micro influencers have a larger following than macro influencers",
      "Macro influencers are more affordable than micro influencers",
      "Micro influencers are more affordable than macro influencers"
    ],
    answer: "Macro influencers have a larger following than micro influencers"
  },
  {
    question: "What is a common metric used to measure the success of an influencer campaign?",
    options: [
      "Impressions",
      "Engagement rate",
      "Click-through rate",
      "All of the above"
    ],
    answer: "Engagement rate"
  },
  {
    question: "What is the FTC?",
    options: [
      "Federal Trade Commission",
      "Famous Twitter Celebrities",
      "Fashion Trend Consultants",
      "Food Truck Coalition"
    ],
    answer: "Federal Trade Commission"
  },
  {
    question: "What is the role of the FTC in influencer marketing?",
    options: [
      "To ensure that influencers disclose their sponsored posts",
      "To ensure that influencers do not disclose their sponsored posts",
      "To ensure that influencers only promote certain products or services",
      "To ensure that influencers do not work with certain brands"
    ],
    answer: "To ensure that influencers disclose their sponsored posts"
  },
  {
    question: "What is a common type of influencer campaign?",
    options: [
      "Product reviews",
      "TV commercials",
      "Billboards",
      "Radio ads"
    ],
    answer: "Product reviews"
  },
  {
    question: "What is a brand ambassador?",
    options: [
      "An influencer who represents a brand and promotes its products or services",
      "An employee of a company who represents the brand at events",
      "A celebrity who endorses a brand",
      "A journalist who writes about a brand"
    ],
    answer: "An influencer who represents a brand and promotes its products or services"
  },
  {
    question: "What is the difference between an influencer and a brand ambassador?",
    options: [
      "An influencer is not necessarily affiliated with a specific brand, while a brand ambassador is",
      "An influencer has more followers than a brand ambassador",
      "An influencer only promotes products or services on social media, while a brand ambassador can promote products or services in person",
      "There is no difference between an influencer and a brand ambassador"
      ],
      answer: "An influencer is not necessarily affiliated with a specific brand, while a brand ambassador is"
      },
      {
      question: "What is the importance of choosing the right influencer for a campaign?",
      options: [
      "To ensure that the influencer's followers match the target audience",
      "To ensure that the influencer has the most followers possible",
      "To ensure that the influencer is the cheapest option",
      "To ensure that the influencer has a personal relationship with the brand"
      ],
      answer: "To ensure that the influencer's followers match the target audience"
      },
      {
      question: "What is a social media platform commonly used for influencer marketing?",
      options: [
      "Instagram",
      "LinkedIn",
      "Pinterest",
      "TikTok"
      ],
      answer: "Instagram"
      },
      {
      question: "What is a sponsored post?",
      options: [
      "A post on social media that promotes a product or service in exchange for payment",
      "A post on social media that promotes a product or service for free",
      "A post on social media that promotes a product or service and is not required to be disclosed",
      "A post on social media that does not promote a product or service"
      ],
      answer: "A post on social media that promotes a product or service in exchange for payment"
      },
      {
      question: "What is a hashtag commonly used in influencer marketing?",
      options: [
      "#ad",
      "#likeforlike",
      "#throwbackthursday",
      "#selfie"
      ],
      answer: "#ad"
      },
      {
      question: "What is a nano influencer?",
      options: [
      "An influencer with a small following, typically less than 1,000",
      "An influencer with a large following, typically over 1 million",
      "An influencer who only promotes products or services on YouTube",
      "An influencer who specializes in a specific niche"
      ],
      answer: "An influencer with a small following, typically less than 1,000"
      },
      {
      question: "What is a celebrity endorsement?",
      options: [
      "When a celebrity promotes a product or service in exchange for payment",
      "When a celebrity promotes a product or service for free",
      "When a celebrity promotes a product or service and is not required to disclose their affiliation with the brand",
      "When a celebrity promotes a product or service on social media"
      ],
      answer: "When a celebrity promotes a product or service in exchange for payment"
      },
      {
      question: "What is a key difference between influencer marketing and traditional marketing?",
      options: [
      "Influencer marketing focuses on building relationships with individuals, while traditional marketing focuses on mass communication",
      "Influencer marketing is more expensive than traditional marketing",
      "Influencer marketing only uses social media as a platform, while traditional marketing uses a variety of channels",
      "There is no difference between influencer marketing and traditional marketing"
      ],
      answer: "Influencer marketing focuses on building relationships with individuals, while traditional marketing focuses on mass communication"
      },

      {
        question: "What is a benefit of using micro influencers?",
        options: [
        "They have a highly engaged and loyal following",
        "They have a larger following than macro influencers",
        "They have a wider reach than macro influencers",
        "They are typically more affordable than macro influencers"
        ],
        answer: "They have a highly engaged and loyal following"
        },
        {
        question: "What is a key factor to consider when choosing an influencer for a campaign?",
        options: [
        "Their audience demographics",
        "Their personal interests and hobbies",
        "Their geographic location",
        "Their job title"
        ],
        answer: "Their audience demographics"
        },
        {
        question: "What is the difference between a macro influencer and a micro influencer?",
        options: [
        "A macro influencer has a larger following than a micro influencer",
        "A micro influencer has a larger following than a macro influencer",
        "A macro influencer is more affordable than a micro influencer",
        "There is no difference between a macro influencer and a micro influencer"
        ],
        answer: "A macro influencer has a larger following than a micro influencer"
        },
        {
        question: "What is a benefit of using influencer marketing?",
        options: [
        "It can help increase brand awareness and reach a wider audience",
        "It is typically less expensive than traditional marketing",
        "It can generate leads for the brand's sales team",
        "It can build personal relationships with customers"
        ],
        answer: "It can help increase brand awareness and reach a wider audience"
        }
        ];


const InfluencerMarketing = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showCertificate, setShowCertificate] = useState(false);
  const [showDocument, setShowDocument] = useState(true);
  const [showExam, setShowExam] = useState(false);
  const [showFailed, setExamStatus] = useState("");

  const handleStartExam = () => {
    setShowDocument(false);
    setShowExam(true);
  };

  const handleAnswer = (answer) => {
    const isCorrect = answer === questions[currentQuestion].answer;
    if (isCorrect) {
      setScore(score + 5);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      if (score >= 80) {
        setShowCertificate(true);
      } else {
        setExamStatus("You have failed the Exam! Try again after some time");
      }
    }
  };

  return (
    <React.Fragment>
      <Header />
      <CourseContentContainer>
        {showDocument && (
          <>
            <CourseImage
              src="https://gifographics.co/wp-content/uploads/2017/03/Is-Influencer-Marketing-the-Future-of-Marketing.gif"
              alt="RWD"
            />

            <ConceptTitle>Influencer Marketing</ConceptTitle>
            <ConceptDescription>
              <embed
                src="https://grin.co/wp-content/uploads/2020/01/eBook_A-Complete-Influencer-Marketing-Guide.pdf"
                type="application/pdf"
                width="100%"
                height="600px"
              />
            </ConceptDescription>
            <BtnContainer>
              <StartExam onClick={handleStartExam}>Start Exam</StartExam>
            </BtnContainer>
          </>
        )}
        {showExam && (
          <ExamContainer>
            <ExamTitle>Welcome to the Exam!</ExamTitle>
            <>
              <LinkItem to="/lms-available"><Arrow/></LinkItem>
            </>
            <CountContainer>
              <Score> Score : {score}</Score>
              <QNSCount>Question: {currentQuestion + 1}/20</QNSCount>
            </CountContainer>

            <Question>
              {currentQuestion + 1}. {questions[currentQuestion].question}
            </Question>
            <HrLine/>
            {questions[currentQuestion].options.map((option) => (
              <Option key={option} onClick={() => handleAnswer(option)}>
                {option}
              </Option>
            ))}
            {showCertificate && (
              <div>
                <ExamPassed>Congratulations, you passed the exam!</ExamPassed>
                <DownloadCertificate>
                  Download your certificate:
                </DownloadCertificate>
                <a
                  href="https://images.besttemplates.com/3698/Custom-made-Certificate-Design-for-Completion-of-Course.jpg"
                  download
                >
                  <Certificate
                    src="https://images.besttemplates.com/3698/Custom-made-Certificate-Design-for-Completion-of-Course.jpg"
                    alt="Certificate"
                  />
                </a>
              </div>
            )}
            <FailedMessage>{showFailed}</FailedMessage>
            
          </ExamContainer>
        )}
      </CourseContentContainer>
    </React.Fragment>
  );
};

export default InfluencerMarketing;
