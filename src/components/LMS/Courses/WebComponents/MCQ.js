import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./WRStyledComponents"

const questions = [  {    qnNo: 1,    question: "Which of the following is not a part of Web Components?",    options: ["Custom Elements", "Templates", "Shadow DOM", "Canvas"],
    answer: "Canvas"
  },
  {
    qnNo: 2,
    question: "Which HTML tag is used to define a custom element?",
    options: ["<div>", "<p>", "<custom>", "<my-element>"],
    answer: "<my-element>"
  },
  {
    qnNo: 3,
    question: "What is the purpose of the Shadow DOM?",
    options: ["To encapsulate styles and markup", "To create custom events", "To define templates", "To manipulate the DOM"],
    answer: "To encapsulate styles and markup"
  },
  {
    qnNo: 4,
    question: "Which API is used to register a custom element?",
    options: ["CustomElementsRegistry", "HTMLElementRegistry", "CustomElementRegistry", "ElementRegistry"],
    answer: "CustomElementRegistry"
  },
  {
    qnNo: 5,
    question: "Which method is used to define the template for a custom element?",
    options: ["connectedCallback", "disconnectedCallback", "adoptedCallback", "render"],
    answer: "render"
  },
  {
    qnNo: 6,
    question: "What is the purpose of the :host selector?",
    options: ["To select the host element", "To select child elements", "To select sibling elements", "To select all elements"],
    answer: "To select the host element"
  },
  {
    qnNo: 7,
    question: "What is the purpose of the :host-context selector?",
    options: ["To select the host element", "To select child elements", "To select sibling elements", "To select ancestor elements"],
    answer: "To select ancestor elements"
  },
  {
    qnNo: 8,
    question: "What is the purpose of the HTML <slot> element?",
    options: ["To define a custom element", "To define a template", "To define a placeholder for content", "To define a custom attribute"],
    answer: "To define a placeholder for content"
  },
  {
    qnNo: 9,
    question: "What is the purpose of the :slotted selector?",
    options: ["To select the host element", "To select child elements", "To select sibling elements", "To select slotted elements"],
    answer: "To select slotted elements"
  },
  {
    qnNo: 10,
    question: "What is the purpose of the HTML <template> element?",
    options: ["To define a custom element", "To define a placeholder for content", "To define a template", "To define a custom attribute"],
    answer: "To define a template"
  },
  {
    qnNo: 11,
    question: "What is the purpose of the is attribute in a custom element?",
    options: ["To define a template", "To specify the type of the element", "To define a custom attribute", "To specify the version of the element"],
    answer: "To specify the type of the element"
  },
  {
    qnNo: 12,
    question: "What is the purpose of the connectedCallback method?",
    options: ["To handle changes to the element's attributes", "To render the element's template", "To perform setup when the element is added to the DOM", "To perform cleanup when the element is removed from the DOM"],
    answer: "To perform setup when the element is added to the DOM"
    },
    {
    qnNo: 13,
    question: "What is the purpose of the disconnectedCallback method?",
    options: ["To handle changes to the element's attributes", "To render the element's template", "To perform setup when the element is added to the DOM", "To perform cleanup when the element is removed from the DOM"],
    answer: "To perform cleanup when the element is removed from the DOM"
    },
    {
    qnNo: 14,
    question: "What is the purpose of the adoptedCallback method?",
    options: ["To handle changes to the element's attributes", "To render the element's template", "To perform setup when the element is added to a new document", "To perform cleanup when the element is removed from the DOM"],
    answer: "To perform setup when the element is added to a new document"
    },
    {
    qnNo: 15,
    question: "What is the purpose of the attributeChangedCallback method?",
    options: ["To handle changes to the element's attributes", "To render the element's template", "To perform setup when the element is added to the DOM", "To perform cleanup when the element is removed from the DOM"],
    answer: "To handle changes to the element's attributes"
    },
    {
    qnNo: 16,
    question: "What is the purpose of the observedAttributes static method?",
    options: ["To define the element's attributes", "To define the element's properties", "To define the element's methods", "To define the element's events"],
    answer: "To define the element's attributes"
    },
    {
    qnNo: 17,
    question: "What is the purpose of the HTML <template> element?",
    options: ["To define a custom element", "To define a placeholder for content", "To define a template", "To define a custom attribute"],
    answer: "To define a template"
    },
    {
    qnNo: 18,
    question: "Which of the following is not a part of the Shadow DOM API?",
    options: ["attachShadow", "getElementById", "querySelector", "querySelectorAll"],
    answer: "getElementById"
    },
    {
    qnNo: 19,
    question: "What is the purpose of the composed property of the event?",
    options: ["To indicate whether the event bubbles", "To indicate whether the event is cancelable", "To indicate whether the event is composed", "To indicate whether the event is propagating"],
    answer: "To indicate whether the event is composed"
    },
    {
    qnNo: 20,
    question: "What is the purpose of the CustomEvent constructor?",
    options: ["To create a custom element", "To create a custom attribute", "To create a custom event", "To create a custom template"],
    answer: "To create a custom event"
    }
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
