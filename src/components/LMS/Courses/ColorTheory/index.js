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
  LinkItem,
  QNSCount,
  ExamPassed,
  Option,
  StartExam,
  Certificate,
  FailedMessage,
  ExamContainer,
  Question,
  ExamTitle,
  Arrow,
  HrLine
} from "./CTStyledComponents";

const questions = [
  {
    question: "What is the color of the complementary of blue?",
    options: ["Red", "Green", "Yellow", "Orange"],
    answer: "Orange",
  },
  {
    question: "What color represents warmth and energy?",
    options: ["Green", "Blue", "Yellow", "Purple"],
    answer: "Yellow",
  },
  {
    question: "What is the color of royalty?",
    options: ["Red", "Blue", "Green", "Purple"],
    answer: "Purple",
  },
  {
    question: "What is the color of happiness and joy?",
    options: ["Green", "Blue", "Yellow", "Purple"],
    answer: "Yellow",
  },
  {
    question: "What is the color of nature and growth?",
    options: ["Green", "Blue", "Yellow", "Purple"],
    answer: "Green",
  },
  {
    question: "What is the color of danger and warning?",
    options: ["Red", "Green", "Yellow", "Purple"],
    answer: "Red",
  },
  {
    question: "What is the color of calmness and tranquility?",
    options: ["Green", "Blue", "Yellow", "Purple"],
    answer: "Blue",
  },
  {
    question: "What is the color of passion and love?",
    options: ["Red", "Green", "Yellow", "Purple"],
    answer: "Red",
  },
  {
    question: "What is the color of intelligence and wisdom?",
    options: ["Green", "Blue", "Yellow", "Purple"],
    answer: "Blue",
  },
  {
    question: "What color represents neutrality and balance?",
    options: ["Gray", "Black", "White", "Brown"],
    answer: "Gray",
  },
  {
    question: "What is the color of envy and jealousy?",
    options: ["Green", "Blue", "Yellow", "Purple"],
    answer: "Green",
  },
  {
    question: "What is the color of purity and innocence?",
    options: ["White", "Black", "Gray", "Brown"],
    answer: "White",
  },
  {
    question: "What color represents danger and caution?",
    options: ["Black", "Yellow", "Red", "Green"],
    answer: "Yellow",
  },
  {
    question: "What color represents sadness and melancholy?",
    options: ["Green", "Blue", "Yellow", "Purple"],
    answer: "Blue",
  },
  {
    question: "What is the color of luxury and sophistication?",
    options: ["Green", "Blue", "Yellow", "Purple"],
    answer: "Purple",
  },
  {
    question: "What color represents power and authority?",
    options: ["Red", "Green", "Yellow", "Blue"],
    answer: "Blue",
  },
  {
    question: "What is the color of femininity and romance?",
    options: ["Red", "Green", "Yellow", "Pink"],
    answer: "Pink",
  },
  {
    question: "What is the color of masculinity and strength?",
    options: ["Red", "Green", "Yellow", "Blue"],
    answer: "Blue",
  },
  {
    question: "What color represents autumn and harvest?",
    options: ["Red", "Green", "Yellow", "Orange"],
    answer: "Orange",
  },
  {
    question: "What color represents the sun and energy?",
    options: ["Red", "Green", "Yellow", "Blue"],
    answer: "Yellow",
  },
];

const ColorTheory = () => {
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
              src="https://i.pinimg.com/originals/4a/e6/b4/4ae6b44fd919d86efd8a05b7d34a09b5.png"
              alt="CSS"
            />

            <ConceptTitle>Color Theory</ConceptTitle>
            <ConceptDescription>
              <embed
                src="https://beinspired.online/wp-content/uploads/2019/08/Colour-Theory-E-Book-SMALL-pdf.pdf"
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
                  href="https://i.pinimg.com/originals/75/48/ce/7548ce2cd265e3392d3691223eec5394.jpg"
                  download
                >
                  <Certificate
                    src="https://i.pinimg.com/originals/75/48/ce/7548ce2cd265e3392d3691223eec5394.jpg"
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

export default ColorTheory;
