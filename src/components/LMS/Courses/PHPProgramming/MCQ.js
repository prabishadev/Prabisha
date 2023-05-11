import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./PHPStyledComponents"

const questions = [
  {
    qnNo:1,
    question: "What does PHP stand for?",
    options: ["Personal Home Page", "Hypertext Preprocessor", "Private Hosting Provider", "Public Hosted Platform"],
    answer: "Hypertext Preprocessor"
  },
  {
    qnNo:2,
    question: "Which of the following is NOT a scalar data type in PHP?",
    options: ["string", "integer", "boolean", "array"],
    answer: "array"
  },
  {
    qnNo:3,
    question: "Which PHP function is used to open a file?",
    options: ["file_open()", "fopen()", "open_file()", "file()",],
    answer: "fopen()"
  },
  {
    qnNo:4,
    question: "What is the default scope in PHP?",
    options: ["global scope", "local scope", "class scope", "function scope"],
    answer: "global scope"
  },
  {
    qnNo:5,
    question: "What is the syntax for a for loop in PHP?",
    options: ["for ($i = 0; $i < 10; $i++)", "for ($i = 0, $i < 10, $i++)", "for ($i < 10; $i++;)", "for ($i = 0; $i++; $i < 10)"],
    answer: "for ($i = 0; $i < 10; $i++)"
  },
  {
    qnNo:6,
    question: "What does the 'echo' statement do in PHP?",
    options: ["Outputs data to the screen", "Returns a value from a function", "Assigns a value to a variable", "Declares a constant"],
    answer: "Outputs data to the screen"
  },
  {
    qnNo:7,
    question: "Which of the following is used to declare a constant in PHP?",
    options: ["const", "define", "constant", "var"],
    answer: "define"
  },
  {
    qnNo:8,
    question: "What is the difference between '==' and '===' in PHP?",
    options: ["'==' compares values and types, while '===' compares only values", "'==' compares only values, while '===' compares values and types", "'==' and '===' are the same thing", "There is no such thing as '===' in PHP"],
    answer: "'==' compares only values, while '===' compares values and types"
  },
  {
    qnNo:9,
    question: "What is the output of the following code? $x = 5; echo ++$x;",
    options: ["4", "6", "5", "Error"],
    answer: "6"
  },
  {
    qnNo:10,
    question: "What is the output of the following code? $x = '5'; echo $x + 2;",
    options: ["52", "7", "5", "Error"],
    answer: "7"
  },
  {
    qnNo:11,
    question: "Which of the following is used to get information about a variable in PHP?",
    options: ["var_dump()", "echo()", "print()", "return()"],
    answer: "var_dump()"
  },
  {
    qnNo:12,
    question: "What is the correct syntax for a switch statement in PHP?",
    options: ["switch (condition) { case 1: code; break; }", "switch (condition) { case 1: code; default: code; }", "switch (condition) { case 1: code; case 2: code; }", "switch (condition) { default: code; }"],
    answer: `switch (condition) {question: "What is the output of the following code? $a = 5; $b = 10; echo ($a > $b) ? 'Yes' : 'No';`,
    },
    {
      qnNo:13,
    question: "Which of the following is used to get the length of a string in PHP?",
    options: ["str_length()", "length()", "count()", "strlen()"],
    answer: "strlen()"
    },
    {
      qnNo:14,
    question: "What is the output of the following code? $array = ['a', 'b', 'c']; echo end($array);",
    options: ["a", "b", "c", "Error"],
    answer: "c"
    },
    {
      qnNo:15,
    question: "Which of the following is used to remove whitespace from the beginning and end of a string in PHP?",
    options: ["trim()", "strip()", "remove_whitespace()", "clear()"],
    answer: "trim()"
    },
    {
      qnNo:16,
    question: "What is the output of the following code? $array = ['a' => 1, 'b' => 2, 'c' => 3]; echo array_sum($array);",
    options: ["1", "2", "3", "6"],
    answer: "6"
    },
    {
      qnNo:17,
    question: "Which of the following is used to sort an array in ascending order according to its values in PHP?",
    options: ["sort()", "rsort()", "asort()", "ksort()"],
    answer: "asort()"
    },
    {
      qnNo:18,
    question: "What is the output of the following code? $array = ['a', 'b', 'c']; $string = implode(', ', $array); echo $string;",
    options: ["a, b, c", "[a, b, c]", "(a, b, c)", "Error"],
    answer: "a, b, c"
    },
    {
      qnNo:19,
    question: "Which of the following is used to check if a variable is an array in PHP?",
    options: ["is_array()", "array_check()", "check_array()", "isArray()"],
    answer: "is_array()"
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
