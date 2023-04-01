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
} from "./CSSStyledComponents";
const questions = [
  {
    question: "Which of the following is NOT a valid CSS selector?",
    options: ["#elementID", ".className", "elementName", "*"],
    answer: "elementName",
  },
  {
    question:
      "Which property is used to set the background color of an element in CSS?",
    options: ["color", "background-color", "font-color", "background"],
    answer: "background-color",
  },
  {
    question:
      "Which CSS property is used to create rounded corners on an element?",
    options: ["border-radius", "corner-radius", "border-style", "padding"],
    answer: "border-radius",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Colorful Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which of the following is NOT a CSS box model property?",
    options: ["padding", "margin", "border", "spacing"],
    answer: "spacing",
  },
  {
    question:
      "Which of the following is the correct syntax for setting a font family in CSS?",
    options: [
      "font-family: Arial;",
      "font-family = Arial;",
      "font-family: 'Arial';",
      "font-family: Arial",
    ],
    answer: "font-family: 'Arial';",
  },
  {
    question: "Which CSS property is used to set the font size?",
    options: ["font-size", "font-style", "font-weight", "text-size"],
    answer: "font-size",
  },
  {
    question: "Which CSS property is used to create columns in a web page?",
    options: ["column-width", "column-count", "column-size", "column-layout"],
    answer: "column-count",
  },
  {
    question: "Which of the following is NOT a CSS positioning property?",
    options: ["top", "right", "bottom", "center"],
    answer: "center",
  },
  {
    question:
      "Which CSS property is used to control the spacing between lines of text?",
    options: ["line-height", "text-spacing", "font-spacing", "letter-spacing"],
    answer: "line-height",
  },
  {
    question:
      "Which CSS property is used to specify the display behavior of an element?",
    options: ["display", "visibility", "opacity", "float"],
    answer: "display",
  },
  {
    question: "Which CSS property is used to set the width of an element?",
    options: ["width", "size", "length", "dimension"],
    answer: "width",
  },
  {
    question: "Which of the following is NOT a valid CSS unit of measurement?",
    options: ["pixels", "points", "em", "millimeters"],
    answer: "points",
  },
  {
    question:
      "Which CSS property is used to create a drop shadow effect on an element?",
    options: ["box-shadow", "text-shadow", "shadow-effect", "element-shadow"],
    answer: "box-shadow",
  },
  {
    question: "Which CSS property is used to align text within an element?",
    options: ["text-align", "align-text", "text-justify", "justify-text"],
    answer: "text-align",
  },
  {
    question:
      "Which CSS property is used to set the background image of an element?",
    options: [
      "background-image",
      "image-background",
      "background-url",
      "url-background",
    ],
    answer: "background-image",
  },
  {
    question:
      "Which CSS property is used to create a border around an element?",
    options: ["border", "outline", "border-style", "border-color"],
    answer: "border",
  },
  {
    question: "Which of the following is a CSS pseudo-class?",
    options: [":hover", "#active", ".selected", "all of the above"],
    answer: ":hover",
  },
  {
    question: "Which CSS property is used to set the height of an element?",
    options: ["height", "element-height", "size", "dimension"],
    answer: "height",
  },
];

// const htmlDescription =
//   `HTML (Hypertext Markup Language) is the standard markup language used to create web pages. HTML describes the structure of a web page and provides a way to add text, images, videos, links, and other elements to a web page. An HTML document consists of two main parts, the <head> section and the <body> section. The <head> section contains information about the document, such as the document title and metadata. The <body> section contains the actual content of the document, such as text, images, videos, and links. HTML uses tags to structure content on a web page. Tags are enclosed in angle brackets, such as <tag>. The opening tag is used to mark the beginning of a tag, and the closing tag is used to mark the end of a tag. For example, the <p> tag is used to create a paragraph, and the opening tag is <p> and the closing tag is </p>. HTML tags can have attributes that provide additional information about the tag. Attributes are added to the opening tag, and they are usually in the form of name-value pairs. For example, the <img> tag is used to add an image to a web page, and it has an attribute called src that specifies the URL of the image. HTML links are used to connect one web page to another. Links are created using the <a> tag, and the href attribute is used to specify the URL of the page being linked to. HTML supports two types of lists, ordered lists (<ol>) and unordered lists (<ul>). Ordered lists are used when the items on the list need to be numbered, while unordered lists are used when the items on the list do not need to be numbered. HTML tables are used to display data in a tabular format. Tables are created using the <table> tag, and rows and columns are created using the <tr> and <td> tags, respectively. HTML forms are used to collect user input. Forms are created using the <form> tag, and input fields are added using various types of input tags, such as ${<input type="text">} for text fields and ${<input type="radio">} for radio buttons. HTML5 is the latest version of HTML, and it introduces several new features, such as support for video and audio playback, support for responsive web design, and support for semantic tags.`;
// console.log(htmlDescription);

const CSS = () => {
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
              src="https://1001tricks.com/wp-content/uploads/2011/05/css3-scaled.jpg"
              alt="CSS"
            />

            <ConceptTitle>CSS Cascading Style Sheets</ConceptTitle>
            <ConceptDescription>
              <embed
                src="https://www.cssbasics.com/full.pdf"
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

export default CSS;
