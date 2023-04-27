import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./VHStyledComponents"

const questions = [
  {
    question: "What is visual hierarchy?",
    choices: [
      "The arrangement of visual elements on a page to create a clear and organized structure",
      "The use of bright colors to create a vibrant and engaging design",
      "The placement of images to create a balanced and harmonious composition",
      "The use of typography to convey a specific message",
    ],
    answer:
      "The arrangement of visual elements on a page to create a clear and organized structure",
  },
  {
    question: "What is the purpose of visual hierarchy in design?",
    choices: [
      "To guide the user's attention and create a clear and organized layout",
      "To make the design look aesthetically pleasing",
      "To incorporate the latest design trends",
      "To showcase the designer's creativity",
    ],
    answer:
      "To guide the user's attention and create a clear and organized layout",
  },
  {
    question: "What is the most important element of visual hierarchy?",
    choices: ["Color", "Size", "Typography", "Spacing"],
    answer: "Size",
  },
  {
    question: "What is the purpose of using a grid in visual hierarchy?",
    choices: [
      "To create a structured layout and help align visual elements",
      "To make the design look more interesting",
      "To incorporate multiple design styles",
      "To showcase the designer's versatility",
    ],
    answer: "To create a structured layout and help align visual elements",
  },
  {
    question: "What is the purpose of contrast in visual hierarchy?",
    choices: [
      "To create a clear visual distinction between different elements",
      "To make the design look more interesting",
      "To incorporate multiple design styles",
      "To showcase the designer's creativity",
    ],
    answer: "To create a clear visual distinction between different elements",
  },
  {
    question: "What is the purpose of using whitespace in visual hierarchy?",
    choices: [
      "To create a sense of balance and prevent overcrowding",
      "To make the design look more interesting",
      "To incorporate multiple design styles",
      "To showcase the designer's creativity",
    ],
    answer: "To create a sense of balance and prevent overcrowding",
  },
  {
    question: "What is the purpose of alignment in visual hierarchy?",
    choices: [
      "To create a clear and organized layout",
      "To make the design look more interesting",
      "To incorporate multiple design styles",
      "To showcase the designer's creativity",
    ],
    answer: "To create a clear and organized layout",
  },
  {
    question: "What is the purpose of repetition in visual hierarchy?",
    choices: [
      "To create a sense of unity and reinforce visual elements",
      "To make the design look more interesting",
      "To incorporate multiple design styles",
      "To showcase the designer's creativity",
    ],
    answer: "To create a sense of unity and reinforce visual elements",
  },
  {
    question:
      "What is the purpose of hierarchy of information in visual hierarchy?",
    choices: [
      "To prioritize and organize information based on its importance",
      "To make the design look more interesting",
      "To incorporate multiple design styles",
      "To showcase the designer's creativity",
    ],
    answer: "To prioritize and organize information based on its importance",
  },
  {
    question: "What is the purpose of using a focal point in visual hierarchy?",
    choices: [
      "To guide the user's attention to a specific area",
      "To make the design look more interesting",
      "To incorporate multiple design styles",
      "To showcase the designer's creativity",
    ],
    answer: "To guide the user's attention to a specific area",
  },
  {
    question:
      "What is the purpose of using a color palette in visual hierarchy?",
    choices: [
      "To create a harmonious and consistent design",
      "To make the design look more interesting",
      "To incorporate multiple design styles",
      "To showcase the designer's creativity",
    ],
    answer: "To create a harmonious and consistent design",
  },
  {
    question: "What is the purpose of using typography in visual hierarchy?",
    choices: [
      "To create contrast and emphasize certain elements",
      "To make the design look more interesting",
      "To incorporate multiple design styles",
      "To showcase the designer's creativity",
    ],
    answer: "To create contrast and emphasize certain elements",
  },
  {
    question: "What is the purpose of using imagery in visual hierarchy?",
    choices: [
      "To create visual interest and reinforce messaging",
      "To make the design look more interesting",
      "To incorporate multiple design styles",
      "To showcase the designer's creativity",
    ],
    answer: "To create visual interest and reinforce messaging",
  },
  {
    question: "What is the purpose of using icons in visual hierarchy?",
    choices: [
      "To create a clear visual representation of an action or concept",
      "To make the design look more interesting",
      "To incorporate multiple design styles",
      "To showcase the designer's creativity",
    ],
    answer: "To create a clear visual representation of an action or concept",
  },
  {
    question:
      "What is the purpose of using negative space in visual hierarchy?",
    choices: [
      "To create a sense of balance and allow visual elements to breathe",
      "To make the design look more interesting",
      "To incorporate multiple design styles",
      "To showcase the designer's creativity",
    ],
    answer: "To create a sense of balance and allow visual elements to breathe",
  },
  {
    question:
      "What is the purpose of using a visual hierarchy in user experience design?",
    choices: [
      "To guide the user's attention and create a clear and intuitive interface",
      "To make the design look more interesting",
      "To incorporate multiple design styles",
      "To showcase the designer's creativity",
    ],
    answer:
      "To guide the user's attention and create a clear and intuitive interface",
  },
  {
    question:
      "What is the purpose of using a visual hierarchy in graphic design?",
    choices: [
      "To create a clear and effective message through visual communication",
      "To make the design look more interesting",
      "To incorporate multiple design styles",
      "To showcase the designer's creativity",
    ],
    answer:
      "To create a clear and effective message through visual communication",
  },
  {
    question: "What is the purpose of using a visual hierarchy in web design?",
    choices: [
      "To create a clear and organized layout for the user to navigate",
      "To make the design look more interesting",
      "To incorporate multiple design styles",
      "To showcase the designer's creativity",
    ],
    answer: "To create a clear and organized layout for the user to navigate",
  },
  {
    question: "What is the purpose of visual hierarchy?",
    choices: [
      "To make the design look more interesting",
      "To create a sense of order and structure",
      "To incorporate as many design elements as possible",
      "To make the design stand out from other designs",
    ],
    answer: "To create a sense of order and structure",
  },
  {
    question: "What are some common visual hierarchy techniques?",
    choices: [
      "Contrast, proximity, alignment, and repetition",
      "Symmetry, gradient, transparency, and texture",
      "Shadow, reflection, animation, and blur",
      "Saturation, hue, value, and color temperature",
    ],
    answer: "Contrast, proximity, alignment, and repetition",
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
