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
} from "./UXStyledComponents";

const questions = [  {    question: "What is video marketing?",    options: [      "Creating and sharing videos to promote a product or service",      "Advertising through video games",      "Using videos to communicate with employees",      "Creating a video portfolio to showcase your work"    ],
    answer: "Creating and sharing videos to promote a product or service"
  },
  {
    question: "What type of video is best for increasing brand awareness?",
    options: [
      "Product demo videos",
      "Interviews with industry experts",
      "How-to videos",
      "Explainer videos"
    ],
    answer: "Explainer videos"
  },
  {
    question: "What is the optimal length for a social media video?",
    options: [
      "15 seconds or less",
      "30 seconds",
      "1 minute",
      "2 minutes"
    ],
    answer: "15 seconds or less"
  },
  {
    question: "What is the best platform for hosting and sharing your marketing videos?",
    options: [
      "Facebook",
      "Instagram",
      "YouTube",
      "Twitter"
    ],
    answer: "YouTube"
  },
  {
    question: "What type of video content is most effective for driving sales?",
    options: [
      "Product demo videos",
      "Customer testimonial videos",
      "Brand story videos",
      "Case study videos"
    ],
    answer: "Product demo videos"
  },
  {
    question: "What is a call-to-action (CTA) in video marketing?",
    options: [
      "A message that prompts viewers to take a specific action",
      "A list of features and benefits",
      "A script that outlines the video's plot",
      "A visual representation of your brand's logo"
    ],
    answer: "A message that prompts viewers to take a specific action"
  },
  {
    question: "What is the best way to optimize your videos for search engines?",
    options: [
      "Adding tags and descriptions to your videos",
      "Creating high-quality content",
      "Including keywords in your video titles",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "What is a storyboard in video production?",
    options: [
      "A visual outline of the video's plot",
      "A list of camera angles and shots",
      "A script that outlines the dialogue",
      "A rough cut of the video"
    ],
    answer: "A visual outline of the video's plot"
  },
  {
    question: "What is the purpose of a video marketing campaign?",
    options: [
      "To promote a product or service",
      "To create viral videos",
      "To entertain viewers",
      "To educate viewers"
    ],
    answer: "To promote a product or service"
  },
  {
    question: "What is a video thumbnail?",
    options: [
      "A small image that represents the video",
      "A list of keywords associated with the video",
      "A message that prompts viewers to take action",
      "A visual representation of your brand's logo"
    ],
    answer: "A small image that represents the video"
  },
  {
    question: "What is the best way to measure the success of a video marketing campaign?",
    options: [
      "View count",
      "Engagement rate",
      "Click-through rate",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "What is the best way to grab a viewer's attention in the first few seconds of a video?",
    options: [
    "Using a catchy headline",
    "Including an interesting visual",
    "Starting with a compelling story",
    "All of the above"
    ],
    answer: "All of the above"
    },
    {
    question: "What is the best way to make your videos accessible to a wider audience?",
    options: [
    "Including closed captions",
    "Using clear and concise language",
    "Using high-quality audio",
    "All of the above"
    ],
    answer: "Including closed captions"
    },
    {
    question: "What is a video marketing funnel?",
    options: [
    "A visual representation of your marketing strategy",
    "A list of potential customers",
    "A step-by-step process for converting leads into customers",
    "A script that outlines the video's plot"
    ],
    answer: "A step-by-step process for converting leads into customers"
    },
    {
    question: "What is the role of emotions in video marketing?",
    options: [
    "To create a connection with the audience",
    "To entertain viewers",
    "To educate viewers",
    "To showcase the features and benefits of a product"
    ],
    answer: "To create a connection with the audience"
    },
    {
    question: "What is the best way to distribute your videos on social media?",
    options: [
    "Posting them on your company's page",
    "Sharing them with influencers",
    "Running ads to promote them",
    "All of the above"
    ],
    answer: "All of the above"
    },
    {
    question: "What is the best way to create engaging video content?",
    options: [
    "Telling a story",
    "Using humor",
    "Appealing to emotions",
    "All of the above"
    ],
    answer: "All of the above"
    },
    {
    question: "What is the best way to measure the ROI of a video marketing campaign?",
    options: [
    "Calculating the cost per view",
    "Calculating the cost per engagement",
    "Calculating the cost per conversion",
    "All of the above"
    ],
    answer: "Calculating the cost per conversion"
    },
    {
    question: "What is the difference between a pre-roll ad and a mid-roll ad?",
    options: [
    "Pre-roll ads play before the video, while mid-roll ads play during the video",
    "Pre-roll ads are shorter than mid-roll ads",
    "Pre-roll ads are more expensive than mid-roll ads",
    "There is no difference between pre-roll and mid-roll ads"
    ],
    answer: "Pre-roll ads play before the video, while mid-roll ads play during the video"
    },
    {
    question: "What is the best way to optimize your videos for mobile devices?",
    options: [
    "Using vertical video format",
    "Keeping the video short and sweet",
    "Using large text and graphics",
    "All of the above"
    ],
    answer: "All of the above"
    }
    ];
    
    
    

const VideoMarketing = () => {
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
              src="https://digitalmarketingtrends.in/wp-content/uploads/2018/11/Video-Marketing-gif.gif"
              alt="RWD"
            />

            <ConceptTitle>Video Marketing</ConceptTitle>
            <ConceptDescription>
              <embed
                src="https://directbusinessmarketing.com/wp-content/uploads/2017/09/Video-Marketing-v2.pdf"
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
            
          </ExamContainer>
        )}
      </CourseContentContainer>
    </React.Fragment>
  );
};

export default VideoMarketing;
