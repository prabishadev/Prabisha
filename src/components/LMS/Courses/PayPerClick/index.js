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
} from "./PPCStyledComponents";

const questions = [  {    question: "What is Pay Per Click (PPC)?",    options: ["A type of online advertising where advertisers pay each time a user clicks on their ad", "A type of online advertising where advertisers pay a fixed monthly fee", "A type of online advertising where advertisers pay based on the number of impressions their ad receives", "A type of online advertising where advertisers pay based on the number of conversions their ad generates"],
    answer: "A type of online advertising where advertisers pay each time a user clicks on their ad"
  },
  {
    question: "What is the main benefit of using PPC advertising?",
    options: ["Immediate results and targeted traffic", "Long-term brand awareness and credibility", "Low cost and minimal effort", "Passive income and recurring revenue"],
    answer: "Immediate results and targeted traffic"
  },
  {
    question: "What is the difference between organic search results and paid search results?",
    options: ["Organic search results are free and based on relevancy, while paid search results are sponsored and based on bidding", "Organic search results are sponsored and based on bidding, while paid search results are free and based on relevancy", "Organic search results are displayed at the top of the search engine results page, while paid search results are displayed at the bottom", "Organic search results are displayed at the bottom of the search engine results page, while paid search results are displayed at the top"],
    answer: "Organic search results are free and based on relevancy, while paid search results are sponsored and based on bidding"
  },
  {
    question: "What is a keyword in PPC advertising?",
    options: ["A word or phrase that triggers an ad to appear when searched by a user", "A word or phrase that appears in the ad's headline and description", "A word or phrase that is used as the ad's call-to-action", "A word or phrase that is used to identify the target audience for the ad"],
    answer: "A word or phrase that triggers an ad to appear when searched by a user"
  },
  {
    question: "What is the ad rank in PPC advertising?",
    options: ["A value that determines the order in which ads are displayed in search results", "A value that determines the number of clicks an ad receives", "A value that determines the cost per click for an ad", "A value that determines the quality score of an ad"],
    answer: "A value that determines the order in which ads are displayed in search results"
  },
  {
    question: "What is the quality score in PPC advertising?",
    options: ["A value that measures the relevance and usefulness of an ad to the user", "A value that measures the number of impressions an ad receives", "A value that measures the cost per click for an ad", "A value that measures the click-through rate of an ad"],
    answer: "A value that measures the relevance and usefulness of an ad to the user"
  },
  {
    question: "What is the click-through rate (CTR) in PPC advertising?",
    options: ["The percentage of users who click on an ad after viewing it", "The number of times an ad is displayed to a user", "The amount of money an advertiser pays for each click on their ad", "The percentage of users who make a purchase after clicking on an ad"],
    answer: "The percentage of users who click on an ad after viewing it"
  },
  {
    question: "What is a landing page in PPC advertising ?",
    options: ["A web page that users are directed to after clicking on an ad", "A web page that displays a list of products or services", "A web page that contains a contact form", "A web page that contains a blog post"],
    answer: "A web page that users are directed to after clicking on an ad"
    },
    {
    question: "What is conversion tracking in PPC advertising?",
    options: ["A way to measure the effectiveness of an ad by tracking user actions on a website", "A way to track the number of clicks an ad receives", "A way to track the cost per click for an ad", "A way to track the quality score of an ad"],
    answer: "A way to measure the effectiveness of an ad by tracking user actions on a website"
    },
    {
    question: "What is the maximum length of a headline in a Google Ads text ad?",
    options: ["30 characters", "40 characters", "50 characters", "60 characters"],
    answer: "30 characters"
    },
    {
    question: "What is ad scheduling in PPC advertising?",
    options: ["A way to specify the days and times that an ad should be shown", "A way to create multiple versions of an ad", "A way to target specific geographic locations with an ad", "A way to adjust the bidding strategy for an ad"],
    answer: "A way to specify the days and times that an ad should be shown"
    },
    {
    question: "What is the Google Ads Editor?",
    options: ["A desktop application that allows advertisers to manage their Google Ads campaigns offline", "A web-based tool that provides keyword research and analysis", "A platform that allows advertisers to create and manage social media ads", "A tool that measures website traffic and user behavior"],
    answer: "A desktop application that allows advertisers to manage their Google Ads campaigns offline"
    },
    {
    question: "What is a remarketing campaign in PPC advertising?",
    options: ["A way to target users who have previously visited a website with personalized ads", "A way to target users based on their demographic or geographic information", "A way to target users based on their search behavior", "A way to target users who have made a purchase in the past"],
    answer: "A way to target users who have previously visited a website with personalized ads"
    },
    {
    question: "What is the maximum number of characters allowed in a Google Ads display URL?",
    options: ["15 characters", "25 characters", "35 characters", "45 characters"],
    answer: "35 characters"
    },
    {
    question: "What is an ad group in PPC advertising?",
    options: ["A collection of ads that target a specific set of keywords", "A collection of ads that target a specific geographic location", "A collection of ads that target a specific demographic", "A collection of ads that target a specific time of day"],
    answer: "A collection of ads that target a specific set of keywords"
    },
    {
    question: "What is ad rotation in PPC advertising?",
    options: ["A way to optimize the delivery of ads by evenly rotating them for a period of time", "A way to optimize the delivery of ads by showing the ad with the highest quality score more frequently", "A way to optimize the delivery of ads by showing the ad with the lowest cost per click more frequently", "A way to optimize the delivery of ads by showing the ad with the highest click-through rate more frequently"],
    answer: "A way to optimize the delivery of ads by evenly rotating them for a period of time"
    },
    {
    question: "What is the quality score in Google Ads?",
    options: ["A metric that measures the relevance and usefulness of an ad to users", "A metric that measures the number of clicks an ad receives", "A metric that measures the cost per click for an ad", "A metric that measures the position of an ad on a search results page"],
    answer: "A metric that measures the relevance and usefulness of an ad to users"
    },
    {
    question: "What is a landing page experience in Google Ads?",
    options: ["A metric that measures the relevance and usefulness of the landing page to users", "A metric that measures the number of clicks a landing page receives", "A metric that measures the cost per click for a landing page", "A metric that measures the position of a landing page on a search results page"],
    answer: "A metric that measures the relevance and usefulness of the landing page to users"
    },
    {
    question: "What is ad rank in Google Ads?",
    options: ["A metric that determines the position of an ad on a search results page", "A metric that measures the number of clicks an ad receives", "A metric that measures the cost per click for an ad", "A metric that measures the relevance and usefulness of an ad to users"],
    answer: "A metric that determines the position of an ad on a search results page"
    },
    {
    question: "What is a negative keyword in PPC advertising?",
    options: ["A keyword that prevents an ad from showing when a specific term is searched", "A keyword that is added to an ad to increase its relevance", "A keyword that is used to target a specific geographic location", "A keyword that is used to target a specific demographic"],
    answer: "A keyword that prevents an ad from showing when a specific term is searched"
    }
    ]


const PayPerClick = () => {
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
              src="https://www.creationinfoways.com/uploads/nande/original/201804070609290097216001523081369.png"
              alt="RWD"
            />

            <ConceptTitle>Pay Per Click</ConceptTitle>
            <ConceptDescription>
              <embed
                src="https://my.uopeople.edu/pluginfile.php/57436/mod_book/chapter/37369/PayPerClickAdvertising.pdf"
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
            <CountContainer>
              <Score> Score : {score}</Score>
              <QNSCount>Question: {currentQuestion + 1}/20</QNSCount>
            </CountContainer>

            <Question>
              {currentQuestion + 1}. {questions[currentQuestion].question}
            </Question>
            {questions[currentQuestion].choices.map((option) => (
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
            <StartExam>
              <LinkItem to="/lms-available">Back</LinkItem>
            </StartExam>
          </ExamContainer>
        )}
      </CourseContentContainer>
    </React.Fragment>
  );
};

export default PayPerClick;
