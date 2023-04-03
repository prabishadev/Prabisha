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
  ExamPassed,
  Option,
  StartExam,
  Certificate,
  FailedMessage,
  ExamContainer,
  Question,
  LinkItem,
  ExamTitle,
} from "./TGStyledComponents";

const questions = [
  {
    question: "What is kerning?",
    choices: [
      "The spacing between letters",
      "The spacing between lines",
      "The size of the letters",
      "The style of the letters",
    ],
    answer: "The spacing between letters",
  },
  {
    question: "What is leading?",
    choices: [
      "The spacing between letters",
      "The spacing between lines",
      "The size of the letters",
      "The style of the letters",
    ],
    answer: "The spacing between lines",
  },
  {
    question: "What is tracking?",
    choices: [
      "The spacing between letters",
      "The spacing between lines",
      "The size of the letters",
      "The style of the letters",
    ],
    answer: "The spacing between letters",
  },
  {
    question: "What is a serif?",
    choices: [
      "A decorative line added to a letter",
      "The thickness of a letter",
      "The shape of a letter",
      "The spacing between letters",
    ],
    answer: "A decorative line added to a letter",
  },
  {
    question: "What is a sans-serif font?",
    choices: [
      "A font without serifs",
      "A font with serifs",
      "A font with a decorative underline",
      "A font with a shadow",
    ],
    answer: "A font without serifs",
  },
  {
    question: "What is a typeface?",
    choices: [
      "A particular style of a font",
      "The size of a font",
      "The color of a font",
      "The spacing of a font",
    ],
    answer: "A particular style of a font",
  },
  {
    question: "What is a ligature?",
    choices: [
      "A special character that combines two letters",
      "The spacing between letters",
      "The size of the letters",
      "The style of the letters",
    ],
    answer: "A special character that combines two letters",
  },
  {
    question: "What is an em?",
    choices: [
      "A unit of measurement equal to the width of the letter 'm'",
      "A unit of measurement equal to the height of the letter 'e'",
      "A unit of measurement equal to the thickness of the letter 'm'",
      "A unit of measurement equal to the spacing between letters",
    ],
    answer: "A unit of measurement equal to the width of the letter 'm'",
  },
  {
    question: "What is a point?",
    choices: [
      "A unit of measurement equal to 1/72 of an inch",
      "A unit of measurement equal to 1/100 of an inch",
      "A unit of measurement equal to the height of the letter 'p'",
      "A unit of measurement equal to the width of the letter 'o'",
    ],
    answer: "A unit of measurement equal to 1/72 of an inch",
  },
  {
    question: "What is a baseline?",
    choices: [
      "The invisible line on which letters sit",
      "The space between lines of text",
      "The space between paragraphs",
      "The decorative line added to a letter",
    ],
    answer: "The invisible line on which letters sit",
  },
  {
    question: "What is a descender?",
    choices: [
      "The part of a letter that extends below the baseline",
      "The part of a letter that extends above the x-height",
      "The part of a letter that extends to the left of the stem",
      "The part of a letter that extends to the right of the stem",
    ],
    answer: "The part of a letter that extends below the baseline",
  },
  {
    question: "What is an ascender?",
    choices: [
      "The part of a letter that extends above the x-height",
      "The part of a letter that extends below the baseline",
      "The part of a letter that extends to the left of the stem",
      "The part of a letter that extends to the right of the stem",
    ],
    answer: "The part of a letter that extends above the x-height",
  },
  {
    question: "What is a stroke?",
    choices: [
      "The main vertical or diagonal line of a letter",
      "The thickness of a letter",
      "The decorative line added to a letter",
      "The space between letters",
    ],
    answer: "The main vertical or diagonal line of a letter",
  },
  {
    question: "What is a counter?",
    choices: [
      "The enclosed or partially enclosed space within a letter",
      "The decorative line added to a letter",
      "The main vertical or diagonal line of a letter",
      "The thickness of a letter",
    ],
    answer: "The enclosed or partially enclosed space within a letter",
  },
  {
    question: "What is a ligature?",
    choices: [
      "A special character that combines two letters",
      "The spacing between letters",
      "The size of the letters",
      "The style of the letters",
    ],
    answer: "A special character that combines two letters",
  },
  {
    question: "What is a point size?",
    choices: [
      "The size of a font measured in points",
      "The spacing between lines",
      "The thickness of a letter",
      "The width of a letter",
    ],
    answer: "The size of a font measured in points",
  },
  {
    question: "What is a typeface family?",
    choices: [
      "A group of typefaces with similar design features",
      "A particular style of a typeface",
      "The color of a typeface",
      "The spacing of a typeface",
    ],
    answer: "A group of typefaces with similar design features",
  },
  {
    question: "What is a monospaced font?",
    choices: [
      "A font in which each character takes up the same amount of space",
      "A font in which each character takes up a different amount of space",
      "A font with serifs",
      "A font without serifs",
    ],
    answer: "A font in which each character takes up the same amount of space",
  },
  {
    question: "What is a display font?",
    choices: [
      "A font designed for use in headlines and titles",
      "A font designed for use in body text",
      "A font with serifs",
      "A font without serifs",
    ],
    answer: "A font designed for use in headlines and titles",
  },
  {
    question: "What is a web-safe font?",
    choices: [
      "A font that is likely to be installed on most computers",
      "A font that is not suitable for use on the web",
      "A font with a decorative underline",
      "A font with a shadow",
    ],
    answer: "A font that is likely to be installed on most computers",
  },
];

const TypoGraphy = () => {
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
              src="https://i.pinimg.com/originals/1b/19/0b/1b190be203af3fda844e184f5863a294.jpg"
              alt="RWD"
            />

            <ConceptTitle>TypoGraphy</ConceptTitle>
            <ConceptDescription>
              <embed
                src="https://thepublicstudio.ca/files/DIY-No5-Typography.pdf"
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
            <StartExam>
              <LinkItem to="/lms-available">Back</LinkItem>
            </StartExam>
          </ExamContainer>
        )}
      </CourseContentContainer>
    </React.Fragment>
  );
};

export default TypoGraphy;
