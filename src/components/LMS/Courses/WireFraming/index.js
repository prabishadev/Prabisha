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
  LinkItem,
  StartExam,
  Certificate,
  FailedMessage,
  ExamContainer,
  Question,
  ExamTitle,
  Arrow,
  HrLine
} from "./WFStyledComponents";

const questions = [
  {
    question: "What is a wireframe?",
    choices: [
      "A visual representation of a website or app's basic structure and layout",
      "A written description of a website or app's functionality and features",
      "A tool for creating animations and interactive effects",
      "A process for testing a website or app's performance",
    ],
    answer:
      "A visual representation of a website or app's basic structure and layout",
  },
  {
    question: "What is the purpose of wireframing in the design process?",
    choices: [
      "To establish the basic layout and functionality of a website or app",
      "To create a final version of the visual design of a website or app",
      "To test the performance of a website or app",
      "To track user interactions with a website or app",
    ],
    answer:
      "To establish the basic layout and functionality of a website or app",
  },
  {
    question:
      "What is the difference between a low-fidelity wireframe and a high-fidelity wireframe?",
    choices: [
      "Low-fidelity wireframes are basic sketches or outlines, while high-fidelity wireframes include more detailed design elements and content",
      "Low-fidelity wireframes are intended for desktop devices, while high-fidelity wireframes are intended for mobile devices",
      "Low-fidelity wireframes are used for testing, while high-fidelity wireframes are used for development",
      "Low-fidelity wireframes are black and white, while high-fidelity wireframes use color",
    ],
    answer:
      "Low-fidelity wireframes are basic sketches or outlines, while high-fidelity wireframes include more detailed design elements and content",
  },
  {
    question: "What is the purpose of a wireframe prototype?",
    choices: [
      "To test the functionality and usability of a website or app's basic structure and layout",
      "To create a final version of the visual design of a website or app",
      "To track user interactions with a website or app",
      "To generate code for a website or app",
    ],
    answer:
      "To test the functionality and usability of a website or app's basic structure and layout",
  },
  {
    question:
      "What is the main benefit of creating wireframes before starting visual design?",
    choices: [
      "It allows designers to focus on the structure and functionality of a website or app before worrying about visual elements",
      "It saves time by skipping the prototyping phase of the design process",
      "It ensures that a website or app will look visually appealing to users",
      "It allows designers to skip the testing phase of the design process",
    ],
    answer:
      "It allows designers to focus on the structure and functionality of a website or app before worrying about visual elements",
  },
  {
    question: "What is the difference between a wireframe and a mockup?",
    choices: [
      "Wireframes are basic outlines of a website or app's structure, while mockups are more detailed visual representations of the final design",
      "Wireframes are used for mobile devices, while mockups are used for desktop devices",
      "Wireframes are black and white, while mockups use color",
      "Wireframes include interactive elements, while mockups do not",
    ],
    answer:
      "Wireframes are basic outlines of a website or app's structure, while mockups are more detailed visual representations of the final design",
  },
  {
    question: "What is the main goal of user testing with wireframes?",
    choices: [
      "To identify any usability issues ",
      "To test the performance of the website or app",
      "To evaluate the visual design of the website or app",
      "To generate code for the website or app",
    ],
    answer: "To identify any usability issues",
  },
  {
    question: "What is the purpose of annotations on a wireframe?",
    choices: [
      "To provide more detailed information about the functionality and design elements of the wireframe",
      "To track user interactions with the wireframe",
      "To generate code for the website or app",
      "To test the performance of the website or app",
    ],
    answer:
      "To provide more detailed information about the functionality and design elements of the wireframe",
  },
  {
    question:
      "What is the difference between a static wireframe and a dynamic wireframe?",
    choices: [
      "Static wireframes are static images, while dynamic wireframes include interactive elements",
      "Static wireframes are intended for mobile devices, while dynamic wireframes are intended for desktop devices",
      "Static wireframes are low-fidelity, while dynamic wireframes are high-fidelity",
      "Static wireframes include annotations, while dynamic wireframes do not",
    ],
    answer:
      "Static wireframes are static images, while dynamic wireframes include interactive elements",
  },
  {
    question: "What is the purpose of a responsive wireframe?",
    choices: [
      "To test how a website or app's layout and functionality will adapt to different screen sizes",
      "To create a final version of the visual design of a website or app",
      "To track user interactions with a website or app",
      "To generate code for a website or app",
    ],
    answer:
      "To test how a website or app's layout and functionality will adapt to different screen sizes",
  },
  {
    question: "What is the main goal of a wireframe review?",
    choices: [
      "To get feedback from stakeholders and users on the wireframe's layout and functionality",
      "To test the wireframe's performance and usability",
      "To evaluate the wireframe's visual design",
      "To generate code for the website or app",
    ],
    answer:
      "To get feedback from stakeholders and users on the wireframe's layout and functionality",
  },
  {
    question: "What is the difference between a wireframe and a sitemap?",
    choices: [
      "Wireframes focus on the layout and functionality of individual pages, while sitemaps show the structure and organization of a website or app as a whole",
      "Wireframes are used for desktop devices, while sitemaps are used for mobile devices",
      "Wireframes include annotations, while sitemaps do not",
      "Wireframes are high-fidelity, while sitemaps are low-fidelity",
    ],
    answer:
      "Wireframes focus on the layout and functionality of individual pages, while sitemaps show the structure and organization of a website or app as a whole",
  },
  {
    question: "What is the purpose of a wireflow?",
    choices: [
      "To show how users will interact with a website or app's features and functionality",
      "To test the performance and usability of a website or app's basic structure and layout",
      "To evaluate the visual design of a website or app",
      "To generate code for a website or app",
    ],
    answer:
      "To show how users will interact with a website or app's features and functionality",
  },
  {
    question: "What is the difference between a wireframe and a storyboard?",
    choices: [
      "Wireframes focus on the layout and functionality of a website or app, while storyboards focus on the flow of a website or app's content and narrative",
      "Wireframes include annotations, while storyboards do not",
      "Wireframes are low-fidelity, while storyboards are high-fidelity",
      "Wireframes are intended for desktop devices, while storyboards are intended for mobile devices",
    ],
    answer:
      "Wireframes focus on the layout and functionality of a website or app, while storyboards focus on the flow of a website or app's content and narrative",
  },
  {
    question: "What is the purpose of a task flow in wireframing?",
    choices: [
      "To show how users will complete specific tasks or goals within a website or app",
      "To evaluate the visual design of a website or app",
      "To test the performance and usability of a website or app's basic structure and layout",
      "To generate code for a website or app",
    ],
    answer:
      "To show how users will complete specific tasks or goals within a website or app",
  },
  {
    question: "What is the purpose of a wireframe kit or template?",
    choices: [
      "To provide pre-designed layout and design elements that can be used to create wireframes quickly and easily",
      "To evaluate the visual design of a website or app",
      "To test the performance and usability of a website or app's basic structure and layout",
      "To generate code for a website or app",
    ],
    answer:
      "To provide pre-designed layout and design elements that can be used to create wireframes quickly and easily",
  },
  {
    question:
      "What is the difference between a low-fidelity wireframe and a high-fidelity wireframe?",
    choices: [
      "Low-fidelity wireframes are rough sketches or simple representations of the website or app's layout and functionality, while high-fidelity wireframes are more detailed and closer to the final design",
      "Low-fidelity wireframes are intended for desktop devices, while high-fidelity wireframes are intended for mobile devices",
      "Low-fidelity wireframes include annotations, while high-fidelity wireframes do not",
      "Low-fidelity wireframes are static images, while high-fidelity wireframes include interactive elements",
    ],
    answer:
      "Low-fidelity wireframes are rough sketches or simple representations of the website or app's layout and functionality, while high-fidelity wireframes are more detailed and closer to the final design",
  },
  {
    question: "What is the difference between a wireframe and a prototype?",
    choices: [
      "Wireframes focus on the layout and functionality of a website or app, while prototypes include more interactive elements and simulate user interactions",
      "Wireframes are intended for mobile devices, while prototypes are intended for desktop devices",
      "Wireframes are low-fidelity, while prototypes are high-fidelity",
      "Wireframes include annotations, while prototypes do not",
    ],
    answer:
      "Wireframes focus on the layout and functionality of a website or app, while prototypes include more interactive elements and simulate user interactions",
  },
  {
    question: "What is the purpose of a wireframe usability test?",
    choices: [
      "To evaluate the wireframe's usability and identify any areas that may need improvement",
      "To test the performance and functionality of a website or app",
      "To evaluate the visual design of a website or app",
      "To generate code for a website or app",
    ],
    answer:
      "To evaluate the wireframe's usability and identify any areas that may need improvement",
  },
  {
    question: "What is the purpose of a responsive wireframe?",
    choices: [
      "To show how the website or app will adapt and respond to different screen sizes and devices",
      "To evaluate the visual design of a website or app",
      "To test the performance and functionality of a website or app",
      "To generate code for a website or app",
    ],
    answer:
      "To show how the website or app will adapt and respond to different screen sizes and devices",
  },
];

const WireFraming = () => {
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
              src="https://www.tekrevol.com/blogs/wp-content/uploads/2021/06/hero-image-1-2048x1138.png"
              alt="RWD"
            />

            <ConceptTitle>WireFraming</ConceptTitle>
            <ConceptDescription>
              <embed
                src="https://www.usability.gov/sites/default/files/creating-wireframes.pdf"
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

export default WireFraming;
