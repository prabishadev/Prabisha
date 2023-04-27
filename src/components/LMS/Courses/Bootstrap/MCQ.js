import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./BStyledComponents"
const questions = [
    {
      qnNo:1,
      question: "What is Bootstrap?",
      options: [
        "A programming language",
        "A web development framework",
        "A database management system",
        "A server-side scripting language",
      ],
      answer: "A web development framework",
    },
    {
      qnNo:2,

      question: "Who developed Bootstrap?",
      options: ["Google", "Twitter", "Facebook", "Microsoft"],
      answer: "Twitter",
    },
    {
      qnNo:3,

      question:
        "Which version of Bootstrap introduced the Flexbox-based grid system?",
      options: ["Bootstrap 2", "Bootstrap 3", "Bootstrap 4", "Bootstrap 5"],
      answer: "Bootstrap 4",
    },
    {
      qnNo:4,

      question:
        "What is the class name for the primary button color in Bootstrap?",
      options: ["btn-danger", "btn-warning", "btn-success", "btn-primary"],
      answer: "btn-primary",
    },
    {
      qnNo:5,

      question: "Which CSS preprocessor is used by Bootstrap?",
      options: ["Sass", "Less", "Stylus", "PostCSS"],
      answer: "Sass",
    },
    {
      qnNo:6,

      question: "What is the class name for a container in Bootstrap?",
      options: ["container", "wrapper", "box", "content"],
      answer: "container",
    },
    {
      qnNo:7,

      question: "What is the class name for a full-width container in Bootstrap?",
      options: [
        "container-fluid",
        "container-full",
        "container-wide",
        "container-100",
      ],
      answer: "container-fluid",
    },
    {
      qnNo:8,

      question:
        "Which CSS utility class is used for text alignment in Bootstrap?",
      options: ["text-left", "text-right", "text-center", "All of the above"],
      answer: "All of the above",
    },
    {
      qnNo:9,

      question: "What is the class name for a navigation bar in Bootstrap?",
      options: ["navbar", "nav", "menu", "header"],
      answer: "navbar",
    },
    {
      qnNo:10,

      question: "What is the class name for a dropdown menu in Bootstrap?",
      options: ["dropdown-menu", "menu-dropdown", "menu", "dropdown"],
      answer: "dropdown-menu",
    },
    {
      qnNo:11,

      question: "What is the class name for a card in Bootstrap?",
      options: ["card", "box", "container", "panel"],
      answer: "card",
    },
    {
      qnNo:12,

      question: "What is the class name for a carousel in Bootstrap?",
      options: ["carousel", "slider", "slideshow", "gallery"],
      answer: "carousel",
    },
    {
      qnNo:13,

      question: "What is the class name for a modal in Bootstrap?",
      options: ["modal", "popup", "dialog", "window"],
      answer: "modal",
    },
    {
      qnNo:14,

      question: "What is the class name for a tooltip in Bootstrap?",
      options: ["tooltip", "popup", "hint", "info"],
      answer: "tooltip",
    },
    {
      qnNo:15,

      question: "What is the class name for a popover in Bootstrap?",
      options: ["popover", "popup", "hint", "info", "bubble"],
      answer: "popover",
    },
    {
      qnNo:16,

      question: "What is the class name for a badge in Bootstrap?",
      options: ["badge", "tag", "label", "mark"],
      answer: "badge",
    },
    {
      qnNo:17,

      question: "What is the class name for a progress bar in Bootstrap?",
      options: ["progress-bar", "loading-bar", "status-bar", "loader"],
      answer: "progress-bar",
    },
    {
      qnNo:18,

      question: "What is the class name for a form control in Bootstrap?",
      options: ["form-control", "input-field", "text-box", "form-input"],
      answer: "form-control",
    },
    {
      qnNo:19,

      question: "What is the class name for a table in Bootstrap?",
      options: ["table", "grid", "list", "data-table"],
      answer: "table",
    },
    {
      qnNo:20,

      question: "What is the class name for a responsive image in Bootstrap?",
      options: [
        "img-responsive",
        "responsive-img",
        "img-fluid",
        "All of the above",
      ],
      answer: "img-fluid",
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
