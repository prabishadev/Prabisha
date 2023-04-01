import React, { useState } from "react";

import {
  CourseContentContainer,
  CourseImage,
  ConceptTitle,
  ConceptDescription,
  DownloadCertificate,
  BtnContainer,
  CountContainer,
  Score,
  QNSCount,
  ExamPassed,
  Option,
  StartExam,
  Certificate,
  FailedMessage,
  ExamContainer,
  Question,
  ExamTitle,
} from "./JSStyledComponents";
const questions = [
  {
    question:
      "What is the output of the following code? console.log(2 + 3 * 4);",
    options: ["20", "14", "17", "23"],
    answer: "14",
  },
  {
    question: "What is the correct way to declare a variable in JavaScript?",
    options: ["var name;", "let name = '';", "name = '';", "const name = '';"],
    answer: "let name = '';",
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["string", "integer", "boolean", "undefined"],
    answer: "integer",
  },
  {
    question: "Which of the following is NOT a JavaScript comparison operator?",
    options: ["==", "===", "<>", ">="],
    answer: "<>",
  },
  {
    question: "What is the output of the following code? console.log('5' + 2);",
    options: ["7", "52", "5+2", "undefined"],
    answer: "52",
  },
  {
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
    question:
      "What is the output of the following code? console.log(typeof true);",
    options: ["string", "number", "boolean", "object"],
    answer: "boolean",
  },
  {
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
    question:
      "What is the output of the following code? console.log(2 == '2');",
    options: ["true", "false", "undefined", "NaN"],
    answer: "true",
  },
  {
    question: "Which of the following is NOT a JavaScript logical operator?",
    options: ["&&", "||", "!", "??"],
    answer: "??",
  },
  {
    question:
      "What is the output of the following code? console.log(typeof [1, 2, 3]);",
    options: ["object", "array", "number", "undefined"],
    answer: "object",
  },
  {
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
    question:
      "What is the output of the following code? console.log('hello'.toUpperCase());",
    options: ["HELLO", "hello", "Hello", "HellO"],
    answer: "HELLO",
  },
  {
    question:
      "What is the output of the following code? console.log(Math.floor(4.7));",
    options: ["4", "5", "4.7", "undefined"],
    answer: "4",
  },
  {
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
    question: "What is the output of the following code? console.log(10 % 3);",
    options: ["3", "1", "7", "10/3"],
    answer: "1",
  },
  {
    question: "Which of the following is NOT a JavaScript loop?",
    options: ["for", "while", "if", "do...while"],
    answer: "if",
  },
  {
    question:
      "What is the output of the following code? console.log(typeof null);",
    options: ["object", "null", "undefined", "number"],
    answer: "object",
  },
  {
    question:
      "Which of the following is the correct way to write a JavaScript array?",
    options: ["[1, 2, 3,]", "{'1', '2', '3'}", "{1; 2; 3}", "['1', '2', '3']"],
    answer: "['1', '2', '3']",
  },
];

const JavascriptCourse = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showCertificate, setShowCertificate] = useState(false);
  const [showDocument, setShowDocument] = useState(true);
  const [showExam, setShowExam] = useState(false);
  const [showFailed, setExamStatus] = useState("");

  const handleStartExam = () => {
    setShowDocument(false);
    setShowExam(true);
  };

  const handleAnswer = (answer) => {
    const isCorrect = answer === questions[currentQuestion].answer;
    if (isCorrect) {
      setScore(score + 5);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      if (score >= 80) {
        setShowCertificate(true);
      } else {
        setExamStatus("You have failed the Exam! Try again after some time");
      }
    }
  };

  return (
    <React.Fragment>
      <CourseContentContainer>
        {showDocument && (
          <>
            <CourseImage
              src="https://radicalhub.com/wp-content/uploads/2018/07/javascript.jpg"
              alt="HTML"
            />

            <ConceptTitle>Javascript</ConceptTitle>
            <ConceptDescription>
              <embed
                src="https://www.evl.uic.edu/luc/bvis546/Essential_Javascript_--_A_Javascript_Tutorial.pdf"
                type="application/pdf"
                width="100%"
                height="600px"
              />
            </ConceptDescription>
            <BtnContainer>
              <StartExam onClick={handleStartExam}>Start Exam</StartExam>
            </BtnContainer>
          </>
        )}
        {showExam && (
          <ExamContainer>
            <ExamTitle>Welcome to the Exam!</ExamTitle>
            <CountContainer>
              <Score> Score : {score}</Score>
              <QNSCount>Question: {currentQuestion + 1}/20</QNSCount>
            </CountContainer>

            <Question>
              {currentQuestion + 1}. {questions[currentQuestion].question}
            </Question>
            {questions[currentQuestion].options.map((option) => (
              <Option key={option} onClick={() => handleAnswer(option)}>
                {option}
              </Option>
            ))}
            {showCertificate && (
              <div>
                <ExamPassed>Congratulations, you passed the exam!</ExamPassed>
                <DownloadCertificate>
                  Download your certificate:
                </DownloadCertificate>
                <a
                  href="https://cdn.hackr.io/uploads/posts/large/1611759327rxrjyLWZoo.png"
                  download
                >
                  <Certificate
                    src="https://cdn.hackr.io/uploads/posts/large/1611759327rxrjyLWZoo.png"
                    alt="Certificate"
                  />
                </a>
              </div>
            )}
            <FailedMessage>{showFailed}</FailedMessage>
            <StartExam>Back</StartExam>
          </ExamContainer>
        )}
      </CourseContentContainer>
    </React.Fragment>
  );
};

export default JavascriptCourse;
