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
} from "./NStyledComponents";

const questions = [
  {
    question: "What is Node.js?",
    options: [
      "A web browser",
      "A server-side runtime environment",
      "A front-end framework",
      "A programming language",
    ],
    answer: "A server-side runtime environment",
  },
  {
    question: "Who created Node.js?",
    options: ["Ryan Dahl", "Steve Jobs", "Bill Gates", "Mark Zuckerberg"],
    answer: "Ryan Dahl",
  },
  {
    question: "Which programming language is Node.js built on?",
    options: ["JavaScript", "Python", "Java", "C#"],
    answer: "JavaScript",
  },
  {
    question: "What is the package manager used in Node.js?",
    options: ["npm", "yarn", "bower", "composer"],
    answer: "npm",
  },
  {
    question: "Which module is used to create a server in Node.js?",
    options: ["http", "fs", "path", "url"],
    answer: "http",
  },
  {
    question: "Which function is used to include a module in Node.js?",
    options: ["require()", "include()", "import()", "load()"],
    answer: "require()",
  },
  {
    question:
      "Which event is emitted when there is an unhandled exception in Node.js?",
    options: ["error", "exception", "fail", "crash"],
    answer: "error",
  },
  {
    question: "Which method is used to read a file in Node.js?",
    options: [
      "fs.readFile()",
      "fs.writeFile()",
      "fs.createReadStream()",
      "fs.createWriteStream()",
    ],
    answer: "fs.readFile()",
  },
  {
    question: "Which method is used to write to a file in Node.js?",
    options: [
      "fs.writeFile()",
      "fs.readFile()",
      "fs.createWriteStream()",
      "fs.createReadStream()",
    ],
    answer: "fs.writeFile()",
  },
  {
    question: "Which method is used to create a new directory in Node.js?",
    options: ["fs.mkdir()", "fs.rmdir()", "fs.createDir()", "fs.removeDir()"],
    answer: "fs.mkdir()",
  },
  {
    question: "What is a callback function in Node.js?",
    options: [
      "A function that is called when an error occurs",
      "A function that is called when a file is read or written",
      "A function that is called when a server request is received",
      "A function that is called when an asynchronous operation is complete",
    ],
    answer:
      "A function that is called when an asynchronous operation is complete",
  },
  {
    question: "What is a stream in Node.js?",
    options: [
      "A sequence of data made available over time",
      "A way to read and write data in chunks",
      "A type of module used for networking",
      "A method of handling errors",
    ],
    answer: "A way to read and write data in chunks",
  },
  {
    question: "Which module is used to handle file paths in Node.js?",
    options: ["path", "fs", "url", "querystring"],
    answer: "path",
  },
  {
    question: "What is the purpose of the process object in Node.js?",
    options: [
      "To provide information about the current Node.js process",
      "To manage child processes",
      "To handle events related to the operating system",
      "To interact with the file system",
    ],
    answer: "To provide information about the current Node.js process",
  },
  {
    question: "Which method is used to spawn a new child process in Node.js?",
    options: [
      "child_process.spawn()",
      "child_process.fork()",
      "child_process.exec()",
      "child_process.execFile()",
    ],
    answer: "child_process.spawn()",
  },
  {
    question: "Which module is used for network programming in Node.js?",
    options: ["net", "http", "fs", "path"],
    answer: "net",
  },
  {
    question: "Which module is used for handling HTTP requests in Node.js?",
    options: ["http", "net", "fs", "path"],
    answer: "http",
  },
  {
    question: "Which method is used to send an HTTP request in Node.js?",
    options: ["http.request()", "http.get()", "http.post()", "http.send()"],
    answer: "http.request()",
  },
  {
    question: "Which module is used for working with query strings in Node.js?",
    options: ["querystring", "url", "path", "fs"],
    answer: "querystring",
  },
  {
    question: "Which method is used to parse a query string in Node.js?",
    options: [
      "querystring.parse()",
      "querystring.stringify()",
      "url.parse()",
      "url.format()",
    ],
    answer: "querystring.parse()",
  },
];

const Nodejs = () => {
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
              src="https://blog.mobcoder.com/wp-content/uploads/2019/12/node-js.png"
              alt="CSS"
            />

            <ConceptTitle>Node.js</ConceptTitle>
            <ConceptDescription>
              <embed
                src="https://riptutorial.com/Download/node-js.pdf"
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
                  href="http://constructs.stampede-design.com/wp-content/uploads/2014/10/css3.jpg"
                  download
                >
                  <Certificate
                    src="http://constructs.stampede-design.com/wp-content/uploads/2014/10/css3.jpg"
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

export default Nodejs;
