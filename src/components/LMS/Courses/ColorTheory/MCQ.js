import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./CTStyledComponents"
const questions = [
    {
      question: "What is the color of the complementary of blue?",
      options: ["Red", "Green", "Yellow", "Orange"],
      answer: "Orange",
    },
    {
      question: "What color represents warmth and energy?",
      options: ["Green", "Blue", "Yellow", "Purple"],
      answer: "Yellow",
    },
    {
      question: "What is the color of royalty?",
      options: ["Red", "Blue", "Green", "Purple"],
      answer: "Purple",
    },
    {
      question: "What is the color of happiness and joy?",
      options: ["Green", "Blue", "Yellow", "Purple"],
      answer: "Yellow",
    },
    {
      question: "What is the color of nature and growth?",
      options: ["Green", "Blue", "Yellow", "Purple"],
      answer: "Green",
    },
    {
      question: "What is the color of danger and warning?",
      options: ["Red", "Green", "Yellow", "Purple"],
      answer: "Red",
    },
    {
      question: "What is the color of calmness and tranquility?",
      options: ["Green", "Blue", "Yellow", "Purple"],
      answer: "Blue",
    },
    {
      question: "What is the color of passion and love?",
      options: ["Red", "Green", "Yellow", "Purple"],
      answer: "Red",
    },
    {
      question: "What is the color of intelligence and wisdom?",
      options: ["Green", "Blue", "Yellow", "Purple"],
      answer: "Blue",
    },
    {
      question: "What color represents neutrality and balance?",
      options: ["Gray", "Black", "White", "Brown"],
      answer: "Gray",
    },
    {
      question: "What is the color of envy and jealousy?",
      options: ["Green", "Blue", "Yellow", "Purple"],
      answer: "Green",
    },
    {
      question: "What is the color of purity and innocence?",
      options: ["White", "Black", "Gray", "Brown"],
      answer: "White",
    },
    {
      question: "What color represents danger and caution?",
      options: ["Black", "Yellow", "Red", "Green"],
      answer: "Yellow",
    },
    {
      question: "What color represents sadness and melancholy?",
      options: ["Green", "Blue", "Yellow", "Purple"],
      answer: "Blue",
    },
    {
      question: "What is the color of luxury and sophistication?",
      options: ["Green", "Blue", "Yellow", "Purple"],
      answer: "Purple",
    },
    {
      question: "What color represents power and authority?",
      options: ["Red", "Green", "Yellow", "Blue"],
      answer: "Blue",
    },
    {
      question: "What is the color of femininity and romance?",
      options: ["Red", "Green", "Yellow", "Pink"],
      answer: "Pink",
    },
    {
      question: "What is the color of masculinity and strength?",
      options: ["Red", "Green", "Yellow", "Blue"],
      answer: "Blue",
    },
    {
      question: "What color represents autumn and harvest?",
      options: ["Red", "Green", "Yellow", "Orange"],
      answer: "Orange",
    },
    {
      question: "What color represents the sun and energy?",
      options: ["Red", "Green", "Yellow", "Blue"],
      answer: "Yellow",
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
