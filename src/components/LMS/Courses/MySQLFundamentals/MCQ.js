import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./SQLStyledComponents"

const questions = [
  {
    qnNo:1,
    question: "What does the acronym SQL stand for?",
    options: [
      "Structured Query Language",
      "Sequential Query Language",
      "Simplified Query Language",
      "Systematic Query Language"
    ],
    answer: "Structured Query Language"
  },
  {
    qnNo:2,
    question: "Which MySQL keyword is used to select data from a table?",
    options: ["SELECT", "FROM", "WHERE", "ALL"],
    answer: "SELECT"
  },
  {
    qnNo:3,
    question: "Which MySQL function is used to count the number of rows in a table?",
    options: ["COUNT", "SUM", "AVG", "MAX"],
    answer: "COUNT"
  },
  {
    qnNo:4,
    question: "Which operator is used in a WHERE clause to specify multiple conditions?",
    options: ["AND", "OR", "NOT", "LIKE"],
    answer: "AND"
  },
  {
    qnNo:5,
    question: "Which MySQL command is used to create a new database?",
    options: ["CREATE DATABASE", "ADD DATABASE", "INSERT DATABASE", "MAKE DATABASE"],
    answer: "CREATE DATABASE"
  },
  {
    qnNo:6,
    question: "Which MySQL data type is used to store a date and time value?",
    options: ["DATE", "TIME", "DATETIME", "TIMESTAMP"],
    answer: "DATETIME"
  },
  {
    qnNo:7,
    question: "Which MySQL keyword is used to insert new data into a table?",
    options: ["INSERT", "ADD", "UPDATE", "MODIFY"],
    answer: "INSERT"
  },
  {
    qnNo:8,
    question: "Which MySQL function is used to find the highest value in a column?",
    options: ["MAX", "MIN", "AVG", "SUM"],
    answer: "MAX"
  },
  {
    qnNo:9,
    question: "Which operator is used to sort the result set in ascending order?",
    options: ["ASC", "DESC", "ORDER BY", "SORT"],
    answer: "ASC"
  },
  {
    qnNo:10,
    question: "Which MySQL keyword is used to update existing data in a table?",
    options: ["UPDATE", "MODIFY", "CHANGE", "ALTER"],
    answer: "UPDATE"
  },
  {
    qnNo:11,
    question: "Which MySQL command is used to delete a table?",
    options: ["DROP TABLE", "DELETE TABLE", "REMOVE TABLE", "ERASE TABLE"],
    answer: "DROP TABLE"
  },
  {
    qnNo:12,
    question: "Which MySQL function is used to calculate the average value in a column?",
    options: ["AVG", "MAX", "MIN", "SUM"],
    answer: "AVG"
  },
  {
    qnNo:13,
    question: "Which operator is used in a WHERE clause to search for a specific pattern?",
    options: ["LIKE", "EQUALS", "MATCHES", "CONTAINS"],
    answer: "LIKE"
  },
  {
    qnNo:14,
    question: "Which MySQL command is used to grant privileges to a user?",
    options: ["GRANT", "ALLOW", "PERMIT", "AUTHORIZE"],
    answer: "GRANT"
  },
  {
    qnNo:15, 
    question: "Which MySQL data type is used to store a large amount of text?",
    options: ["TEXT", "VARCHAR", "CHAR", "BLOB"],
    answer: "TEXT"
  },
  {
    qnNo:16,
    question: "Which MySQL keyword is used to delete data from a table?",
    options: ["DELETE", "REMOVE", "ERASE", "CLEAR"],
    answer: "DELETE"
  },
  {
    qnNo:17,
    question: "Which operator is used in a WHERE clause to search for a value within a range?",
    options: ["BETWEEN", "IN", "LIKE", "EXISTS"],
    answer: "BETWEEN"
    },
    {
      qnNo:18,
    question: "Which MySQL command is used to rename a table?",
    options: ["RENAME TABLE", "ALTER TABLE", "MODIFY TABLE", "CHANGE TABLE"],
    answer: "RENAME TABLE"
    },
    {
      qnNo:19,
    question: "Which MySQL function is used to concatenate two or more strings?",
    options: ["CONCAT", "JOIN", "MERGE", "UNION"],
    answer: "CONCAT"
    },
    {
      qnNo:20,
    question: "Which operator is used in a WHERE clause to search for values that match a list?",
    options: ["IN", "BETWEEN", "LIKE", "EXISTS"],
    answer: "IN"
    }
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
