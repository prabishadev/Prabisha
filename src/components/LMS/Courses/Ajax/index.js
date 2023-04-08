import React, { useState } from "react";

import Header from "../../Header";

import {
  CourseContentContainer,
  CourseImage,
  ConceptTitle,
  ConceptDescription,
  LinkItem,
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
  HrLine,
  Arrow
} from "./AStyledComponents";
const questions = [
  {
    question: "What does AJAX stand for?",
    options: [
      "Asynchronous JavaScript and XML",
      "Advanced JavaScript and XHTML",
      "Asynchronous jQuery and XML",
      "Active JavaScript and XHTML",
    ],
    answer: "Asynchronous JavaScript and XML",
  },
  {
    question: "What is the purpose of AJAX?",
    options: [
      "To update parts of a web page without reloading the entire page",
      "To improve website security",
      "To make web pages load faster",
      "To allow users to interact with web pages using voice commands",
    ],
    answer: "To update parts of a web page without reloading the entire page",
  },
  {
    question: "Which JavaScript method is commonly used to make AJAX requests?",
    options: ["XMLHttpRequest", "fetch", "jQuery.ajax", "All of the above"],
    answer: "All of the above",
  },
  {
    question:
      "What is the difference between synchronous and asynchronous AJAX requests?",
    options: [
      "Synchronous requests block the browser while waiting for a response, while asynchronous requests do not",
      "Asynchronous requests block the browser while waiting for a response, while synchronous requests do not",
      "There is no difference",
      "Synchronous requests are faster than asynchronous requests",
    ],
    answer:
      "Synchronous requests block the browser while waiting for a response, while asynchronous requests do not",
  },
  {
    question: "What is the HTTP status code for a successful AJAX request?",
    options: ["200", "404", "500", "302"],
    answer: "200",
  },
  {
    question:
      "What is the jQuery shorthand method for making an AJAX GET request?",
    options: ["$.get()", "$.post()", "$.ajax()", "$.load()"],
    answer: "$.get()",
  },
  {
    question:
      "What is the jQuery shorthand method for making an AJAX POST request?",
    options: ["$.post()", "$.get()", "$.ajax()", "$.load()"],
    answer: "$.post()",
  },
  {
    question: "What is the difference between GET and POST requests?",
    options: [
      "GET requests are used to retrieve data from a server, while POST requests are used to send data to a server",
      "POST requests are used to retrieve data from a server, while GET requests are used to send data to a server",
      "There is no difference",
      "GET requests are more secure than POST requests",
    ],
    answer:
      "GET requests are used to retrieve data from a server, while POST requests are used to send data to a server",
  },
  {
    question: "What is JSON?",
    options: [
      "JavaScript Object Notation",
      "JavaScript Online Network",
      "JavaScript Object Navigator",
      "None of the above",
    ],
    answer: "JavaScript Object Notation",
  },
  {
    question: "What is the purpose of the XMLHttpRequest method?",
    options: [
      "To send an AJAX request and receive a response",
      "To manipulate the DOM",
      "To validate user input",
      "To load external JavaScript files",
    ],
    answer: "To send an AJAX request and receive a response",
  },
  {
    question: "What is the difference between JSON and XML?",
    options: [
      "JSON is more lightweight and easier to parse than XML",
      "XML is more lightweight and easier to parse than JSON",
      "There is no difference",
      "JSON is a programming language, while XML is a markup language",
    ],
    answer: "JSON is more lightweight and easier to parse than XML",
  },
  {
    question: "What is a callback function in the context of AJAX?",
    options: [
      "To handle the response from an AJAX request",
      "To define a function that will be called when an AJAX request is made",
      "To send data to the server using an AJAX request",
    ],
    answer:
      "To define a function that will be called when an AJAX request is made",
  },
  {
    question:
      "What is the purpose of the readyState property of the XMLHttpRequest object?",
    options: [
      "To indicate the current state of the AJAX request",
      "To specify the type of AJAX request to be made",
      "To define the data to be sent in an AJAX request",
      "To handle errors that occur during an AJAX request",
    ],
    answer: "To indicate the current state of the AJAX request",
  },
  {
    question:
      "What is the purpose of the status property of the XMLHttpRequest object?",
    options: [
      "To indicate the HTTP status code of the response",
      "To specify the HTTP method to be used in an AJAX request",
      "To handle errors that occur during an AJAX request",
      "To define the data to be sent in an AJAX request",
    ],
    answer: "To indicate the HTTP status code of the response",
  },
  {
    question:
      "What is the purpose of the responseType property of the XMLHttpRequest object?",
    options: [
      "To specify the type of data that is expected in the response",
      "To specify the type of data that is being sent in the request",
      "To handle errors that occur during an AJAX request",
      "To indicate the HTTP status code of the response",
    ],
    answer: "To specify the type of data that is expected in the response",
  },
  {
    question:
      "What is the purpose of the timeout property of the XMLHttpRequest object?",
    options: [
      "To specify the amount of time in milliseconds that the request should be allowed to take before timing out",
      "To specify the amount of time in milliseconds that the response should be cached",
      "To handle errors that occur during an AJAX request",
      "To indicate the HTTP status code of the response",
    ],
    answer:
      "To specify the amount of time in milliseconds that the request should be allowed to take before timing out",
  },
  {
    question: "What is the purpose of the error function in jQuery AJAX?",
    options: [
      "To handle errors that occur during the AJAX request",
      "To define the data to be sent in the AJAX request",
      "To specify the type of data that is expected in the response",
      "To indicate the HTTP status code of the response",
    ],
    answer: "To handle errors that occur during the AJAX request",
  },
  {
    question: "What is the purpose of the beforeSend function in jQuery AJAX?",
    options: [
      "To add custom headers to the AJAX request",
      "To handle errors that occur during the AJAX request",
      "To specify the type of data that is expected in the response",
      "To define the data to be sent in the AJAX request",
    ],
    answer: "To add custom headers to the AJAX request",
  },
  {
    question: "What is the purpose of the complete function in jQuery AJAX?",
    options: [
      "To handle the response from the AJAX request, regardless of whether it was successful or not",
      "To specify the type of data that is expected in the response",
      "To handle errors that occur during the AJAX request",
      "To define the data to be sent in the AJAX request",
    ],
    answer:
      "To handle the response from the AJAX request, regardless of whether it was successful or not",
  },
  {
    question: "What is the purpose of the jsonp property in jQuery AJAX?",
    options: [
      "To enable cross-domain requests using JSONP",
      "To specify the type of data that is expected in the response",
      "To handle errors that occur during the AJAX request",
      "To define the data to be sent in the AJAX request",
    ],
    answer: "To enable cross-domain requests using JSONP",
  },
];

const Ajax = () => {
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
      <Header />
      <CourseContentContainer>
        {showDocument && (
          <>
            <CourseImage
              src="https://nextbigtechnology.com/wp-content/uploads/2019/11/bCgJKDY.jpg"
              alt="CSS"
            />

            <ConceptTitle>Ajax</ConceptTitle>
            <ConceptDescription>
              <embed
                src="https://www.pvpsiddhartha.ac.in/dep_it/lecture%20notes/DOT/unit5.pdf"
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
            <>
              <LinkItem to="/lms-available"><Arrow/></LinkItem>
            </>
            <CountContainer>
              <Score> Score : {score}</Score>
              <QNSCount>Question: {currentQuestion + 1}/20</QNSCount>
            </CountContainer>

            <Question>
              {currentQuestion + 1}. {questions[currentQuestion].question}
            </Question>
            <HrLine/>
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
            
          </ExamContainer>
        )}
      </CourseContentContainer>
    </React.Fragment>
  );
};

export default Ajax;
