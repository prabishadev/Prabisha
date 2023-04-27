import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./UXStyledComponents"

const questions = [
  {
    question: "What is UX design?",
    choices: [
      "The process of designing the user interface of a digital product",
      "The process of designing the overall experience of a user with a digital product",
      "The process of designing the marketing materials for a digital product",
      "The process of designing the visual identity of a digital product",
    ],
    answer:
      "The process of designing the overall experience of a user with a digital product",
  },
  {
    question: "What is the goal of UX design?",
    choices: [
      "To create an aesthetically pleasing user interface",
      "To create a seamless and enjoyable experience for the user",
      "To create a functional user interface",
      "To create a visually striking user interface",
    ],
    answer: "To create a seamless and enjoyable experience for the user",
  },
  {
    question: "What is the difference between UX design and UI design?",
    choices: [
      "UX design focuses on the overall experience, while UI design focuses on the visual elements",
      "UX design focuses on the visual elements, while UI design focuses on the overall experience",
      "UX design and UI design are the same thing",
      "UX design is more important than UI design",
    ],
    answer:
      "UX design focuses on the overall experience, while UI design focuses on the visual elements",
  },
  {
    question: "What is the first step in the UX design process?",
    choices: ["User research", "Wireframing", "Visual design", "Development"],
    answer: "User research",
  },
  {
    question: "What is a persona in UX design?",
    choices: [
      "A fictional representation of the target user group for a digital product",
      "A real person who uses the digital product",
      "A customer support representative who helps users with the digital product",
      "A type of user interface element",
    ],
    answer:
      "A fictional representation of the target user group for a digital product",
  },
  {
    question: "What is the purpose of user testing in UX design?",
    choices: [
      "To identify usability issues and gather feedback from users",
      "To create a visually appealing user interface",
      "To improve the performance of the digital product",
      "To track user interactions with the digital product",
    ],
    answer: "To identify usability issues and gather feedback from users",
  },
  {
    question:
      "What is the difference between qualitative and quantitative research in UX design?",
    choices: [
      "Qualitative research focuses on subjective data, while quantitative research focuses on objective data",
      "Quantitative research focuses on subjective data, while qualitative research focuses on objective data",
      "Qualitative research and quantitative research are the same thing",
      "Qualitative research is more important than quantitative research",
    ],
    answer:
      "Qualitative research focuses on subjective data, while quantitative research focuses on objective data",
  },
  {
    question: "What is the purpose of wireframing in UX design?",
    choices: [
      "To create a basic layout of the digital product without any visual design elements",
      "To create a high-fidelity prototype of the digital product",
      "To test the performance of the digital product",
      "To track user interactions with the digital product",
    ],
    answer:
      "To create a basic layout of the digital product without any visual design elements",
  },
  {
    question: "What is the purpose of prototyping in UX design?",
    choices: [
      "To create a functional, interactive model of the digital product for user testing",
      "To create a final version of the visual design of the digital product",
      "To test the performance of the digital product",
      "To track user interactions with the digital product",
    ],
    answer:
      "To create a functional, interactive model of the digital product for user testing",
  },
  {
    question:
      "What is the difference between low-fidelity and high-fidelity prototypes in UX design?",
    choices: [
      "Low-fidelity prototypes are basic sketches or wireframes, while high-fidelity prototypes are more detailed and interactive",
      "High-fidelity prototypes are basic sketches or wireframes, while low-fidelity prototypes are more detailed and interactive",
      "Low-fidelity prototypes and high-fidelity prototypes are the same thing",
      "Low-fidelity prototypes are more important than high-fidelity prototypes",
    ],
    answer:
      "Low-fidelity prototypes are basic sketches or wireframes, while high-fidelity prototypes are more detailed and interactive",
  },
  {
    question: "What is the purpose of user flow diagrams in UX design?",
    choices: [
      "To map out the steps a user takes to complete a specific task within the digital product",
      "To create a final version of the visual design of the digital product",
      "To test the performance of the digital product",
      "To track user interactions with the digital product",
    ],
    answer:
      "To map out the steps a user takes to complete a specific task within the digital product",
  },
  {
    question: "What is the purpose of accessibility in UX design?",
    choices: [
      "To ensure that the digital product can be used by people with disabilities",
      "To create a visually appealing user interface",
      "To improve the performance of the digital product",
      "To track user interactions with the digital product",
    ],
    answer:
      "To ensure that the digital product can be used by people with disabilities",
  },
  {
    question: "What is the purpose of A/B testing in UX design?",
    choices: [
      "To compare two versions of the digital product and determine which one performs better",
      "To create a final version of the visual design of the digital product",
      "To test the performance of the digital product",
      "To track user interactions with the digital product",
    ],
    answer:
      "To compare two versions of the digital product and determine which one performs better",
  },
  {
    question: "What is the purpose of a design system in UX design?",
    choices: [
      "To establish consistent design patterns and guidelines for a digital product",
      "To create a visually appealing user interface",
      "To improve the performance of the digital product",
      "To track user interactions with the digital product",
    ],
    answer:
      "To establish consistent design patterns and guidelines for a digital product",
  },
  {
    question: "What is the purpose of a style guide in UX design?",
    choices: [
      "To document the visual design elements and guidelines for a digital product",
      "To create a final version of the visual design of the digital product",
      "To test the performance of the digital product",
      "To track user interactions with the digital product",
    ],
    answer:
      "To document the visual design elements and guidelines for a digital product",
  },
  {
    question: "What is the purpose of microcopy in UX design?",
    choices: [
      "To provide clear and concise instructions or feedback to the user",
      "To create a visually appealing user interface",
      "To improve the performance of the digital product",
      "To track user interactions with the digital product",
    ],
    answer: "To provide clear and concise instructions or feedback to the user",
  },
  {
    question: "What is the purpose of usability testing in UX design?",
    choices: [
      "To evaluate the ease of use and overall user experience of a digital product",
      "To create a final version of the visual design of the digital product",
      "To test the performance of the digital product",
      "To track user interactions with the digital product",
    ],
    answer:
      "To evaluate the ease of use and overall user experience of a digital product",
  },
  {
    question: "What is the purpose of wireframing in UX design?",
    choices: [
      "To create a basic layout and structure for a digital product",
      "To create a final version of the visual design of the digital product",
      "To test the performance of the digital product",
      "To track user interactions with the digital product",
    ],
    answer: "To create a basic layout and structure for a digital product",
  },
  {
    question: "What is the purpose of user personas in UX design?",
    choices: [
      "To create a representation of the target users of a digital product",
      "To create a final version of the visual design of the digital product",
      "To test the performance of the digital product",
      "To track user interactions with the digital product",
    ],
    answer:
      "To create a representation of the target users of a digital product",
  },
  {
    question: "What is the purpose of information architecture in UX design?",
    choices: [
      "To organize and structure the content of a digital product",
      "To create a final version of the visual design of the digital product",
      "To test the performance of the digital product",
      "To track user interactions with the digital product",
    ],
    answer: "To organize and structure the content of a digital product",
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
