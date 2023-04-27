import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./UIStyledComponents"

const questions = [
  {
    question: "What does UI stand for in UI design?",
    choices: [
      "User Integration",
      "User Interface",
      "User Information",
      "User Interpretation",
    ],
    answer: "User Interface",
  },
  {
    question: "What is the main goal of UI design?",
    choices: [
      "To create visually appealing interfaces",
      "To create interfaces that are easy to use and understand",
      "To create interfaces that load quickly",
      "To create interfaces that are compatible with all devices and browsers",
    ],
    answer: "To create interfaces that are easy to use and understand",
  },
  {
    question: "What is the purpose of wireframes in UI design?",
    choices: [
      "To create a visual representation of the user interface",
      "To test the performance of the user interface",
      "To create a framework for animations on the user interface",
      "To track user interactions on the user interface",
    ],
    answer: "To create a visual representation of the user interface",
  },
  {
    question: "What is the purpose of prototypes in UI design?",
    choices: [
      "To test the functionality and user experience of the user interface",
      "To provide a way to test the performance of the user interface",
      "To create a framework for animations on the user interface",
      "To track user interactions on the user interface",
    ],
    answer:
      "To test the functionality and user experience of the user interface",
  },
  {
    question: "What is the purpose of color theory in UI design?",
    choices: [
      "To create visually appealing color schemes",
      "To test the performance of the user interface",
      "To create a framework for animations on the user interface",
      "To track user interactions on the user interface",
    ],
    answer: "To create visually appealing color schemes",
  },
  {
    question: "What is the purpose of typography in UI design?",
    choices: [
      "To make text readable and visually appealing on the user interface",
      "To test the performance of the user interface",
      "To create a framework for animations on the user interface",
      "To track user interactions on the user interface",
    ],
    answer:
      "To make text readable and visually appealing on the user interface",
  },
  {
    question: "What is the purpose of visual hierarchy in UI design?",
    choices: [
      "To guide the user's attention and create a clear information hierarchy on the user interface",
      "To test the performance of the user interface",
      "To create a framework for animations on the user interface",
      "To track user interactions on the user interface",
    ],
    answer:
      "To guide the user's attention and create a clear information hierarchy on the user interface",
  },
  {
    question: "What is the purpose of affordances in UI design?",
    choices: [
      "To provide visual cues for how an interface element can be interacted with",
      "To test the performance of the user interface",
      "To create a framework for animations on the user interface",
      "To track user interactions on the user interface",
    ],
    answer:
      "To provide visual cues for how an interface element can be interacted with",
  },
  {
    question: "What is the purpose of consistency in UI design?",
    choices: [
      "To create a predictable and familiar user experience",
      "To test the performance of the user interface",
      "To create a framework for animations on the user interface",
      "To track user interactions on the user interface",
    ],
    answer: "To create a predictable and familiar user experience",
  },
  {
    question: "What is the purpose of white space in UI design?",
    choices: [
      "To make the user interface look more visually appealing",
      "To test the performance of the user interface",
      "To create a framework for animations on the user interface",
      "To improve readability and create visual breathing room on the user interface",
    ],
    answer:
      "To improve readability and create visual breathing room on the user interface",
  },
  {
    question: "What is the purpose of a grid system in UI design?",
    choices: [
      "To provide a framework for organizing and aligning interface elements",
      "To test the performance of the user interface",
      "To create a framework for animations on the user interface",
      "To track user interactions on the user interface",
    ],
    answer:
      "To provide a framework for organizing and aligning interface elements",
  },
  {
    question: "What is the purpose of visual feedback in UI design?",
    choices: [
      "To provide the user with information about their actions on the user interface",
      "To test the performance of the user interface",
      "To create a framework for animations on the user interface",
      "To track user interactions on the user interface",
    ],
    answer:
      "To provide the user with information about their actions on the user interface",
  },
  {
    question: "What is the purpose of microcopy in UI design?",
    choices: [
      "To provide instructional or informative text to guide the user on the user interface",
      "To test the performance of the user interface",
      "To create a framework for animations on the user interface",
      "To track user interactions on the user interface",
    ],
    answer:
      "To provide instructional or informative text to guide the user on the user interface",
  },
  {
    question: "What is the purpose of accessibility in UI design?",
    choices: [
      "To ensure that all users can use and access the user interface, regardless of any physical or cognitive disabilities",
      "To test the performance of the user interface",
      "To create a framework for animations on the user interface",
      "To track user interactions on the user interface",
    ],
    answer:
      "To ensure that all users can use and access the user interface, regardless of any physical or cognitive disabilities",
  },
  {
    question: "What is the purpose of responsive design in UI design?",
    choices: [
      "To ensure that the user interface adapts and looks good on all devices and screen sizes",
      "To test the performance of the user interface",
      "To create a framework for animations on the user interface",
      "To track user interactions on the user interface",
    ],
    answer:
      "To ensure that the user interface adapts and looks good on all devices and screen sizes",
  },
  {
    question: "What is the purpose of usability testing in UI design?",
    choices: [
      "To test how easy and intuitive it is for users to interact with the user interface",
      "To test the performance of the user interface",
      "To create a framework for animations on the user interface",
      "To track user interactions on the user interface",
    ],
    answer:
      "To test how easy and intuitive it is for users to interact with the user interface",
  },
  {
    question: "What is the purpose of a style guide in UI design?",
    choices: [
      "To provide a set of rules and guidelines for how interface elements should look and behave",
      "To test the performance of the user interface",
      "To create a framework for animations on the user interface",
      "To track user interactions on the user interface",
    ],
    answer:
      "To provide a set of rules and guidelines for how interface elements should look and behave",
  },
  {
    question: "What is the purpose of consistency in UI design?",
    choices: [
      "To create a predictable and familiar user experience",
      "To test the performance of the user interface",
      "To create a framework for animations on the user interface",
      "To track user interactions on the user interface",
    ],
    answer: "To create a predictable and familiar user experience",
  },
  {
    question: "What is the purpose of a call-to-action (CTA) in UI design?",
    choices: [
      "To encourage the user to take a specific action on the user interface",
      "To test the performance of the user interface",
      "To create a framework for animations on the user interface",
      "To track user interactions on the user interface",
    ],
    answer:
      "To encourage the user to take a specific action on the user interface",
  },
  {
    question: "What is the purpose of color in UI design?",
    choices: [
      "To create a visually appealing user interface",
      "To test the performance of the user interface",
      "To create a framework for animations on the user interface",
      "To track user interactions on the user interface",
    ],
    answer: "To create a visually appealing user interface",
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
