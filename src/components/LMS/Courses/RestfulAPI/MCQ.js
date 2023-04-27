import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./RAStyledComponents"

const questions = [
  {
    qnNo:1,
    question: "What does REST stand for?",
    options: ["Representational State Transfer", "Real-time Execution Service Technology", "Resource Encoding and Service Transfer", "Rapid Execution System Toolkit"],
    answer: "Representational State Transfer"
  },
  {
    qnNo:2,
    question: "Which HTTP methods are commonly used in RESTful APIs?",
    options: ["GET, POST", "GET, POST, PUT", "GET, POST, PUT, DELETE", "GET, PUT, DELETE"],
    answer: "GET, POST, PUT, DELETE"
  },
  {
    qnNo:3,
    question: "Which HTTP status code represents a successful request?",
    options: ["200 OK", "404 Not Found", "500 Internal Server Error", "302 Found"],
    answer: "200 OK"
  },
  {
    qnNo:4,
    question: "What is the purpose of a resource URI in a RESTful API?",
    options: ["To identify a resource", "To perform an action", "To authenticate a user", "To store data"],
    answer: "To identify a resource"
  },
  {
    qnNo:5,
    question: "What is the content type of data that is typically returned by a RESTful API?",
    options: ["XML", "JSON", "HTML", "CSV"],
    answer: "JSON"
  },
  {
    qnNo:6,
    question: "What is the purpose of the OPTIONS HTTP method in a RESTful API?",
    options: ["To retrieve information about the available HTTP methods for a resource", "To create a new resource", "To update an existing resource", "To delete a resource"],
    answer: "To retrieve information about the available HTTP methods for a resource"
  },
  {
    qnNo:7,
    question: "What is the purpose of the HEAD HTTP method in a RESTful API?",
    options: ["To retrieve the headers for a resource", "To retrieve the full resource representation", "To create a new resource", "To update an existing resource"],
    answer: "To retrieve the headers for a resource"
  },
  {
    qnNo:8,
    question: "Which HTTP status code is returned when a resource is successfully created?",
    options: ["201 Created", "200 OK", "404 Not Found", "500 Internal Server Error"],
    answer: "201 Created"
  },
  {
    qnNo:9,
    question: "Which HTTP status code is returned when a resource is successfully updated?",
    options: ["200 OK", "201 Created", "204 No Content", "400 Bad Request"],
    answer: "200 OK"
  },
  {
    qnNo:10,
    question: "Which HTTP status code is returned when a resource is successfully deleted?",
    options: ["204 No Content", "200 OK", "404 Not Found", "500 Internal Server Error"],
    answer: "204 No Content"
  },
  {
    qnNo:11,
    question: "Which HTTP status code is returned when a resource is not found?",
    options: ["404 Not Found", "200 OK", "500 Internal Server Error", "401 Unauthorized"],
    answer: "404 Not Found"
  },
  {
    qnNo:12,
    question: "What is the purpose of the PUT HTTP method in a RESTful API?",
    options: ["To update an existing resource", "To create a new resource", "To retrieve a resource", "To delete a resource"],
    answer: "To update an existing resource"
  },
  {
    qnNo:13,
    question: "What is the purpose of the DELETE HTTP method in a RESTful API?",
    options: ["To delete a resource", "To create a new resource", "To update an existing resource", "To retrieve a resource"],
    answer: "To delete a resource"
  },
    {
      qnNo:14,
      question: "What is the purpose of the POST HTTP method in a RESTful API?",
      options: ["To create a new resource", "To update an existing resource", "To retrieve a resource", "To delete a resource"],
      answer: "To create a new resource"
      },
      {
        qnNo:15,
      question: "What is the purpose of HATEOAS in a RESTful API?",
      options: ["To enable clients to discover resources and actions", "To improve security", "To compress data for faster transmission", "To encrypt data for secure transmission"],
      answer: "To enable clients to discover resources and actions"
      },
      {
        qnNo:16,
      question: "What is the purpose of content negotiation in a RESTful API?",
      options: ["To allow clients and servers to agree on a common format for data exchange", "To prevent unauthorized access to resources", "To compress data for faster transmission", "To encrypt data for secure transmission"],
      answer: "To allow clients and servers to agree on a common format for data exchange"
      },
      {
        qnNo:17,
      question: "What is the purpose of the Accept header in a RESTful API request?",
      options: ["To indicate the content type that the client is able to understand", "To indicate the content type of the response that the client expects", "To provide authentication credentials", "To indicate the HTTP method that should be used"],
      answer: "To indicate the content type of the response that the client expects"
      },
      {
        qnNo:18,
      question: "What is the purpose of the Content-Type header in a RESTful API request?",
      options: ["To indicate the content type of the request body", "To indicate the content type of the response body", "To provide authentication credentials", "To indicate the HTTP method that should be used"],
      answer: "To indicate the content type of the request body"
      },
      {
        qnNo:19,
      question: "What is the purpose of the ETag header in a RESTful API response?",
      options: ["To provide a unique identifier for a resource representation", "To indicate the content type of the response body", "To provide authentication credentials", "To indicate the HTTP method that should be used"],
      answer: "To provide a unique identifier for a resource representation"
      },
      {
        qnNo:20,
      question: "What is the purpose of the If-Match header in a RESTful API request?",
      options: ["To specify the ETag of the resource being updated", "To specify the ETag of the resource being requested", "To provide authentication credentials", "To indicate the HTTP method that should be used"],
      answer: "To specify the ETag of the resource being updated"
      },
      {
        qnNo:21,
      question: "What is the purpose of the Last-Modified header in a RESTful API response?",
      options: ["To indicate the last time a resource was modified", "To indicate the content type of the response body", "To provide authentication credentials", "To indicate the HTTP method that should be used"],
      answer: "To indicate the last time a resource was modified"
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
