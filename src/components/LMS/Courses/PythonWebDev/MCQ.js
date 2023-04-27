import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./PWDStyledComponents"

const questions = [
  {
    qnNo:1,
    question: "What is Python?",
    options: [
      "A database management system",
      "A programming language",
      "A web development framework",
      "A content management system",
    ],
    answer: "A programming language",
  },
  {
    qnNo:2,
    question: "What is a web framework?",
    options: [
      "A software library that provides common web development functionality",
      "A tool for testing web applications",
      "A web-based project management tool",
      "A database management system for web applications",
    ],
    answer:
      "A software library that provides common web development functionality",
  },
  {
    qnNo:3,
    question: "What is Flask?",
    options: [
      "A Python web development framework",
      "A tool for managing databases",
      "A JavaScript library for front-end development",
      "A content management system",
    ],
    answer: "A Python web development framework",
  },
  {
    qnNo:4,
    question: "What is Django?",
    options: [
      "A web development framework for PHP",
      "A JavaScript library for front-end development",
      "A Python web development framework",
      "A content management system",
    ],
    answer: "A Python web development framework",
  },
  {
    qnNo:5,
    question: "What is a view in Django?",
    options: [
      "A Python function that takes a web request and returns a web response",
      "The HTML markup for a web page",
      "A file that defines the structure of a database table",
      "A tool for managing static files in a web application",
    ],
    answer:
      "A Python function that takes a web request and returns a web response",
  },
  {
    qnNo:6,
    question: "What is WSGI?",
    options: [
      "A web server that runs Python web applications",
      "A protocol for communication between web servers and Python web applications",
      "A programming language for web development",
      "A web development framework for Python",
    ],
    answer:
      "A protocol for communication between web servers and Python web applications",
  },
  {
    qnNo:7,
    question: "What is a middleware in Flask?",
    options: [
      "A software component that sits between the web server and the application",
      "A tool for managing databases in a Flask application",
      "A JavaScript library for front-end development",
      "A content management system",
    ],
    answer: "A software component that sits between the web server and the application",
  },
  {
    qnNo:8,
    question: "What is Jinja2?",
    options: [
      "A web development framework for Python",
      "A templating engine for Python web applications",
      "A tool for managing static files in a web application",
      "A JavaScript library for front-end development",
    ],
    answer: "A templating engine for Python web applications",
  },
  {
    qnNo:9,
    question: "What is a model in Django?",
    options: [
      "A Python class that represents a database table",
      "The HTML markup for a web page",
      "A Python function that takes a web request and returns a web response",
      "A tool for managing static files in a web application",
    ],
    answer: "A Python class that represents a database table",
  },
  {
    qnNo:10,
    question: "What is SQLAlchemy?",
    options: [
      "A Python web development framework",
      "A tool for managing databases in Flask applications",
      "A content management system for Python web applications",
      "An object-relational mapping library for Python",
    ],
    answer: "An object -relational mapping library for Python",
  },
  {
    qnNo:11,
  question: "What is the purpose of a migration in Django?",
  options: [
  "To create or modify database tables based on changes to Django models",
  "To manage static files in a web application",
  "To generate HTML markup for a web page",
  "To handle web requests and responses in a Django application",
  ],
  answer:
  "To create or modify database tables based on changes to Django models",
  },
  {
    qnNo:12,
  question: "What is a decorator in Flask?",
  options: [
  "A function that modifies the behavior of another function",
  "A tool for managing static files in a web application",
  "A Python class that represents a database table",
  "The HTML markup for a web page",
  ],
  answer: "A function that modifies the behavior of another function",
  },
  {
    qnNo:13,
  question: "What is a URL route in Flask?",
  options: [
  "A string that maps a URL to a Python function",
  "A tool for managing databases in a Flask application",
  "A programming language for web development",
  "A content management system for Python web applications",
  ],
  answer: "A string that maps a URL to a Python function",
  },
  {
    qnNo:14,
  question: "What is a virtual environment in Python?",
  options: [
  "A way to isolate a Python environment and install packages for a specific project",
  "A tool for managing static files in a web application",
  "A programming language for web development",
  "A content management system for Python web applications",
  ],
  answer:
  "A way to isolate a Python environment and install packages for a specific project",
  },
  {
    qnNo:15,
  question: "What is a session in Flask?",
  options: [
  "A way to store user data across multiple requests",
  "A tool for managing databases in a Flask application",
  "A Python class that represents a database table",
  "The HTML markup for a web page",
  ],
  answer: "A way to store user data across multiple requests",
  },
  {
    qnNo:16,
  question: "What is a template in Flask?",
  options: [
  "A file that contains HTML markup and placeholders for dynamic content",
  "A tool for managing static files in a web application",
  "A Python class that represents a database table",
  "A way to handle web requests and responses in a Flask application",
  ],
  answer:
  "A file that contains HTML markup and placeholders for dynamic content",
  },
  {
    qnNo:17,
  question: "What is a context processor in Flask?",
  options: [
  "A function that adds variables to the context of a template",
  "A tool for managing databases in a Flask application",
  "A Python class that represents a database table",
  "The HTML markup for a web page",
  ],
  answer: "A function that adds variables to the context of a template",
  },
  {
    qnNo:18,
  question: "What is a static file in a web application?",
  options: [
  "A file that contains resources like images, CSS, and JavaScript",
  "A Python function that takes a web request and returns a web response",
  "A tool for managing databases in a Flask application",
  "A way to handle web requests and responses in a Django application",
  ],
  answer: "A file that contains resources like images, CSS, and JavaScript",
  },
  {
    qnNo:19,
    question: "What is a view function in Django?",
    options: [
    "A Python function that takes a web request and returns a web response",
    "A tool for managing static files in a web application",
    "A Python class that represents a database table",
    "The HTML markup for a web page",
    ],
    answer: "A Python function that takes a web request and returns a web response",
    },
    {
      qnNo:20,
    question: "What is a form in Django?",
    options: [
    "A way to accept user input and validate it",
    "A tool for managing databases in a Django application",
    "A Python class that represents a database table",
    "A way to handle web requests and responses in a Django application",
    ],
    answer: "A way to accept user input and validate it",
    },]

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
