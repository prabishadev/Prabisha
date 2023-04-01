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
} from "./HTMLStyledComponents";
const questions = [
  {
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
    question: "Which of the following is an example of an HTML tag?",
    options: ["JavaScript", "<p>", "Python", "CSS"],
    answer: "<p>",
  },
  {
    question: "Which of the following is used to mark the beginning of a tag?",
    options: ["Opening tag", "Closing tag", "Attribute", "None of the above"],
    answer: "Opening tag",
  },
  {
    question: "Which of the following is used to mark the end of a tag?",
    options: ["Opening tag", "Closing tag", "Attribute", "None of the above"],
    answer: "Closing tag",
  },
  {
    question: "Which of the following is an example of an HTML attribute?",
    options: ["<h1>", "<p>", 'class="example"', "<img>"],
    answer: 'class="example"',
  },
  {
    question: "Which of the following HTML tags is used to create a paragraph?",
    options: ["<img>", "<a>", "<p>", "<div>"],
    answer: "<p>",
  },
  {
    question:
      "Which of the following HTML tags is used to add an image to a web page?",
    options: ["<img>", "<a>", "<p>", "<div>"],
    answer: "<img>",
  },
  {
    question:
      "Which of the following HTML attributes is used to specify the URL of an image?",
    options: ["src", "href", "class", "id"],
    answer: "src",
  },
  {
    question: "Which of the following HTML tags is used to create a link?",
    options: ["<img>", "<a>", "<p>", "<div>"],
    answer: "<a>",
  },
  {
    question:
      "Which of the following HTML attributes is used to specify the URL of the page being linked to?",
    options: ["src", "href", "class", "id"],
    answer: "href",
  },
  {
    question:
      "Which of the following HTML tags is used to create an ordered list?",
    options: ["<ol>", "<ul>", "<li>", "<dl>"],
    answer: "<ol>",
  },
  {
    question:
      "Which of the following HTML tags is used to create an unordered list?",
    options: ["<ol>", "<ul>", "<li>", "<dl>"],
    answer: "<ul>",
  },
  {
    question: "Which of the following HTML tags is used to create a table?",
    options: ["<table>", "<tr>", "<td>", "<th>"],
    answer: "<table>",
  },
  {
    question: "Which of the following HTML tags is used to create a table row?",
    options: ["<table>", "<tr>", "<td>", "<th>"],
    answer: "<tr>",
  },
  {
    question:
      "Which of the following HTML tags is used to create a table cell?",
    options: ["<table>", "<tr>", "<td>", "<th>"],
    answer: "<td>",
  },
  {
    question: "Which of the following HTML tags is used to create a form?",
    options: ["<form>", "<input>", "<button>", "<label>"],
    answer: "<form>",
  },
  {
    question:
      "Which of the following HTML input types is used for text fields?",
    options: ["text", "password", "radio", "checkbox"],
    answer: "text",
  },
  {
    question:
      "Which of the following HTML input types is used for radio buttons?",
    options: ["text", "password", "radio", "checkbox"],
    answer: "radio",
  },
  {
    question: "What is the latest version of HTML?",
    options: ["HTML4", "HTML5", "HTML6", "HTML7"],
    answer: "HTML5",
  },
];

// const htmlDescription =
//   `HTML (Hypertext Markup Language) is the standard markup language used to create web pages. HTML describes the structure of a web page and provides a way to add text, images, videos, links, and other elements to a web page. An HTML document consists of two main parts, the <head> section and the <body> section. The <head> section contains information about the document, such as the document title and metadata. The <body> section contains the actual content of the document, such as text, images, videos, and links. HTML uses tags to structure content on a web page. Tags are enclosed in angle brackets, such as <tag>. The opening tag is used to mark the beginning of a tag, and the closing tag is used to mark the end of a tag. For example, the <p> tag is used to create a paragraph, and the opening tag is <p> and the closing tag is </p>. HTML tags can have attributes that provide additional information about the tag. Attributes are added to the opening tag, and they are usually in the form of name-value pairs. For example, the <img> tag is used to add an image to a web page, and it has an attribute called src that specifies the URL of the image. HTML links are used to connect one web page to another. Links are created using the <a> tag, and the href attribute is used to specify the URL of the page being linked to. HTML supports two types of lists, ordered lists (<ol>) and unordered lists (<ul>). Ordered lists are used when the items on the list need to be numbered, while unordered lists are used when the items on the list do not need to be numbered. HTML tables are used to display data in a tabular format. Tables are created using the <table> tag, and rows and columns are created using the <tr> and <td> tags, respectively. HTML forms are used to collect user input. Forms are created using the <form> tag, and input fields are added using various types of input tags, such as ${<input type="text">} for text fields and ${<input type="radio">} for radio buttons. HTML5 is the latest version of HTML, and it introduces several new features, such as support for video and audio playback, support for responsive web design, and support for semantic tags.`;
// console.log(htmlDescription);

const HTML = () => {
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
              src="https://i.pinimg.com/736x/4a/63/3c/4a633ce81aa53ed5b207f4350ad44ed8--web-connect-web-browser.jpg"
              alt="HTML"
            />

            <ConceptTitle>HTML Hyper Text MarkUp Language</ConceptTitle>
            <ConceptDescription>
              <embed
                src="http://www.yorku.ca/pkashiya/HTML_Basics.pdf"
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
                  href="https://cdn.hackr.io/uploads/posts/large/1593522371SMJEdm1kEp.png"
                  download
                >
                  <Certificate
                    src="https://cdn.hackr.io/uploads/posts/large/1593522371SMJEdm1kEp.png"
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

export default HTML;
