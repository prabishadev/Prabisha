import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./GCPStyledComponents"

const questions = [  {    qnNo: 1,    question: "What is Firebase?",    options: [      "A database",      "A server",      "A cloud-based platform",      "A programming language"    ],
    answer: "A cloud-based platform"
  },
  {
    qnNo: 2,
    question: "Which company owns Firebase?",
    options: [
      "Amazon",
      "Google",
      "Microsoft",
      "Facebook"
    ],
    answer: "Google"
  },
  {
    qnNo: 3,
    question: "What type of database does Firebase use?",
    options: [
      "SQL",
      "NoSQL",
      "MongoDB",
      "Oracle"
    ],
    answer: "NoSQL"
  },
  {
    qnNo: 4,
    question: "What is Firestore?",
    options: [
      "A document database",
      "A relational database",
      "A graph database",
      "A time-series database"
    ],
    answer: "A document database"
  },
  {
    qnNo: 5,
    question: "What is Firebase Cloud Messaging (FCM)?",
    options: [
      "A database management tool",
      "A serverless computing platform",
      "A mobile notification service",
      "A frontend development framework"
    ],
    answer: "A mobile notification service"
  },
  {
    qnNo: 6,
    question: "What is Firebase Realtime Database?",
    options: [
      "A database management tool",
      "A serverless computing platform",
      "A NoSQL database",
      "A frontend development framework"
    ],
    answer: "A NoSQL database"
  },
  {
    qnNo: 7,
    question: "What is Firebase Authentication?",
    options: [
      "A tool for managing user authentication",
      "A tool for managing server authentication",
      "A tool for managing database authentication",
      "A tool for managing API authentication"
    ],
    answer: "A tool for managing user authentication"
  },
  {
    qnNo: 8,
    question: "What is Firebase Hosting?",
    options: [
      "A tool for hosting frontend web applications",
      "A tool for hosting backend web applications",
      "A tool for hosting databases",
      "A tool for hosting APIs"
    ],
    answer: "A tool for hosting frontend web applications"
  },
  {
    qnNo: 9,
    question: "What is Cloud Firestore?",
    options: [
      "A document database",
      "A relational database",
      "A graph database",
      "A time-series database"
    ],
    answer: "A document database"
  },
  {
    qnNo: 10,
    question: "What is Firebase Storage?",
    options: [
      "A tool for storing user data",
      "A tool for storing server data",
      "A tool for storing database data",
      "A tool for storing files and media"
    ],
    answer: "A tool for storing files and media"
  },
  {
    qnNo: 11,
    question: "What is Firebase Test Lab?",
    options: [
      "A tool for automated testing of mobile apps",
      "A tool for manual testing of web apps",
      "A tool for performance testing of databases",
      "A tool for functional testing of APIs"
    ],
    answer: "A tool for automated testing of mobile apps"
  },
  {
    qnNo:12,
    question: "What is Firebase Crashlytics?",
    options: [
    "A tool for testing mobile apps",
    "A tool for reporting crashes in mobile apps",
    "A tool for monitoring server crashes",
    "A tool for monitoring database crashes"
    ],
    answer: "A tool for reporting crashes in mobile apps"
    },
    {
    qnNo: 13,
    question: "What is Firebase Functions?",
    options: [
    "A tool for serverless computing",
    "A tool for frontend web development",
    "A tool for backend web development",
    "A tool for mobile app development"
    ],
    answer: "A tool for serverless computing"
    },
    {
    qnNo: 14,
    question: "What is Firebase Performance Monitoring?",
    options: [
    "A tool for monitoring database performance",
    "A tool for monitoring server performance",
    "A tool for monitoring frontend web performance",
    "A tool for monitoring mobile app performance"
    ],
    answer: "A tool for monitoring mobile app performance"
    },
    {
    qnNo: 15,
    question: "What is Firebase Remote Config?",
    options: [
    "A tool for configuring databases",
    "A tool for configuring servers",
    "A tool for configuring APIs",
    "A tool for configuring mobile apps"
    ],
    answer: "A tool for configuring mobile apps"
    },
    {
    qnNo: 16,
    question: "What is Firebase Dynamic Links?",
    options: [
    "A tool for creating dynamic web links",
    "A tool for creating dynamic mobile links",
    "A tool for creating dynamic server links",
    "A tool for creating dynamic database links"
    ],
    answer: "A tool for creating dynamic mobile links"
    },
    {
    qnNo: 17,
    question: "What is Firebase In-App Messaging?",
    options: [
    "A tool for sending push notifications",
    "A tool for displaying in-app messages",
    "A tool for managing user authentication",
    "A tool for managing server authentication"
    ],
    answer: "A tool for displaying in-app messages"
    },
    {
    qnNo: 18,
    question: "What is Firebase Machine Learning?",
    options: [
    "A tool for building machine learning models",
    "A tool for managing machine learning datasets",
    "A tool for deploying machine learning models",
    "A tool for visualizing machine learning models"
    ],
    answer: "A tool for deploying machine learning models"
    },
    {
    qnNo: 19,
    question: "What is Firebase A/B Testing?",
    options: [
    "A tool for testing server performance",
    "A tool for testing database performance",
    "A tool for testing frontend web performance",
    "A tool for testing user experiences"
    ],
    answer: "A tool for testing user experiences"
    },
    {
    qnNo: 20,
    question: "What is Firebase App Distribution?",
    options: [
    "A tool for distributing mobile apps",
    "A tool for distributing web apps",
    "A tool for distributing server apps",
    "A tool for distributing database apps"
    ],
    answer: "A tool for distributing mobile apps"
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
