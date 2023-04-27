import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./EMMStyledComponents"

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
  
  
const MCQ = () => {
  const [answers, setAnswers] = useState([]);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
    const [showCertificate, setShowCertificate] = useState(false);


  const handleCheckboxChange = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowScore(true);
    const newScore = questions.reduce((acc, question, index) => {
      if (question.answer === question.options[answers[index]]) {
        return acc + 5;
      }
      return acc;
    }, 0);
    setScore(newScore);
    if (newScore >= 75){
      setShowCertificate(true);
    }
  };

  return (
    <>
    
      <h2>Choose Correct Answer</h2>
      <ScoreText>  {showScore?`Your Score is ${score}`:""}</ScoreText>
      
      
      <form onSubmit={handleSubmit}>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex}>
            
            <p>{question.qnNo}. {question.question}</p>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <label>
                  <input
                    type="checkbox"
                    checked={answers[questionIndex] === optionIndex}
                    onChange={() =>
                      handleCheckboxChange(questionIndex, optionIndex)
                    }
                    disabled={showScore}
                  />
                  {option}
                </label>
                {showScore &&
                  question.answer === option && (
                    <span style={{ color: 'green' }}> - Correct Answer</span>
                  )}
                {showScore &&
                  question.answer !== option && (
                    <span style={{ color: 'red' }}> - Wrong Answer</span>
                  )}
              </div>
            ))}
          </div>
        ))}
        {!showScore && <SubmitBtn type="submit" onClick={handleSubmit}>Submit</SubmitBtn>}
      </form>
      
      {showCertificate  && (
              <div>
                <ExamPassed>Congratulations, you passed the exam!</ExamPassed>
                <DownloadCertificate>
                  Download your certificate:
                </DownloadCertificate>
                  <Certificate
                    src="https://images.besttemplates.com/3698/Custom-made-Certificate-Design-for-Completion-of-Course.jpg"
                    alt="Certificate" download
                  />
              </div>
            )}

    </>
  );
};

export default MCQ;
