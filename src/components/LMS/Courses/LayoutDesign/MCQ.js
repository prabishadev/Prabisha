import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./LDStyledComponents"

const questions = [
  {
    question: "What is the purpose of layout design?",
    choices: [
      "To arrange content and elements on a page in a visually pleasing and functional way",
      "To create new content and elements for a web page",
      "To debug code on a web page",
      "To analyze user behavior on a web page",
    ],
    answer:
      "To arrange content and elements on a page in a visually pleasing and functional way",
  },
  {
    question: "What is the difference between a fixed and fluid layout?",
    choices: [
      "A fixed layout has a set width and does not change, while a fluid layout adjusts to the size of the user's screen",
      "A fluid layout has a set width and does not change, while a fixed layout adjusts to the size of the user's screen",
      "A fixed layout is used for mobile devices, while a fluid layout is used for desktop devices",
      "A fluid layout is used for mobile devices, while a fixed layout is used for desktop devices",
    ],
    answer:
      "A fixed layout has a set width and does not change, while a fluid layout adjusts to the size of the user's screen",
  },
  {
    question: "What is a grid system?",
    choices: [
      "A framework for organizing and laying out content on a web page",
      "A tool for generating color schemes for a web page",
      "A way to track user interactions on a web page",
      "A system for creating animations on a web page",
    ],
    answer: "A framework for organizing and laying out content on a web page",
  },
  {
    question: "What is the purpose of whitespace in layout design?",
    choices: [
      "To create visual separation and improve readability",
      "To fill up space on a web page",
      "To make a web page look more professional",
      "To improve search engine optimization (SEO)",
    ],
    answer: "To create visual separation and improve readability",
  },
  {
    question: "What is the fold in web design?",
    choices: [
      "The area of a web page that is visible without scrolling",
      "The area of a web page that is hidden from view",
      "The area of a web page that is above the navigation menu",
      "The area of a web page that is below the footer",
    ],
    answer: "The area of a web page that is visible without scrolling",
  },
  {
    question: "What is the purpose of a responsive design?",
    choices: [
      "To create a web page that adapts to different screen sizes and devices",
      "To create a web page that loads quickly",
      "To create a web page that is accessible to people with disabilities",
      "To create a web page that is optimized for search engines",
    ],
    answer:
      "To create a web page that adapts to different screen sizes and devices",
  },
  {
    question: "What is a breakpoint in responsive design?",
    choices: [
      "A point at which the layout of a web page changes to adapt to a different screen size",
      "A point at which the page load speed increases",
      "A point at which the color scheme of a web page changes",
      "A point at which the navigation menu of a web page changes",
    ],
    answer:
      "A point at which the layout of a web page changes to adapt to a different screen size",
  },
  {
    question: "What is the purpose of a wireframe?",
    choices: [
      "To provide a visual representation of the structure and layout of a web page",
      "To provide a tool for testing the performance of a web page",
      "To provide a framework for creating animations on a web page",
      "To provide a way to track user interactions on a web page",
    ],
    answer:
      "To provide a visual representation of the structure and layout of a web page",
  },
  {
    question: "What is a mockup in layout design?",
    choices: [
      "A high-fidelity visual representation of a web page design",
      "A low-fidelity sketch of a web page design",
      "A tool for generating color schemes for a web page",
      "A way to track user interactions on a web page",
    ],
    answer: "A high-fidelity visual representation of a web page design",
  },
  {
    question: "What is the purpose of a style guide in layout design?",
    choices: [
      "To ensure consistency and cohesion in the design of a web page",
      "To provide a tool for testing the performance of a web page",
      "To provide a framework for creating animations on a web page",
      "To provide a way to track user interactions on a web page",
    ],
    answer: "To ensure consistency and cohesion in the design of a web page",
  },
  {
    question: "What is the purpose of a CSS framework in layout design?",
    choices: [
      "To provide pre-built CSS code for common layout and design patterns",
      "To provide a way to test the performance of a web page",
      "To provide a framework for creating animations on a web page",
      "To provide a way to track user interactions on a web page",
    ],
    answer:
      "To provide pre-built CSS code for common layout and design patterns",
  },
  {
    question: "What is the purpose of a grid system in layout design?",
    choices: [
      "To create a structure for organizing content on a web page",
      "To provide a way to test the performance of a web page",
      "To provide a framework for creating animations on a web page",
      "To provide a way to track user interactions on a web page",
    ],
    answer: "To create a structure for organizing content on a web page",
  },
  {
    question: "What is the purpose of a sticky header in layout design?",
    choices: [
      "To keep the navigation menu visible and accessible as the user scrolls down the page",
      "To provide a tool for testing the performance of a web page",
      "To create a framework for creating animations on a web page",
      "To provide a way to track user interactions on a web page",
    ],
    answer:
      "To keep the navigation menu visible and accessible as the user scrolls down the page",
  },
  {
    question: "What is the purpose of a hero image in layout design?",
    choices: [
      "To create a visually striking introduction to a web page",
      "To provide a way to test the performance of a web page",
      "To create a framework for creating animations on a web page",
      "To provide a way to track user interactions on a web page",
    ],
    answer: "To create a visually striking introduction to a web page",
  },
  {
    question: "What is the purpose of a card-based layout in layout design?",
    choices: [
      "To create a visually appealing way to present content on a web page",
      "To provide a tool for testing the performance of a web page",
      "To create a framework for creating animations on a web page",
      "To provide a way to track user interactions on a web page",
    ],
    answer:
      "To create a visually appealing way to present content on a web page",
  },
  {
    question: "What is the purpose of whitespace in layout design?",
    choices: [
      "To improve readability and visual hierarchy on a web page",
      "To provide a way to test the performance of a web page",
      "To create a framework for creating animations on a web page",
      "To provide a way to track user interactions on a web page",
    ],
    answer: "To improve readability and visual hierarchy on a web page",
  },
  {
    question: "What is the purpose of responsive design in layout design?",
    choices: [
      "To ensure that a web page is accessible and usable on all devices and screen sizes",
      "To provide a way to test the performance of a web page",
      "To create a framework for creating animations on a web page",
      "To provide a way to track user interactions on a web page",
    ],
    answer:
      "To ensure that a web page is accessible and usable on all devices and screen sizes",
  },
  {
    question: "What is the purpose of a fixed-width layout in layout design?",
    choices: [
      "To create a layout with a fixed width, regardless of the size of the screen or device",
      "To provide a way to test the performance of a web page",
      "To create a framework for creating animations on a web page",
      "To provide a way to track user interactions on a web page",
    ],
    answer:
      "To create a layout with a fixed width, regardless of the size of the screen or device",
  },
  {
    question: "What is the purpose of a fluid-width layout in layout design?",
    choices: [
      "To create a layout that adjusts to the size of the screen or device",
      "To provide a way to test the performance of a web page",
      "To create a framework for creating animations on a web page",
      "To provide a way to track user interactions on a web page",
    ],
    answer:
      "To create a layout that adjusts to the size of the screen or device",
  },
  {
    question: "What is the purpose of a fixed header in layout design?",
    choices: [
      "To keep the header visible and accessible as the user scrolls down the page",
      "To provide a way to test the performance of a web page",
      "To create a framework for creating animations on a web page",
      "To provide a way to track user interactions on a web page",
    ],
    answer:
      "To keep the header visible and accessible as the user scrolls down the page",
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
