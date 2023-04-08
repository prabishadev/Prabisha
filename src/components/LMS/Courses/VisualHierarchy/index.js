import React, { useState } from "react";
import Header from "../../Header";

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
  LinkItem,
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
} from "./UXStyledComponents";

const questions = [
  {
    question: "What is visual hierarchy?",
    choices: [
      "The arrangement of visual elements on a page to create a clear and organized structure",
      "The use of bright colors to create a vibrant and engaging design",
      "The placement of images to create a balanced and harmonious composition",
      "The use of typography to convey a specific message",
    ],
    answer:
      "The arrangement of visual elements on a page to create a clear and organized structure",
  },
  {
    question: "What is the purpose of visual hierarchy in design?",
    choices: [
      "To guide the user's attention and create a clear and organized layout",
      "To make the design look aesthetically pleasing",
      "To incorporate the latest design trends",
      "To showcase the designer's creativity",
    ],
    answer:
      "To guide the user's attention and create a clear and organized layout",
  },
  {
    question: "What is the most important element of visual hierarchy?",
    choices: ["Color", "Size", "Typography", "Spacing"],
    answer: "Size",
  },
  {
    question: "What is the purpose of using a grid in visual hierarchy?",
    choices: [
      "To create a structured layout and help align visual elements",
      "To make the design look more interesting",
      "To incorporate multiple design styles",
      "To showcase the designer's versatility",
    ],
    answer: "To create a structured layout and help align visual elements",
  },
  {
    question: "What is the purpose of contrast in visual hierarchy?",
    choices: [
      "To create a clear visual distinction between different elements",
      "To make the design look more interesting",
      "To incorporate multiple design styles",
      "To showcase the designer's creativity",
    ],
    answer: "To create a clear visual distinction between different elements",
  },
  {
    question: "What is the purpose of using whitespace in visual hierarchy?",
    choices: [
      "To create a sense of balance and prevent overcrowding",
      "To make the design look more interesting",
      "To incorporate multiple design styles",
      "To showcase the designer's creativity",
    ],
    answer: "To create a sense of balance and prevent overcrowding",
  },
  {
    question: "What is the purpose of alignment in visual hierarchy?",
    choices: [
      "To create a clear and organized layout",
      "To make the design look more interesting",
      "To incorporate multiple design styles",
      "To showcase the designer's creativity",
    ],
    answer: "To create a clear and organized layout",
  },
  {
    question: "What is the purpose of repetition in visual hierarchy?",
    choices: [
      "To create a sense of unity and reinforce visual elements",
      "To make the design look more interesting",
      "To incorporate multiple design styles",
      "To showcase the designer's creativity",
    ],
    answer: "To create a sense of unity and reinforce visual elements",
  },
  {
    question:
      "What is the purpose of hierarchy of information in visual hierarchy?",
    choices: [
      "To prioritize and organize information based on its importance",
      "To make the design look more interesting",
      "To incorporate multiple design styles",
      "To showcase the designer's creativity",
    ],
    answer: "To prioritize and organize information based on its importance",
  },
  {
    question: "What is the purpose of using a focal point in visual hierarchy?",
    choices: [
      "To guide the user's attention to a specific area",
      "To make the design look more interesting",
      "To incorporate multiple design styles",
      "To showcase the designer's creativity",
    ],
    answer: "To guide the user's attention to a specific area",
  },
  {
    question:
      "What is the purpose of using a color palette in visual hierarchy?",
    choices: [
      "To create a harmonious and consistent design",
      "To make the design look more interesting",
      "To incorporate multiple design styles",
      "To showcase the designer's creativity",
    ],
    answer: "To create a harmonious and consistent design",
  },
  {
    question: "What is the purpose of using typography in visual hierarchy?",
    choices: [
      "To create contrast and emphasize certain elements",
      "To make the design look more interesting",
      "To incorporate multiple design styles",
      "To showcase the designer's creativity",
    ],
    answer: "To create contrast and emphasize certain elements",
  },
  {
    question: "What is the purpose of using imagery in visual hierarchy?",
    choices: [
      "To create visual interest and reinforce messaging",
      "To make the design look more interesting",
      "To incorporate multiple design styles",
      "To showcase the designer's creativity",
    ],
    answer: "To create visual interest and reinforce messaging",
  },
  {
    question: "What is the purpose of using icons in visual hierarchy?",
    choices: [
      "To create a clear visual representation of an action or concept",
      "To make the design look more interesting",
      "To incorporate multiple design styles",
      "To showcase the designer's creativity",
    ],
    answer: "To create a clear visual representation of an action or concept",
  },
  {
    question:
      "What is the purpose of using negative space in visual hierarchy?",
    choices: [
      "To create a sense of balance and allow visual elements to breathe",
      "To make the design look more interesting",
      "To incorporate multiple design styles",
      "To showcase the designer's creativity",
    ],
    answer: "To create a sense of balance and allow visual elements to breathe",
  },
  {
    question:
      "What is the purpose of using a visual hierarchy in user experience design?",
    choices: [
      "To guide the user's attention and create a clear and intuitive interface",
      "To make the design look more interesting",
      "To incorporate multiple design styles",
      "To showcase the designer's creativity",
    ],
    answer:
      "To guide the user's attention and create a clear and intuitive interface",
  },
  {
    question:
      "What is the purpose of using a visual hierarchy in graphic design?",
    choices: [
      "To create a clear and effective message through visual communication",
      "To make the design look more interesting",
      "To incorporate multiple design styles",
      "To showcase the designer's creativity",
    ],
    answer:
      "To create a clear and effective message through visual communication",
  },
  {
    question: "What is the purpose of using a visual hierarchy in web design?",
    choices: [
      "To create a clear and organized layout for the user to navigate",
      "To make the design look more interesting",
      "To incorporate multiple design styles",
      "To showcase the designer's creativity",
    ],
    answer: "To create a clear and organized layout for the user to navigate",
  },
  {
    question: "What is the purpose of visual hierarchy?",
    choices: [
      "To make the design look more interesting",
      "To create a sense of order and structure",
      "To incorporate as many design elements as possible",
      "To make the design stand out from other designs",
    ],
    answer: "To create a sense of order and structure",
  },
  {
    question: "What are some common visual hierarchy techniques?",
    choices: [
      "Contrast, proximity, alignment, and repetition",
      "Symmetry, gradient, transparency, and texture",
      "Shadow, reflection, animation, and blur",
      "Saturation, hue, value, and color temperature",
    ],
    answer: "Contrast, proximity, alignment, and repetition",
  },
];

const UIDesign = () => {
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
              src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/06/Visual-Hierarchy-Featured-Image.jpg"
              alt="RWD"
            />

            <ConceptTitle>Visual Hierarchy</ConceptTitle>
            <ConceptDescription>
              <embed
                src="https://laithaljunaidy.com/books/assets/files/uxpin_the_building_blocks_of_visual_hierarchy.pdf"
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
            {questions[currentQuestion].choices.map((option) => (
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
                  href="https://images.besttemplates.com/3698/Custom-made-Certificate-Design-for-Completion-of-Course.jpg"
                  download
                >
                  <Certificate
                    src="https://images.besttemplates.com/3698/Custom-made-Certificate-Design-for-Completion-of-Course.jpg"
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

export default VisualHierarchy;
