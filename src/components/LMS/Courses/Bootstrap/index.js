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
} from "./BStyledComponents";

const questions = [
  {
    question: "What is Bootstrap?",
    options: [
      "A programming language",
      "A web development framework",
      "A database management system",
      "A server-side scripting language",
    ],
    answer: "A web development framework",
  },
  {
    question: "Who developed Bootstrap?",
    options: ["Google", "Twitter", "Facebook", "Microsoft"],
    answer: "Twitter",
  },
  {
    question:
      "Which version of Bootstrap introduced the Flexbox-based grid system?",
    options: ["Bootstrap 2", "Bootstrap 3", "Bootstrap 4", "Bootstrap 5"],
    answer: "Bootstrap 4",
  },
  {
    question:
      "What is the class name for the primary button color in Bootstrap?",
    options: ["btn-danger", "btn-warning", "btn-success", "btn-primary"],
    answer: "btn-primary",
  },
  {
    question: "Which CSS preprocessor is used by Bootstrap?",
    options: ["Sass", "Less", "Stylus", "PostCSS"],
    answer: "Sass",
  },
  {
    question: "What is the class name for a container in Bootstrap?",
    options: ["container", "wrapper", "box", "content"],
    answer: "container",
  },
  {
    question: "What is the class name for a full-width container in Bootstrap?",
    options: [
      "container-fluid",
      "container-full",
      "container-wide",
      "container-100",
    ],
    answer: "container-fluid",
  },
  {
    question:
      "Which CSS utility class is used for text alignment in Bootstrap?",
    options: ["text-left", "text-right", "text-center", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "What is the class name for a navigation bar in Bootstrap?",
    options: ["navbar", "nav", "menu", "header"],
    answer: "navbar",
  },
  {
    question: "What is the class name for a dropdown menu in Bootstrap?",
    options: ["dropdown-menu", "menu-dropdown", "menu", "dropdown"],
    answer: "dropdown-menu",
  },
  {
    question: "What is the class name for a card in Bootstrap?",
    options: ["card", "box", "container", "panel"],
    answer: "card",
  },
  {
    question: "What is the class name for a carousel in Bootstrap?",
    options: ["carousel", "slider", "slideshow", "gallery"],
    answer: "carousel",
  },
  {
    question: "What is the class name for a modal in Bootstrap?",
    options: ["modal", "popup", "dialog", "window"],
    answer: "modal",
  },
  {
    question: "What is the class name for a tooltip in Bootstrap?",
    options: ["tooltip", "popup", "hint", "info"],
    answer: "tooltip",
  },
  {
    question: "What is the class name for a popover in Bootstrap?",
    options: ["popover", "popup", "hint", "info", "bubble"],
    answer: "popover",
  },
  {
    question: "What is the class name for a badge in Bootstrap?",
    options: ["badge", "tag", "label", "mark"],
    answer: "badge",
  },
  {
    question: "What is the class name for a progress bar in Bootstrap?",
    options: ["progress-bar", "loading-bar", "status-bar", "loader"],
    answer: "progress-bar",
  },
  {
    question: "What is the class name for a form control in Bootstrap?",
    options: ["form-control", "input-field", "text-box", "form-input"],
    answer: "form-control",
  },
  {
    question: "What is the class name for a table in Bootstrap?",
    options: ["table", "grid", "list", "data-table"],
    answer: "table",
  },
  {
    question: "What is the class name for a responsive image in Bootstrap?",
    options: [
      "img-responsive",
      "responsive-img",
      "img-fluid",
      "All of the above",
    ],
    answer: "img-fluid",
  },
];

const Bootstrap = () => {
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
              src="https://www.brcline.com/wp-content/uploads/2016/01/bootstrap-logo.png"
              alt="CSS"
            />

            <ConceptTitle>Bootstrap</ConceptTitle>
            <ConceptDescription>
              <embed
                src="https://cdn.cs50.net/2016/fall/seminars/bootstrap_basics/bootstrap_basics.pdf"
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

export default Bootstrap;
