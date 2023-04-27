import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./WDWPStyledComponents"

const questions = [
  {
    qnNo:1,
    question: "Which Python web framework is the most popular?",
    options: ["Flask", "Django", "Tornado", "Bottle"],
    answer: "Django"
  },
  {
    qnNo:2,
    question: "What is the purpose of WSGI in Python web development?",
    options: [
      "To allow Python code to interact with a web server",
      "To provide a standardized interface between Python web frameworks and servers",
      "To optimize the performance of Python web applications",
      "To allow Python to be used as a scripting language for front-end development"
    ],
    answer: "To provide a standardized interface between Python web frameworks and servers"
  },
  {
    qnNo:3,
    question: "What is the purpose of a virtual environment in Python web development?",
    options: [
      "To run multiple versions of Python on the same machine",
      "To manage dependencies for a Python project",
      "To provide a secure sandbox for testing Python code",
      "To ensure that Python code can be run on any operating system"
    ],
    answer: "To manage dependencies for a Python project"
  },
  {
    qnNo:4,
    question: "Which package manager is commonly used for installing Python packages?",
    options: ["Pip", "Conda", "EasyInstall", "Npm"],
    answer: "Pip"
  },
  {
    qnNo:5,
    question: "What is a template engine in Python web development?",
    options: [
      "A tool for optimizing the performance of web applications",
      "A library for generating HTML and other types of content dynamically",
      "A framework for managing user authentication and authorization",
      "A tool for automating the deployment of Python web applications"
    ],
    answer: "A library for generating HTML and other types of content dynamically"
  },
  {
    qnNo:6,
    question: "What is Flask in Python web development?",
    options: [
      "A web framework for building complex web applications",
      "A lightweight web framework for building simple web applications",
      "A package manager for Python",
      "A tool for optimizing the performance of Python web applications"
    ],
    answer: "A lightweight web framework for building simple web applications"
  },
  {
    qnNo:7,
    question: "What is SQLAlchemy in Python web development?",
    options: [
      "A web framework for building complex web applications",
      "An object-relational mapper for working with databases",
      "A tool for generating HTML and other types of content dynamically",
      "A package manager for Python"
    ],
    answer: "An object-relational mapper for working with databases"
  },
  {
    qnNo:8,
    question: "What is the purpose of a middleware in Python web development?",
    options: [
      "To handle errors that occur during request processing",
      "To allow different components of a web application to communicate with each other",
      "To provide an interface for interacting with a database",
      "To add additional functionality to a web framework's request/response cycle"
    ],
    answer: "To add additional functionality to a web framework's request/response cycle"
  },
  {
    qnNo:9,
    question: "What is the purpose of a decorator in Python web development?",
    options: [
      "To modify the behavior of a function or class",
      "To handle errors that occur during request processing",
      "To generate HTML and other types of content dynamically",
      "To provide an interface for interacting with a database"
    ],
    answer: "To modify the behavior of a function or class"
  },
  {
    qnNo:10,
    question: "What is the purpose of Flask-WTF in Python web development?",
    options: [
      "To provide support for web sockets",
      "To handle form submission and validation",
      "To provide authentication and authorization features",
      "To optimize the performance of Flask applications"
      ],
      answer: "To handle form submission and validation"
      },
      {
        qnNo:11,
      question: "What is the purpose of the Jinja2 template engine in Python web development?",
      options: [
      "To generate HTML and other types of content dynamically",
      "To optimize the performance of web applications",
      "To provide authentication and authorization features",
      "To handle errors that occur during request processing"
      ],
      answer: "To generate HTML and other types of content dynamically"
      },
      {
        qnNo:12,
      question: "What is the purpose of a web server in Python web development?",
      options: [
      "To store and manage web content",
      "To provide an interface for interacting with a database",
      "To handle incoming requests and serve responses",
      "To generate HTML and other types of content dynamically"
      ],
      answer: "To handle incoming requests and serve responses"
      },
      {
        qnNo:13,
      question: "What is the purpose of the requests library in Python web development?",
      options: [
      "To handle incoming requests and serve responses",
      "To generate HTML and other types of content dynamically",
      "To provide an interface for interacting with a database",
      "To send HTTP requests and receive responses from web services"
      ],
      answer: "To send HTTP requests and receive responses from web services"
      },
      {
        qnNo:14,
      question: "What is the purpose of the Flask-RESTful extension in Python web development?",
      options: [
      "To provide an interface for interacting with a database",
      "To handle incoming requests and serve responses",
      "To generate HTML and other types of content dynamically",
      "To simplify the creation of RESTful APIs with Flask"
      ],
      answer: "To simplify the creation of RESTful APIs with Flask"
      },
      {
        qnNo:15,
      question: "What is the purpose of a reverse proxy in Python web development?",
      options: [
      "To serve static files such as images and CSS",
      "To handle incoming requests and serve responses",
      "To optimize the performance of web applications",
      "To provide an additional layer of security and load balancing"
      ],
      answer: "To provide an additional layer of security and load balancing"
      },
      {
        qnNo:16,
      question: "What is the purpose of the gunicorn web server in Python web development?",
      options: [
      "To optimize the performance of Flask applications",
      "To handle incoming requests and serve responses",
      "To serve static files such as images and CSS",
      "To provide an additional layer of security and load balancing"
      ],
      answer: "To handle incoming requests and serve responses"
      },
      {
        qnNo:17,
      question: "What is the purpose of the Flask-SQLAlchemy extension in Python web development?",
      options: [
      "To generate HTML and other types of content dynamically",
      "To provide an interface for interacting with a database",
      "To simplify the creation of RESTful APIs with Flask",
      "To handle incoming requests and serve responses"
      ],
      answer: "To provide an interface for interacting with a database"
      },
      {
        qnNo:18,
      question: "What is the purpose of a web socket in Python web development?",
      options: [
      "To provide an additional layer of security and load balancing",
      "To handle form submission and validation",
      "To allow bidirectional communication between a web browser and a server",
      "To serve static files such as images and CSS"
      ],
      answer: "To allow bidirectional communication between a web browser and a server"
      },{
        qnNo:19,
          question: "What is the purpose of the Django web framework in Python web development?",
          options: [
          "To provide a lightweight and flexible web framework for building web applications",
          "To provide a full-stack web framework with a robust set of features and tools",


          "To provide a minimalist web framework for building microservices",
          "To provide a web framework specifically for building RESTful APIs"
          ],
          answer: "To provide a full-stack web framework with a robust set of features and tools"
          },
          {
            qnNo:20,
          question: "What is the purpose of the Django ORM in Python web development?",
          options: [
          "To generate HTML and other types of content dynamically",
          "To provide an interface for interacting with a database",
          "To simplify the creation of RESTful APIs with Django",
          "To handle incoming requests and serve responses"
          ],
          answer: "To provide an interface for interacting with a database"
          }] 

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
