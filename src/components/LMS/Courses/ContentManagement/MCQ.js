import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./CMSStyledComponents"

const questions = [
  {
    qnNo: 1,
    question: "Which of the following is not a Content Management System?",
    options: ["WordPress", "Drupal", "Adobe Photoshop", "Joomla"],
    answer: "Adobe Photoshop"
  },
  {
    qnNo: 2,
    question: "Which of the following is a server-side Content Management System?",
    options: ["WordPress", "Joomla", "Drupal", "Magento"],
    answer: "Drupal"
  },
  {
    qnNo: 3,
    question: "Which of the following is a cloud-based Content Management System?",
    options: ["WordPress", "Joomla", "Drupal", "Wix"],
    answer: "Wix"
  },
  {
    qnNo: 4,
    question: "What is the purpose of a Content Management System?",
    options: ["To create web pages", "To manage digital content", "To design logos", "To analyze website traffic"],
    answer: "To manage digital content"
  },
  {
    qnNo: 5,
    question: "Which of the following is not a feature of a Content Management System?",
    options: ["User management", "Content publishing", "Search engine optimization", "Graphic design"],
    answer: "Graphic design"
  },
  {
    qnNo: 6,
    question: "Which of the following is an open-source Content Management System?",
    options: ["Squarespace", "Shopify", "Magento", "WordPress"],
    answer: "WordPress"
  },
  {
    qnNo: 7,
    question: "Which of the following is a popular Content Management System for e-commerce websites?",
    options: ["Joomla", "Drupal", "WooCommerce", "Ghost"],
    answer: "WooCommerce"
  },
  {
    qnNo: 8,
    question: "Which of the following is a Content Management System designed for enterprise-level websites?",
    options: ["Magento", "Shopify", "Kentico", "Wix"],
    answer: "Kentico"
  },
  {
    qnNo: 9,
    question: "Which of the following is a Content Management System designed for publishing industry?",
    options: ["WordPress", "Joomla", "Drupal", "Adobe Experience Manager"],
    answer: "Adobe Experience Manager"
  },
  {
    qnNo: 10,
    question: "Which of the following is a Content Management System with a headless architecture?",
    options: ["Drupal", "WordPress", "Contentful", "Squarespace"],
    answer: "Contentful"
  },
  {
    qnNo: 11,
    question: "Which of the following is a Content Management System with a decoupled architecture?",
    options: ["Joomla", "Magento", "Drupal", "Shopify"],
    answer: "Drupal"
  },
  {
    qnNo: 12,
    question: "Which of the following is a Content Management System with a hybrid architecture?",
    options: ["Kentico", "Wix", "Contentful", "WordPress"],
    answer: "Kentico"
  },
  {
    qnNo: 13,
    question: "Which of the following is not a programming language used to build Content Management Systems?",
    options: ["PHP", "JavaScript", "HTML", "CSS"],
    answer: "CSS"
  },
  {
    qnNo: 14,
    question: "Which of the following is a Content Management System with a modular architecture?",
    options:["WordPress", "Joomla", "Drupal", "TYPO3"],
    answer: "TYPO3"
    },
    {
    qnNo: 15,
    question: "Which of the following is a Content Management System that uses a flat-file database instead of a traditional relational database?",
    options: ["Kirby", "Ghost", "Pico", "Hugo"],
    answer: "Kirby"
    },
    {
    qnNo: 16,
    question: "Which of the following is a Content Management System that supports multilingual websites?",
    options: ["WordPress", "Joomla", "Drupal", "All of the above"],
    answer: "All of the above"
    },
    {
    qnNo: 17,
    question: "Which of the following is a Content Management System that allows users to create custom content types?",
    options: ["Drupal", "Joomla", "WordPress", "Wix"],
    answer: "Drupal"
    },
    {
    qnNo: 18,
    question: "Which of the following is a Content Management System that is built on the Ruby on Rails framework?",
    options: ["Refinery CMS", "Concrete5", "Umbraco", "DotNetNuke"],
    answer: "Refinery CMS"
    },
    {
    qnNo: 19,
    question: "Which of the following is a Content Management System that is primarily designed for developers and technical users?",
    options: ["Squarespace", "Contentful", "Wix", "Shopify"],
    answer: "Contentful"
    },
    {
    qnNo: 20,
    question: "Which of the following is a Content Management System that is optimized for creating documentation websites?",
    options: ["MkDocs", "Gatsby", "Strapi", "Statamic"],
    answer: "MkDocs"
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
