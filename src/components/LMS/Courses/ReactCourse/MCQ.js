import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./RStyledComponents"

const questions = [
  {
    qnNo:1,
    question: "What is React.js?",
    options: [
      "A server-side framework for building web applications",
      "A client-side library for building user interfaces",
      "A programming language for building web applications",
      "A database management system for web applications",
    ],
    answer: "A client-side library for building user interfaces",
  },
  {
    qnNo:2,
    question: "What is JSX?",
    options: [
      "A syntax extension for JavaScript",
      "A templating engine for React.js",
      "A database management system for React.js",
      "A programming language for React.js",
    ],
    answer: "A syntax extension for JavaScript",
  },
  { qnNo:3,
    question:
      "Which of the following is used to render a component in React.js?",
    options: [
      "renderComponent()",
      "ReactDOM.render()",
      "render()",
      "ReactDOM.component()",
    ],
    answer: "ReactDOM.render()",
  },
  {
    qnNo:4,
    question: "What is a state in React.js?",
    options: [
      "A variable that stores data within a component",
      "A function that modifies the data within a component",
      "A property that is passed from a parent component to a child component",
      "A component that is rendered when the URL matches a certain pattern",
    ],
    answer: "A variable that stores data within a component",
  },
  {
    qnNo:5,
    question: "What is a prop in React.js?",
    options: [
      "A variable that stores data within a component",
      "A function that modifies the data within a component",
      "A property that is passed from a parent component to a child component",
      "A component that is rendered when the URL matches a certain pattern",
    ],
    answer:
      "A property that is passed from a parent component to a child component",
  },
  {
    qnNo:6,
    question: "What is the virtual DOM in React.js?",
    options: [
      "The actual DOM that is rendered by the browser",
      "A lightweight representation of the actual DOM",
      "A JavaScript object that represents the component tree",
      "A programming language for building web applications",
    ],
    answer: "A lightweight representation of the actual DOM",
  },
  {
    qnNo:7,
    question:
      "What is the purpose of the constructor method in a React component?",
    options: [
      "To initialize the state of the component",
      "To render the component",
      "To handle user input",
      "To make API requests",
    ],
    answer: "To initialize the state of the component",
  },
  {
    qnNo:8,
    question:
      "Which lifecycle method is called when a component is first mounted?",
    options: [
      "componentDidMount()",
      "componentWillMount()",
      "componentDidUpdate()",
      "componentWillUpdate()",
    ],
    answer: "componentDidMount()",
  },
  {
    qnNo:9,
    question:
      "What is the purpose of the setState() method in a React component?",
    options: [
      "To modify the state of the component",
      "To render the component",
      "To handle user input",
      "To make API requests",
    ],
    answer: "To modify the state of the component",
  },
  {
    qnNo:9,
    question: "What is a React hook?",
    options: [
      "A function that lets you use state and other React features without writing a class",
      "A method that lets you modify the state of a component",
      "A property that is passed from a parent component to a child component",
      "A way to define a component in React",
    ],
    answer:
      "A function that lets you use state and other React features without writing a class",
  },
  {
    qnNo:10,
    question: "What is the purpose of the useEffect hook?",
    options: [
      "To manage the state of a component",
      "To render the component",
      "To perform side effects in a component",
      "To handle user input",
    ],
    answer: "To perform side effects in a component",
  },
  {
    qnNo:11,
    question:
      "What is the difference between props and state in a React component?",
    options: [
      "Props are read-only, while state can be modified",
      "State is read-only, while props can be modified",
      "Props and state are both read-only",
      "Props and state can both be modified",
    ],
    answer: "Props are read-only, while state can be modified",
  },
  {
    qnNo:12,
    question:
      "What is the purpose of the key attribute in a list of elements in React?",
    options: [
      "To uniquely identify each element in the list",
      "To specify the order of the elements in the list",
      "To style the elements in the list",
      "To handle user input on each element in the list",
    ],
    answer: "To uniquely identify each element in the list",
  },
  {
    qnNo:13,
    question:
      "What is the purpose of the shouldComponentUpdate() method in a React component?",
    options: [
      "To render the component",
      "To update the state of the component",
      "To determine whether or not the component should be updated",
      "To handle user input",
    ],
    answer: "To determine whether or not the component should be updated",
  },
  {
    qnNo:14,
    question: "What is a Higher Order Component (HOC) in React?",
    options: [
      "A component that is rendered when the URL matches a certain pattern",
      "A component that wraps another component and provides additional functionality",
      "A component that modifies the state of another component",
      "A component that handles user input for another component",
    ],
    answer:
      "A component that wraps another component and provides additional functionality",
  },
  {
    qnNo:15,
    question: "What is the purpose of the Context API in React?",
    options: [
      "To manage the state of a component",
      "To handle user input in a component",
      "To provide a way for components to share data without passing it through props",
      "To render a component conditionally based on the state of another component",
    ],
    answer:
      "To provide a way for components to share data without passing it through props",
  },
  {
    qnNo:16,
    question: "What is Redux in React?",
    options: [
      "A programming language for building web applications",
      "A server-side framework for building web applications",
      "A client-side library for managing the state of a React application",
      "A database management system for web applications",
    ],
    answer:
      "A client-side library for managing the state of a React application",
  },
  {
    qnNo:17,
    question: "What is the purpose of the connect() function in Redux?",
    options: [
      "To create a new Redux store",
      "To modify the state of a Redux store",
      "To connect a React component to a Redux store",
      "To handle user input in a Redux store",
    ],
    answer: "To connect a React component to a Redux store",
  },
  {
    qnNo:18,
    question:
      "What is the difference between a stateless functional component and a class component in React?",
    options: [
      "A stateless functional component does not use state or lifecycle methods, while a class component does",
      "A class component does not use state or lifecycle methods, while a stateless functional component does",
      "A stateless functional component does not render anything, while a class component does",
      "A class component does not render anything, while a stateless functional component does",
    ],
    answer:
      "A stateless functional component does not use state or lifecycle methods, while a class component does",
  },
  {
    qnNo:19,
    question: "What is the Virtual DOM in React?",
    options: [
      "A version of the DOM that is stored in memory and updated by React",
      "A version of the DOM that is stored in a database and accessed by React",
      "A version of the DOM that is stored on the server and served to the client",
      "A version of the DOM that is stored in the browser's cache and used by React",
    ],
    answer:
      "A version of the DOM that is stored in memory and updated by React",
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
