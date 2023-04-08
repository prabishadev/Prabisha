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
} from "./EMMStyledComponents";

const questions = [  {    question: "What is the purpose of an email opt-in?",    options: [      "To verify a user's email address",      "To send promotional emails without consent",      "To give users the option to receive emails from a company",      "To ensure that email recipients are over 18 years old"    ],
    answer: "To give users the option to receive emails from a company"
  },
  {
    question: "What is the most effective way to grow your email list?",
    options: [
      "Purchasing an email list",
      "Running a contest or giveaway",
      "Sending unsolicited emails",
      "Posting on social media"
    ],
    answer: "Running a contest or giveaway"
  },
  {
    question: "What is the average email open rate?",
    options: [
      "10%",
      "25%",
      "50%",
      "75%"
    ],
    answer: "25%"
  },
  {
    question: "What is a common reason for emails to end up in spam folders?",
    options: [
      "Using too many exclamation marks",
      "Sending too many emails to the same recipient",
      "Including too many images or attachments",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "What is the purpose of A/B testing in email marketing?",
    options: [
      "To determine the best day of the week to send emails",
      "To compare the effectiveness of two different email campaigns",
      "To test different subject lines for an email",
      "To verify that email addresses are valid"
    ],
    answer: "To compare the effectiveness of two different email campaigns"
  },
  {
    question: "What is the purpose of a call-to-action (CTA) in an email?",
    options: [
      "To provide additional information about a product or service",
      "To encourage the recipient to take a specific action",
      "To greet the recipient and introduce the sender",
      "To apologize for any inconvenience caused"
    ],
    answer: "To encourage the recipient to take a specific action"
  },
  {
    question: "What is the recommended frequency for sending marketing emails?",
    options: [
      "Once a month",
      "Once a week",
      "Twice a week",
      "Every day"
    ],
    answer: "Once a week"
  },
  {
    question: "What is a common metric used to measure email engagement?",
    options: [
      "Conversion rate",
      "Cost per click",
      "Impressions",
      "Click-through rate"
    ],
    answer: "Click-through rate"
  },
  {
    question: "What is the purpose of a welcome email?",
    options: [
      "To introduce a new product or service",
      "To apologize for any inconvenience caused",
      "To welcome a new subscriber and set expectations for future emails",
      "To confirm a user's email address"
    ],
    answer: "To welcome a new subscriber and set expectations for future emails"
  },
  {
    question: "What is the recommended length for an email subject line?",
    options: [
      "10-20 characters",
      "30-40 characters",
      "50-60 characters",
      "70-80 characters"
    ],
    answer: "50-60 characters"
  },
  {
    question: "What is the purpose of email segmentation?",
    options: [
      "To send the same message to all subscribers",
      "To customize email content based on subscriber behavior or demographics",
      "To ensure that emails are delivered to the inbox instead of the spam folder",
      "To track the effectiveness of email campaigns"
      ],
      answer: "To customize email content based on subscriber behavior or demographics"
      },
      {
      question: "What is the recommended font size for emails?",
      options: [
      "8-10px",
      "10-12px",
      "12-14px",
      "14-16px"
      ],
      answer: "14-16px"
      },
      {
      question: "What is the purpose of a re-engagement email?",
      options: [
      "To introduce a new product or service",
      "To apologize for any inconvenience caused",
      "To remind inactive subscribers about the benefits of being on the email list",
      "To confirm a user's email address"
      ],
      answer: "To remind inactive subscribers about the benefits of being on the email list"
      },
      {
      question: "What is a common metric used to measure email deliverability?",
      options: [
      "Conversion rate",
      "Cost per click",
      "Open rate",
      "Bounce rate"
      ],
      answer: "Bounce rate"
      },
      {
      question: "What is the purpose of a plain text version of an email?",
      options: [
      "To ensure that the email is accessible to all recipients, including those with visual impairments",
      "To provide additional information about a product or service",
      "To include images or videos that may not display in the HTML version",
      "To confirm a user's email address"
      ],
      answer: "To ensure that the email is accessible to all recipients, including those with visual impairments"
      },
      {
      question: "What is the recommended image-to-text ratio for emails?",
      options: [
      "50% text, 50% images",
      "60% text, 40% images",
      "70% text, 30% images",
      "80% text, 20% images"
      ],
      answer: "60% text, 40% images"
      },
      {
      question: "What is the purpose of email automation?",
      options: [
      "To send emails manually to each subscriber",
      "To send the same message to all subscribers",
      "To automate the process of sending targeted, personalized emails",
      "To ensure that emails are delivered to the inbox instead of the spam folder"
      ],
      answer: "To automate the process of sending targeted, personalized emails"
      },
      {
      question: "What is a common reason for subscribers to unsubscribe from an email list?",
      options: [
      "Too many emails",
      "Irrelevant content",
      "Poor email design",
      "All of the above"
      ],
      answer: "All of the above"
      },
      {
      question: "What is the purpose of email personalization?",
      options: [
      "To make the email look more visually appealing",
      "To customize email content based on subscriber behavior or demographics",
      "To ensure that emails are delivered to the inbox instead of the spam folder",
      "To track the effectiveness of email campaigns"
      ],
      answer: "To customize email content based on subscriber behavior or demographics"
      },
      {
      question: "What is the recommended time of day to send marketing emails?",
      options: [
      "6-8am",
      "8-10am",
      "12-2pm",
      "2-4pm"
      ],
      answer: "8-10am"
      }
      ];


const EmailMarketing = () => {
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
              src="https://www.quest.net.nz/wp-content/uploads/Is-email-marketing-dead--1029x579.gif"
              alt="RWD"
            />

            <ConceptTitle>Email Marketing</ConceptTitle>
            <ConceptDescription>
              <embed
                src="https://www.bgateway.com/assets/templates/Email_Marketing.pdf"
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

export default EmailMarketing;
