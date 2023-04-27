import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./CMStyledComponents"

const questions = [
    {
      question: "What is the main goal of content marketing?",
      options: [
        "To make sales",
        "To provide information",
        "To entertain the audience",
        "To create viral content"
      ],
      answer: "To provide information"
    },
    {
      question: "What is the purpose of a content calendar?",
      options: [
        "To plan out content creation in advance",
        "To track website analytics",
        "To manage social media accounts",
        "To optimize website SEO"
      ],
      answer: "To plan out content creation in advance"
    },
    {
      question: "What is a lead magnet?",
      options: [
        "A type of sales pitch",
        "A free offer that entices potential customers to provide their contact information",
        "A type of email marketing",
        "A social media marketing technique"
      ],
      answer: "A free offer that entices potential customers to provide their contact information"
    },
    {
      question: "What is the purpose of a call-to-action?",
      options: [
        "To increase website traffic",
        "To improve website design",
        "To encourage audience engagement",
        "To prompt a specific action from the audience"
      ],
      answer: "To prompt a specific action from the audience"
    },
    {
      question: "What is the most important element of a content marketing strategy?",
      options: [
        "Consistency",
        "Creativity",
        "Quality",
        "Quantity"
      ],
      answer: "Quality"
    },
    {
      question: "What is the purpose of audience segmentation?",
      options: [
        "To target specific audience groups with personalized content",
        "To increase social media followers",
        "To improve website SEO",
        "To optimize email marketing campaigns"
      ],
      answer: "To target specific audience groups with personalized content"
    },
    {
      question: "What is the best way to measure content marketing success?",
      options: [
        "By the number of social media followers",
        "By the number of website visits",
        "By the number of leads generated",
        "By the number of email subscribers"
      ],
      answer: "By the number of leads generated"
    },
    {
      question: "What is the purpose of a content audit?",
      options: [
        "To improve website design",
        "To track website analytics",
        "To identify gaps in existing content",
        "To optimize website SEO"
      ],
      answer: "To identify gaps in existing content"
    },
    {
      question: "What is the most important factor when creating content?",
      options: [
        "Relevance",
        "Length",
        "Frequency",
        "Popularity"
      ],
      answer: "Relevance"
    },
    {
      question: "What is the purpose of a content distribution strategy?",
      options: [
        "To promote content across multiple platforms",
        "To track website analytics",
        "To manage social media accounts",
        "To optimize website SEO"
      ],
      answer: "To promote content across multiple platforms"
    },
    {
      question: "What is the main benefit of evergreen content?",
      options: [
        "It is easy to produce",
        "It generates short-term traffic spikes",
        "It is always relevant and can continue to drive traffic over time",
        "It requires little maintenance"
      ],
      answer: "It is always relevant and can continue to drive traffic over time"
    },
    {
      question: "What is the purpose of influencer marketing?",
      options: [  "To increase social media followers",
      "To build brand awareness",
      "To improve website design",
      "To optimize email marketing campaigns"
    ],
    answer: "To build brand awareness"
    },
    {
      question: "What is the difference between a blog post and a landing page?",
      options: [
      "A blog post is shorter than a landing page",
      "A blog post is more focused on promoting a product or service",
      "A landing page is more focused on providing information",
      "A landing page is designed to convert visitors into leads or customers"
      ],
      answer: "A landing page is designed to convert visitors into leads or customers"
      },
      {
      question: "What is the purpose of a content upgrade?",
      options: [
      "To improve website design",
      "To optimize email marketing campaigns",
      "To increase social media followers",
      "To provide additional value to the audience in exchange for their contact information"
      ],
      answer: "To provide additional value to the audience in exchange for their contact information"
      },
      {
      question: "What is the purpose of a content distribution network?",
      options: [
      "To improve website design",
      "To optimize website SEO",
      "To track website analytics",
      "To distribute content across multiple servers and improve website speed"
      ],
      answer: "To distribute content across multiple servers and improve website speed"
      },
      {
      question: "What is the purpose of a content hub?",
      options: [
      "To increase social media followers",
      "To track website analytics",
      "To manage social media accounts",
      "To organize and showcase a brand's content in one central location"
      ],
      answer: "To organize and showcase a brand's content in one central location"
      },
      {
      question: "What is the purpose of a content scorecard?",
      options: [
      "To improve website design",
      "To track website analytics",
      "To evaluate the effectiveness of content",
      "To optimize website SEO"
      ],
      answer: "To evaluate the effectiveness of content"
      },
      {
      question: "What is the purpose of a content gap analysis?",
      options: [
      "To optimize website SEO",
      "To track website analytics",
      "To identify gaps in content and prioritize future content creation",
      "To increase social media followers"
      ],
      answer: "To identify gaps in content and prioritize future content creation"
      },
      {
      question: "What is the purpose of a content marketing funnel?",
      options: [
      "To increase social media followers",
      "To track website analytics",
      "To guide potential customers through the buyer's journey",
      "To optimize email marketing campaigns"
      ],
      answer: "To guide potential customers through the buyer's journey"
      },
      {
      question: "What is the purpose of a content marketing platform?",
      options: [
      "To manage social media accounts",
      "To optimize website SEO",
      "To track website analytics",
      "To create and distribute content across multiple channels"
      ],
      answer: "To create and distribute content across multiple channels"
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
