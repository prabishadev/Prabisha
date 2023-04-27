import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./HTMLStyledComponents"
const questions = [
    {
        qnNo:1,
      question: "What does HTML stand for?",
      options: [
        "Hypertext Markup Language",
        "Hyperlink Markup Language",
        "Hypermedia Markup Language",
        "None of the above",
      ],
      answer: "Hypertext Markup Language",
    },
    {
        qnNo:2,

      question: "Which of the following is an example of an HTML tag?",
      options: ["JavaScript", "<p>", "Python", "CSS"],
      answer: "<p>",
    },
    {
        qnNo:3,

      question: "Which of the following is used to mark the beginning of a tag?",
      options: ["Opening tag", "Closing tag", "Attribute", "None of the above"],
      answer: "Opening tag",
    },
    {
        qnNo:4,

      question: "Which of the following is used to mark the end of a tag?",
      options: ["Opening tag", "Closing tag", "Attribute", "None of the above"],
      answer: "Closing tag",
    },
    {
        qnNo:5,

      question: "Which of the following is an example of an HTML attribute?",
      options: ["<h1>", "<p>", 'class="example"', "<img>"],
      answer: 'class="example"',
    },
    {
        qnNo:6,

      question: "Which of the following HTML tags is used to create a paragraph?",
      options: ["<img>", "<a>", "<p>", "<div>"],
      answer: "<p>",
    },
    {
        qnNo:7,

      question:
        "Which of the following HTML tags is used to add an image to a web page?",
      options: ["<img>", "<a>", "<p>", "<div>"],
      answer: "<img>",
    },
    {
        qnNo:8,

      question:
        "Which of the following HTML attributes is used to specify the URL of an image?",
      options: ["src", "href", "class", "id"],
      answer: "src",
    },
    {
        qnNo:9,

      question: "Which of the following HTML tags is used to create a link?",
      options: ["<img>", "<a>", "<p>", "<div>"],
      answer: "<a>",
    },
    {
        qnNo:10,

      question:
        "Which of the following HTML attributes is used to specify the URL of the page being linked to?",
      options: ["src", "href", "class", "id"],
      answer: "href",
    },
    {
        qnNo:11,

      question:
        "Which of the following HTML tags is used to create an ordered list?",
      options: ["<ol>", "<ul>", "<li>", "<dl>"],
      answer: "<ol>",
    },
    {
        qnNo:12,

      question:
        "Which of the following HTML tags is used to create an unordered list?",
      options: ["<ol>", "<ul>", "<li>", "<dl>"],
      answer: "<ul>",
    },
    {
        qnNo:13,

      question: "Which of the following HTML tags is used to create a table?",
      options: ["<table>", "<tr>", "<td>", "<th>"],
      answer: "<table>",
    },
    {
        qnNo:14,

      question: "Which of the following HTML tags is used to create a table row?",
      options: ["<table>", "<tr>", "<td>", "<th>"],
      answer: "<tr>",
    },
    {
        qnNo:15,

      question:
        "Which of the following HTML tags is used to create a table cell?",
      options: ["<table>", "<tr>", "<td>", "<th>"],
      answer: "<td>",
    },
    {
        qnNo:16,

      question: "Which of the following HTML tags is used to create a form?",
      options: ["<form>", "<input>", "<button>", "<label>"],
      answer: "<form>",
    },
    {
        qnNo:17,

      question:
        "Which of the following HTML input types is used for text fields?",
      options: ["text", "password", "radio", "checkbox"],
      answer: "text",
    },
    {
        qnNo:18,

      question:
        "Which of the following HTML input types is used for radio buttons?",
      options: ["text", "password", "radio", "checkbox"],
      answer: "radio",
    },
    {
        qnNo:19,

      question: "What is the latest version of HTML?",
      options: ["HTML4", "HTML5", "HTML6", "HTML7"],
      answer: "HTML5",
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
                    src="https://cdn.hackr.io/uploads/posts/large/1593522371SMJEdm1kEp.png"
                    alt="Certificate" download
                  />
              </div>
            )}

    </>
  );
};

export default MCQ;
