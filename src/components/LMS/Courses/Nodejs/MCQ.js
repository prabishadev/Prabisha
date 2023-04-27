import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./NStyledComponents"

let questions = [    {    qnNo:1,
      question: "What is Node.js?",        options: [            "A JavaScript library for building user interfaces",            "A front-end web development framework",            "A server-side JavaScript runtime",            "An object-oriented programming language"        ],
        answer: "A server-side JavaScript runtime"
    },
    {
      qnNo:2,
        question: "Which of the following is NOT a core module in Node.js?",
        options: [
            "fs",
            "http",
            "os",
            "mysql"
        ],
        answer: "mysql"
    },
    {qnNo:3,
        question: "What is the purpose of package.json file in a Node.js project?",
        options: [
            "To list all the installed packages and their dependencies",
            "To define the project's dependencies and scripts",
            "To store the project's configuration settings",
            "To specify the project's runtime environment"
        ],
        answer: "To define the project's dependencies and scripts"
    },
    {
      qnNo:4,
        question: "Which of the following is a valid way to create a new instance of a Node.js HTTP server?",
        options: [
            "http.createServer(requestHandler)",
            "new http.Server(requestHandler)",
            "http.request(options, callback)",
            "http.get(url, options, callback)"
        ],
        answer: "http.createServer(requestHandler)"
    },
    {
      qnNo:5,
        question: "What is the difference between 'require' and 'import' statements in Node.js?",
        options: [
            "'require' is used to import CommonJS modules, while 'import' is used to import ES6 modules",
            "'require' is used to import ES6 modules, while 'import' is used to import CommonJS modules",
            "'require' and 'import' are interchangeable and can be used interchangeably",
            "There is no difference between 'require' and 'import'"
        ],
        answer: "'require' is used to import CommonJS modules, while 'import' is used to import ES6 modules"
    },
    {   qnNo:6,
        question: "Which of the following is a built-in Node.js module for handling file system operations?",
        options: [
            "fs",
            "http",
            "path",
            "os"
        ],
        answer: "fs"
    },
    {   qnNo:7,
        question: "What is the purpose of the 'process' object in Node.js?",
        options: [
            "To provide information about the current Node.js process",
            "To interact with the operating system",
            "To handle errors and exceptions in Node.js",
            "To manage child processes in Node.js"
        ],
        answer: "To provide information about the current Node.js process"
    },
    {   qnNo:8,
        question: "What is the purpose of the 'Buffer' class in Node.js?",
        options: [
            "To represent arrays of binary data",
            "To manipulate text strings",
            "To manage file system operations",
            "To handle HTTP requests and responses"
        ],
        answer: "To represent arrays of binary data"
    },
    {   qnNo:9,
        question: "Which of the following is a valid way to install a Node.js package using the command line?",
        options: [
            "npm install my-package",
            "node install my-package",
            "npm add my-package",
            "node add my-package"
        ],
        answer: "npm install my-package"
    },
    { qnNo:10,
      question: "What is the purpose of the 'module.exports' object in Node.js?",
      options: [
      "To define the public API of a Node.js module",
      "To manage HTTP requests and responses",
      "To represent the current Node.js module",
      "To provide access to the file system"
      ],
      answer: "To define the public API of a Node.js module"
      },
      {
        qnNo:11,
      question: "Which of the following is a valid way to handle errors in Node.js?",
      options: [
      "Using try-catch blocks",
      "Using callbacks",
      "Using promises",
      "All of the above"
      ],
      answer: "All of the above"
      },
      {
        qnNo:12,
      question: "Which of the following is a valid way to run a Node.js script from the command line?",
      options: [
      "node script.js",
      "npm start script.js",
      "node run script.js",
      "npm run-script script.js"
      ],
      answer: "node script.js"
      },
      {
        qnNo:13,
      question: "What is the purpose of the 'EventEmitter' class in Node.js?",
      options: [
      "To provide a way to handle and emit events",
      "To manage file system operations",
      "To interact with the operating system",
      "To handle HTTP requests and responses"
      ],
      answer: "To provide a way to handle and emit events"
      },
      {
        qnNo:14,
      question: "Which of the following is a valid way to handle asynchronous operations in Node.js?",
      options: [
      "Using callbacks",
      "Using promises",
      "Using async/await",
      "All of the above"
      ],
      answer: "All of the above"
      },
      {
        qnNo:15,
      question: "What is the purpose of the 'req' and 'res' objects in a Node.js HTTP server?",
      options: [
      "'req' represents the HTTP request received by the server, while 'res' represents the HTTP response to be sent back to the client",
      "'res' represents the HTTP request received by the server, while 'req' represents the HTTP response to be sent back to the client",
      "'req' and 'res' are interchangeable and can be used interchangeably",
      "There is no difference between 'req' and 'res'"
      ],
      answer: "'req' represents the HTTP request received by the server, while 'res' represents the HTTP response to be sent back to the client"
      },
      {
        qnNo:16,
      question: "What is the purpose of the 'cluster' module in Node.js?",
      options: [
      "To enable a Node.js process to run on multiple CPU cores",
      "To manage HTTP requests and responses",
      "To handle errors and exceptions in Node.js",
      "To provide a way to handle and emit events"
      ],
      answer: "To enable a Node.js process to run on multiple CPU cores"
      },
      {
        qnNo:17,
      question: "Which of the following is a valid way to serve static files using a Node.js HTTP server?",
      options: [
      "Using the 'fs' module to read the file and sending it back as a response",
      "Using the 'http' module to send the file as a response",
      "Using the 'express' module to serve static files",
      "None of the above"
      ],
      answer: "Using the 'fs' module to read the file and sending it back as a response"
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
