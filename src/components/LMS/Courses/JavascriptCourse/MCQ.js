import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./JSStyledComponents"

const questions = [
    {
      qnNo:1,
      question:
        "What is the output of the following code? console.log(2 + 3 * 4);",
      options: ["20", "14", "17", "23"],
      answer: "14",
    },
    {
      qnNo:2,
      question: "What is the correct way to declare a variable in JavaScript?",
      options: ["var name;", "let name = '';", "name = '';", "const name = '';"],
      answer: "let name = '';",
    },
    {qnNo:3,
      question: "Which of the following is NOT a JavaScript data type?",
      options: ["string", "integer", "boolean", "undefined"],
      answer: "integer",
    },
    {qnNo:4,
      question: "Which of the following is NOT a JavaScript comparison operator?",
      options: ["==", "===", "<>", ">="],
      answer: "<>",
    },
    {
      qnNo:5,
      question: "What is the output of the following code? console.log('5' + 2);",
      options: ["7", "52", "5+2", "undefined"],
      answer: "52",
    },
    {
      qnNo:6,
      question: "What is the purpose of a JavaScript function?",
      options: [
        "to store data",
        "to perform an action",
        "to loop through code",
        "to define a variable",
      ],
      answer: "to perform an action",
    },
    {
      qnNo:7,
      question:
        "Which of the following is the correct way to write a JavaScript if statement?",
      options: [
        "if (condition) {}",
        "if {condition} ()",
        "if condition {}",
        "if [condition] {}",
      ],
      answer: "if (condition) {}",
    },
    {
      qnNo:8,
      question:
        "What is the output of the following code? console.log(typeof true);",
      options: ["string", "number", "boolean", "object"],
      answer: "boolean",
    },
    {
      qnNo:9,
      question:
        "Which of the following is the correct way to write a JavaScript for loop?",
      options: [
        "for (i < 10; i++) {}",
        "for (i = 0; i < 10; i++) {}",
        "for (i = 0; i++) {}",
        "for (i = 10; i > 0; i--) {}",
      ],
      answer: "for (i = 0; i < 10; i++) {}",
    },
    {
      qnNo:10,
      question:
        "What is the output of the following code? console.log(2 == '2');",
      options: ["true", "false", "undefined", "NaN"],
      answer: "true",
    },
    {
      qnNo:11,
      question: "Which of the following is NOT a JavaScript logical operator?",
      options: ["&&", "||", "!", "??"],
      answer: "??",
    },
    {
      qnNo:12,
      question:
        "What is the output of the following code? console.log(typeof [1, 2, 3]);",
      options: ["object", "array", "number", "undefined"],
      answer: "object",
    },
    {
      qnNo:13,
      question:
        "Which of the following is the correct way to write a JavaScript while loop?",
      options: [
        "while (i < 10) {}",
        "while {i < 10} ()",
        "while i < 10 {}",
        "while [i < 10] {}",
      ],
      answer: "while (i < 10) {}",
    },
    {
      qnNo:13,
      question:
        "What is the output of the following code? console.log('hello'.toUpperCase());",
      options: ["HELLO", "hello", "Hello", "HellO"],
      answer: "HELLO",
    },
    {
      qnNo:14,
      question:
        "What is the output of the following code? console.log(Math.floor(4.7));",
      options: ["4", "5", "4.7", "undefined"],
      answer: "4",
    },
    {
      qnNo:15,
      question:
        "Which of the following is the correct way to write a JavaScript switch statement?",
      options: [
        "switch {case: value}",
        "switch (case value) {}",
        "switch (value) {case:}",
        "switch (value) {case: break;}",
      ],
      answer: "switch (value) {case: break;}",
    },
    {
      qnNo:16,
      question: "What is the output of the following code? console.log(10 % 3);",
      options: ["3", "1", "7", "10/3"],
      answer: "1",
    },
    {
      qnNo:17,
      question: "Which of the following is NOT a JavaScript loop?",
      options: ["for", "while", "if", "do...while"],
      answer: "if",
    },
    {
      qnNo:18,
      question:
        "What is the output of the following code? console.log(typeof null);",
      options: ["object", "null", "undefined", "number"],
      answer: "object",
    },
    {
      qnNo:19,
      question:
        "Which of the following is the correct way to write a JavaScript array?",
      options: ["[1, 2, 3,]", "{'1', '2', '3'}", "{1; 2; 3}", "['1', '2', '3']"],
      answer: "['1', '2', '3']",
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
