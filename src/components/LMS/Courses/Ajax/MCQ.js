import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./AStyledComponents"

const questions = [
    {
      qnNo:1,
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
      qnNo:2,
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
      qnNo:3,
      question: "Which JavaScript method is commonly used to make AJAX requests?",
      options: ["XMLHttpRequest", "fetch", "jQuery.ajax", "All of the above"],
      answer: "All of the above",
    },
    {
      qnNo:4,
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
      qnNo:5,
      question: "What is the HTTP status code for a successful AJAX request?",
      options: ["200", "404", "500", "302"],
      answer: "200",
    },
    {
      qnNo:6,
      question:
        "What is the jQuery shorthand method for making an AJAX GET request?",
      options: ["$.get()", "$.post()", "$.ajax()", "$.load()"],
      answer: "$.get()",
    },
    {
      qnNo:7,
      question:
        "What is the jQuery shorthand method for making an AJAX POST request?",
      options: ["$.post()", "$.get()", "$.ajax()", "$.load()"],
      answer: "$.post()",
    },
    {
      qnNo:8,
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
      qnNo:9,
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
      qnNo:10,
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
      qnNo:11,
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
      qnNo:12,
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
      qnNo:13,
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
      qnNo:14,
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
      qnNo:15,
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
      qnNo:16,
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
      qnNo:17,
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
      qnNo:18,
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
      qnNo:19,
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
      qnNo:20,
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
