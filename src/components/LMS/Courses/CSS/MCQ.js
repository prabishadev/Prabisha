import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./CSSStyledComponents"
const questions = [
    {
        qnNo:1,
      question: "Which of the following is NOT a valid CSS selector?",
      options: ["#elementID", ".className", "elementName", "*"],
      answer: "elementName",
    },
    {
        qnNo:2,
      question:
        "Which property is used to set the background color of an element in CSS?",
      options: ["color", "background-color", "font-color", "background"],
      answer: "background-color",
    },
    {
        qnNo:3,
      question:
        "Which CSS property is used to create rounded corners on an element?",
      options: ["border-radius", "corner-radius", "border-style", "padding"],
      answer: "border-radius",
    },
    {
        qnNo:4,
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Colorful Style Sheets",
        "Computer Style Sheets",
        "Creative Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
    {
        qnNo:5,
      question: "Which of the following is NOT a CSS box model property?",
      options: ["padding", "margin", "border", "spacing"],
      answer: "spacing",
    },
    {
        qnNo:6,
      question:
        "Which of the following is the correct syntax for setting a font family in CSS?",
      options: [
        "font-family: Arial;",
        "font-family = Arial;",
        "font-family: 'Arial';",
        "font-family: Arial",
      ],
      answer: "font-family: 'Arial';",
    },
    {
        qnNo:7,
      question: "Which CSS property is used to set the font size?",
      options: ["font-size", "font-style", "font-weight", "text-size"],
      answer: "font-size",
    },
    {
        qnNo:8,
      question: "Which CSS property is used to create columns in a web page?",
      options: ["column-width", "column-count", "column-size", "column-layout"],
      answer: "column-count",
    },
    {
        qnNo:9,
      question: "Which of the following is NOT a CSS positioning property?",
      options: ["top", "right", "bottom", "center"],
      answer: "center",
    },
    {
        qnNo:10,
      question:
        "Which CSS property is used to control the spacing between lines of text?",
      options: ["line-height", "text-spacing", "font-spacing", "letter-spacing"],
      answer: "line-height",
    },
    {
        qnNo:11,
      question:
        "Which CSS property is used to specify the display behavior of an element?",
      options: ["display", "visibility", "opacity", "float"],
      answer: "display",
    },
    {
        qnNo:12,
      question: "Which CSS property is used to set the width of an element?",
      options: ["width", "size", "length", "dimension"],
      answer: "width",
    },
    {
        qnNo:13,
      question: "Which of the following is NOT a valid CSS unit of measurement?",
      options: ["pixels", "points", "em", "millimeters"],
      answer: "points",
    },
    {
        qnNo:14,
      question:
        "Which CSS property is used to create a drop shadow effect on an element?",
      options: ["box-shadow", "text-shadow", "shadow-effect", "element-shadow"],
      answer: "box-shadow",
    },
    {
        qnNo:15,
      question: "Which CSS property is used to align text within an element?",
      options: ["text-align", "align-text", "text-justify", "justify-text"],
      answer: "text-align",
    },
    {
        qnNo:16,
      question:
        "Which CSS property is used to set the background image of an element?",
      options: [
        "background-image",
        "image-background",
        "background-url",
        "url-background",
      ],
      answer: "background-image",
    },
    {
        qnNo:17,
      question:
        "Which CSS property is used to create a border around an element?",
      options: ["border", "outline", "border-style", "border-color"],
      answer: "border",
    },
    {
        qnNo:18,
      question: "Which of the following is a CSS pseudo-class?",
      options: [":hover", "#active", ".selected", "all of the above"],
      answer: ":hover",
    },
    {
        qnNo:19,
      question: "Which CSS property is used to set the height of an element?",
      options: ["height", "element-height", "size", "dimension"],
      answer: "height",
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
