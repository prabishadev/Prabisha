import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./WFStyledComponents"

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
