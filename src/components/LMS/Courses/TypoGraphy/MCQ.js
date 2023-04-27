import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./TGStyledComponents"

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
