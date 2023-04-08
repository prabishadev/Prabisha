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
  HrLine,
} from "./AccessStyledComponents";

const questions = [
  {
    question: "What is web accessibility?",
    choices: [
      "The practice of designing and developing websites so that people with disabilities can use them",
      "The process of optimizing a website's performance",
      "The practice of creating a visually appealing website design",
      "The process of improving a website's search engine ranking",
    ],
    answer:
      "The practice of designing and developing websites so that people with disabilities can use them",
  },
  {
    question: "What is the purpose of alt text in images?",
    choices: [
      "To provide a text alternative for users who cannot see the image",
      "To improve the visual design of the website",
      "To increase the website's search engine ranking",
      "To provide additional information about the image",
    ],
    answer: "To provide a text alternative for users who cannot see the image",
  },
  {
    question: "What is the purpose of semantic HTML?",
    choices: [
      "To provide a clear and logical structure for website content",
      "To improve the visual design of the website",
      "To increase the website's search engine ranking",
      "To provide additional functionality for website users",
    ],
    answer: "To provide a clear and logical structure for website content",
  },
  {
    question: "What is the purpose of ARIA attributes?",
    choices: [
      "To provide additional information and context for screen readers and other assistive technologies",
      "To improve the visual design of the website",
      "To increase the website's search engine ranking",
      "To provide additional functionality for website users",
    ],
    answer:
      "To provide additional information and context for screen readers and other assistive technologies",
  },
  {
    question: "What is the purpose of keyboard accessibility?",
    choices: [
      "To allow users to navigate and interact with a website using only the keyboard",
      "To improve the visual design of the website",
      "To increase the website's search engine ranking",
      "To provide additional functionality for website users",
    ],
    answer:
      "To allow users to navigate and interact with a website using only the keyboard",
  },
  {
    question: "What is the purpose of color contrast in web design?",
    choices: [
      "To ensure that text is legible and readable for all users",
      "To improve the visual design of the website",
      "To increase the website's search engine ranking",
      "To provide additional functionality for website users",
    ],
    answer: "To ensure that text is legible and readable for all users",
  },
  {
    question: "What is the purpose of skip navigation links?",
    choices: [
      "To allow users to skip over repeated content and navigate directly to the main content of the website",
      "To improve the visual design of the website",
      "To increase the website's search engine ranking",
      "To provide additional functionality for website users",
    ],
    answer:
      "To allow users to skip over repeated content and navigate directly to the main content of the website",
  },
  {
    question: "What is the purpose of video captioning?",
    choices: [
      "To provide a text alternative for users who cannot hear the audio in the video",
      "To improve the visual design of the website",
      "To increase the website's search engine ranking",
      "To provide additional information about the video",
    ],
    answer:
      "To provide a text alternative for users who cannot hear the audio in the video",
  },
  {
    question: "What is the purpose of descriptive link text?",
    choices: [
      "To provide clear and concise information about where the link will take the user",
      "To improve the visual design of the website",
      "To increase the website's search engine ranking",
      "To provide additional functionality for website users",
    ],
    answer:
      "To provide clear and concise information about where the link will take the user",
  },
  {
    question: "What is the purpose of accessible forms?",
    choices: [
      "To allow all users, including those with disabilities, to input and submit information on a website",
      "To improve the visual design of the website",
      "To increase the website's search engine ranking",
      "To provide additional functionality for website users",
    ],
    answer:
      "To allow all users, including those with disabilities, to input and submit information on a website",
  },
  {
    question: "What is the purpose of heading structure in web design?",
    choices: [
      "To provide a clear and logical hierarchy of content on a website",
      "To improve the visual design of the website",
      "To increase the website's search engine ranking",
      "To provide additional functionality for website users",
    ],
    answer: "To provide a clear and logical hierarchy of content on a website",
  },
  {
    question: "What is the purpose of accessible tables?",
    choices: [
      "To make table data readable and understandable for all users, including those with disabilities",
      "To improve the visual design of the website",
      "To increase the website's search engine ranking",
      "To provide additional functionality for website users",
    ],
    answer:
      "To make table data readable and understandable for all users, including those with disabilities",
  },
  {
    question: "What is the purpose of text resizing options?",
    choices: [
      "To allow users to adjust the size of text to their preference and needs",
      "To improve the visual design of the website",
      "To increase the website's search engine ranking",
      "To provide additional functionality for website users",
    ],
    answer:
      "To allow users to adjust the size of text to their preference and needs",
  },
  {
    question: "What is the purpose of accessible media players?",
    choices: [
      "To provide accessible and easy-to-use media players for all users, including those with disabilities",
      "To improve the visual design of the website",
      "To increase the website's search engine ranking",
      "To provide additional functionality for website users",
    ],
    answer:
      "To provide accessible and easy-to-use media players for all users, including those with disabilities",
  },
  {
    question: "What is the purpose of error messaging in web design?",
    choices: [
      "To provide clear and helpful error messages for all users, including those with disabilities",
      "To improve the visual design of the website",
      "To increase the website's search engine ranking",
      "To provide additional functionality for website users",
    ],
    answer:
      "To provide clear and helpful error messages for all users, including those with disabilities",
  },
  {
    question: "What is the purpose of accessible navigation?",
    choices: [
      "To provide clear and easy-to-use navigation for all users, including those with disabilities",
      "To improve the visual design of the website",
      "To increase the website's search engine ranking",
      "To provide additional functionality for website users",
    ],
    answer:
      "To provide clear and easy-to-use navigation for all users, including those with disabilities",
  },
  {
    question:
      "What is the purpose of text alternatives for audio and video content?",
    choices: [
      "To provide audio and video content in alternative formats for users who are unable to hear or see them",
      "To improve the visual design of the website",
      "To increase the website's search engine ranking",
      "To provide additional functionality for website users",
    ],
    answer:
      "To provide audio and video content in alternative formats for users who are unable to hear or see them",
  },
  {
    question: "What is the purpose of accessible typography?",
    choices: [
      "To ensure that all users can easily read and understand text on a website, regardless of their abilities",
      "To improve the visual design of the website",
      "To increase the website's search engine ranking",
      "To provide additional functionality for website users",
    ],
    answer:
      "To ensure that all users can easily read and understand text on a website, regardless of their abilities",
  },
  {
    question: "What is the purpose of accessible links?",
    choices: [
      "To provide clear and concise information about where the link will take the user",
      "To improve the visual design of the website",
      "To increase the website's search engine ranking",
      "To provide additional functionality for website users",
    ],
    answer:
      "To provide clear and concise information about where the link will take the user",
  },
  {
    question: "What is the purpose of accessible tables?",
    choices: [
      "To make table data readable and understandable for all users, including those with disabilities",
      "To improve the visual design of the website",
      "To increase the website's search engine ranking",
      "To provide additional functionality for website users",
    ],
    answer:
      "To make table data readable and understandable for all users, including those with disabilities",
  },
];

const Accessibility = () => {
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
              src="https://www.milesweb.in/blog/wp-content/uploads/2020/05/website-accessibility.jpg"
              alt="RWD"
            />

            <ConceptTitle>Accessibility Web Design</ConceptTitle>
            <ConceptDescription>
              <embed
                src="https://www.rgd.ca/database/files/library/RGD_AccessAbility_Handbook_2015_ForWebFINAL(1).pdf"
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

export default Accessibility;
