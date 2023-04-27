import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./AccessStyledComponents"

const questions = [
    {
      question: "What is web accessibility?",
      choices: [
        "The practice of designing and developing websites so that people with disabilities can use them",
        "The process of optimizing a website's performance",
        "The practice of creating a visually appealing website design",
        "The process of improving a website's search engine ranking",
      ],
      answer:
        "The practice of designing and developing websites so that people with disabilities can use them",
    },
    {
      question: "What is the purpose of alt text in images?",
      choices: [
        "To provide a text alternative for users who cannot see the image",
        "To improve the visual design of the website",
        "To increase the website's search engine ranking",
        "To provide additional information about the image",
      ],
      answer: "To provide a text alternative for users who cannot see the image",
    },
    {
      question: "What is the purpose of semantic HTML?",
      choices: [
        "To provide a clear and logical structure for website content",
        "To improve the visual design of the website",
        "To increase the website's search engine ranking",
        "To provide additional functionality for website users",
      ],
      answer: "To provide a clear and logical structure for website content",
    },
    {
      question: "What is the purpose of ARIA attributes?",
      choices: [
        "To provide additional information and context for screen readers and other assistive technologies",
        "To improve the visual design of the website",
        "To increase the website's search engine ranking",
        "To provide additional functionality for website users",
      ],
      answer:
        "To provide additional information and context for screen readers and other assistive technologies",
    },
    {
      question: "What is the purpose of keyboard accessibility?",
      choices: [
        "To allow users to navigate and interact with a website using only the keyboard",
        "To improve the visual design of the website",
        "To increase the website's search engine ranking",
        "To provide additional functionality for website users",
      ],
      answer:
        "To allow users to navigate and interact with a website using only the keyboard",
    },
    {
      question: "What is the purpose of color contrast in web design?",
      choices: [
        "To ensure that text is legible and readable for all users",
        "To improve the visual design of the website",
        "To increase the website's search engine ranking",
        "To provide additional functionality for website users",
      ],
      answer: "To ensure that text is legible and readable for all users",
    },
    {
      question: "What is the purpose of skip navigation links?",
      choices: [
        "To allow users to skip over repeated content and navigate directly to the main content of the website",
        "To improve the visual design of the website",
        "To increase the website's search engine ranking",
        "To provide additional functionality for website users",
      ],
      answer:
        "To allow users to skip over repeated content and navigate directly to the main content of the website",
    },
    {
      question: "What is the purpose of video captioning?",
      choices: [
        "To provide a text alternative for users who cannot hear the audio in the video",
        "To improve the visual design of the website",
        "To increase the website's search engine ranking",
        "To provide additional information about the video",
      ],
      answer:
        "To provide a text alternative for users who cannot hear the audio in the video",
    },
    {
      question: "What is the purpose of descriptive link text?",
      choices: [
        "To provide clear and concise information about where the link will take the user",
        "To improve the visual design of the website",
        "To increase the website's search engine ranking",
        "To provide additional functionality for website users",
      ],
      answer:
        "To provide clear and concise information about where the link will take the user",
    },
    {
      question: "What is the purpose of accessible forms?",
      choices: [
        "To allow all users, including those with disabilities, to input and submit information on a website",
        "To improve the visual design of the website",
        "To increase the website's search engine ranking",
        "To provide additional functionality for website users",
      ],
      answer:
        "To allow all users, including those with disabilities, to input and submit information on a website",
    },
    {
      question: "What is the purpose of heading structure in web design?",
      choices: [
        "To provide a clear and logical hierarchy of content on a website",
        "To improve the visual design of the website",
        "To increase the website's search engine ranking",
        "To provide additional functionality for website users",
      ],
      answer: "To provide a clear and logical hierarchy of content on a website",
    },
    {
      question: "What is the purpose of accessible tables?",
      choices: [
        "To make table data readable and understandable for all users, including those with disabilities",
        "To improve the visual design of the website",
        "To increase the website's search engine ranking",
        "To provide additional functionality for website users",
      ],
      answer:
        "To make table data readable and understandable for all users, including those with disabilities",
    },
    {
      question: "What is the purpose of text resizing options?",
      choices: [
        "To allow users to adjust the size of text to their preference and needs",
        "To improve the visual design of the website",
        "To increase the website's search engine ranking",
        "To provide additional functionality for website users",
      ],
      answer:
        "To allow users to adjust the size of text to their preference and needs",
    },
    {
      question: "What is the purpose of accessible media players?",
      choices: [
        "To provide accessible and easy-to-use media players for all users, including those with disabilities",
        "To improve the visual design of the website",
        "To increase the website's search engine ranking",
        "To provide additional functionality for website users",
      ],
      answer:
        "To provide accessible and easy-to-use media players for all users, including those with disabilities",
    },
    {
      question: "What is the purpose of error messaging in web design?",
      choices: [
        "To provide clear and helpful error messages for all users, including those with disabilities",
        "To improve the visual design of the website",
        "To increase the website's search engine ranking",
        "To provide additional functionality for website users",
      ],
      answer:
        "To provide clear and helpful error messages for all users, including those with disabilities",
    },
    {
      question: "What is the purpose of accessible navigation?",
      choices: [
        "To provide clear and easy-to-use navigation for all users, including those with disabilities",
        "To improve the visual design of the website",
        "To increase the website's search engine ranking",
        "To provide additional functionality for website users",
      ],
      answer:
        "To provide clear and easy-to-use navigation for all users, including those with disabilities",
    },
    {
      question:
        "What is the purpose of text alternatives for audio and video content?",
      choices: [
        "To provide audio and video content in alternative formats for users who are unable to hear or see them",
        "To improve the visual design of the website",
        "To increase the website's search engine ranking",
        "To provide additional functionality for website users",
      ],
      answer:
        "To provide audio and video content in alternative formats for users who are unable to hear or see them",
    },
    {
      question: "What is the purpose of accessible typography?",
      choices: [
        "To ensure that all users can easily read and understand text on a website, regardless of their abilities",
        "To improve the visual design of the website",
        "To increase the website's search engine ranking",
        "To provide additional functionality for website users",
      ],
      answer:
        "To ensure that all users can easily read and understand text on a website, regardless of their abilities",
    },
    {
      question: "What is the purpose of accessible links?",
      choices: [
        "To provide clear and concise information about where the link will take the user",
        "To improve the visual design of the website",
        "To increase the website's search engine ranking",
        "To provide additional functionality for website users",
      ],
      answer:
        "To provide clear and concise information about where the link will take the user",
    },
    {
      question: "What is the purpose of accessible tables?",
      choices: [
        "To make table data readable and understandable for all users, including those with disabilities",
        "To improve the visual design of the website",
        "To increase the website's search engine ranking",
        "To provide additional functionality for website users",
      ],
      answer:
        "To make table data readable and understandable for all users, including those with disabilities",
    },
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
