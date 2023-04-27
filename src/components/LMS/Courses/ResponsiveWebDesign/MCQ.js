import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./RWDStyledComponents"

const questions = [
  {
    qnNo:1,
    question: "What is Responsive Web Design?",
    options: [
      "A web design technique that allows websites to adapt to different screen sizes",
      "A web design technique that makes websites look good on desktop computers",
      "A web design technique that only works on mobile devices",
      "A web design technique that allows websites to be downloaded faster",
    ],
    answer:
      "A web design technique that allows websites to adapt to different screen sizes",
  },
  {
    qnNo:2,
    question:
      "What is the difference between a responsive website and a mobile app?",
    options: [
      "A responsive website can be accessed through a mobile browser while a mobile app needs to be downloaded and installed",
      "A mobile app is cheaper to develop than a responsive website",
      "A mobile app is faster than a responsive website",
      "A responsive website has more features than a mobile app",
    ],
    answer:
      "A responsive website can be accessed through a mobile browser while a mobile app needs to be downloaded and installed",
  },
  {
    qnNo:3,
    question: "What is a viewport?",
    options: [
      "The visible area of a webpage",
      "The code that makes a webpage responsive",
      "The area where the logo is displayed on a webpage",
      "The area where the navigation menu is displayed on a webpage",
    ],
    answer: "The visible area of a webpage",
  },
  {
    qnNo:3,
    question: "What is the purpose of media queries in responsive design?",
    options: [
      "To apply specific styles to different screen sizes",
      "To make the website faster",
      "To hide elements on smaller screens",
      "To make the website more interactive",
    ],
    answer: "To apply specific styles to different screen sizes",
  },
  {
    qnNo:4,
    question: "What is a CSS breakpoint?",
    options: [
      "The point where a website breaks due to a coding error",
      "The point where a website changes its layout based on screen size",
      "The point where a website stops working on mobile devices",
      "The point where a website changes its font size",
    ],
    answer: "The point where a website changes its layout based on screen size",
  },
  {
    qnNo:5,
    question: "What is the best way to test if a website is responsive?",
    options: [
      "Resize the browser window and see if the website adapts",
      "Use a mobile device and see if the website looks good",
      "Use a desktop computer and see if the website looks good",
      "Ask other people if the website looks good",
    ],
    answer: "Resize the browser window and see if the website adapts",
  },
  {
    qnNo:6,
    question: "What is the role of the meta viewport tag in responsive design?",
    options: [
      "To set the width and initial scale of the viewport",
      "To hide elements on smaller screens",
      "To set the font size of the website",
      "To apply specific styles to different screen sizes",
    ],
    answer: "To set the width and initial scale of the viewport",
  },
  {
    qnNo:7,
    question: "What is the purpose of the CSS max-width property?",
    options: [
      "To set a maximum width for an element",
      "To set a minimum width for an element",
      "To set the font size of an element",
      "To hide an element on smaller screens",
    ],
    answer: "To set a maximum width for an element",
  },
  {
    qnNo:8,
    question: "What is the purpose of the CSS min-width property?",
    options: [
      "To set a minimum width for an element",
      "To set a maximum width for an element",
      "To set the font size of an element",
      "To hide an element on smaller screens",
    ],
    answer: "To set a minimum width for an element",
  },
  {
    qnNo:9,
    question:
      "What is the purpose of the CSS float property in responsive design?",
    options: [
      "To position elements side by side",
      "To hide elements on smaller screens",
      "To change the font size of an element",
      "To set a maximum width for an element",
    ],
    answer: "To position elements side by side",
  },
  {
    qnNo:10,
    question:
      "What is the purpose of the CSS clear property in responsive design?",
    options: [
      "To prevent elements from being positioned next to a floated element",
      "To set a maximum width for an element",
      "To hide elements on smaller screens",
      "To change the font size of an element",
    ],
    answer:
      "To prevent elements from being positioned next to a floated element",
  },
  {
    qnNo:11,
    question:
      "What is the purpose of the CSS display property in responsive design?",
    options: [
      "To control the visibility of an element",
      "To set a maximum width for an element",
      "To hide elements on smaller screens",
      "To change the font size of an element",
    ],
    answer: "To control the visibility of an element",
  },
  {
    qnNo:12,
    question:
      "What is the purpose of the CSS flexbox layout in responsive design?",
    options: [
      "To create flexible layouts that adapt to different screen sizes",
      "To position elements side by side",
      "To set a maximum width for an element",
      "To change the font size of an element",
    ],
    answer: "To create flexible layouts that adapt to different screen sizes",
  },
  {
    qnNo:13,
    question:
      "What is the purpose of the CSS grid layout in responsive design?",
    options: [
      "To create complex, multi-column layouts",
      "To hide elements on smaller screens",
      "To change the font size of an element",
      "To set a maximum width for an element",
    ],
    answer: "To create complex, multi-column layouts",
  },
  {
    qnNo:14,
    question:
      "What is the purpose of the CSS position property in responsive design?",
    options: [
      "To control the position of an element on the webpage",
      "To set a maximum width for an element",
      "To hide elements on smaller screens",
      "To change the font size of an element",
    ],
    answer: "To control the position of an element on the webpage",
  },
  {
    qnNo:15,
    question:
      "What is the purpose of the CSS z-index property in responsive design?",
    options: [
      "To control the stacking order of elements",
      "To set a maximum width for an element",
      "To hide elements on smaller screens",
      "To change the font size of an element",
    ],
    answer: "To control the stacking order of elements",
  },
  {
    qnNo:16,
    question:
      "What is the purpose of the CSS transform property in responsive design?",
    options: [
      "To apply visual effects to elements",
      "To set a maximum width for an element",
      "To hide elements on smaller screens",
      "To change the font size of an element",
    ],
    answer: "To apply visual effects to elements",
  },
  {
    qnNo:17,
    question:
      "What is the purpose of the CSS transition property in responsive design?",
    options: [
      "To create smooth transitions between element states",
      "To set a maximum width for an element",
      "To hide elements on smaller screens",
      "To change the font size of an element",
    ],
    answer: "To create smooth transitions between element states",
  },
  {
    qnNo:18,
    question:
      "What is the purpose of the CSS animation property in responsive design?",
    options: [
      "To create animated effects on elements",
      "To set a maximum width for an element",
      "To hide elements on smaller screens",
      "To change the font size of an element",
    ],
    answer: "To create animated effects on elements",
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
