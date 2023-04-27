import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./EMMStyledComponents"

const questions = [  {    question: "What is influencer marketing?",    options: [      "A marketing strategy that uses influential people to promote a product or service",      "A marketing strategy that uses celebrities to promote a product or service",      "A marketing strategy that uses radio and TV ads to promote a product or service",      "A marketing strategy that uses social media ads to promote a product or service"    ],
    answer: "A marketing strategy that uses influential people to promote a product or service"
  },
  {
    question: "Who are influencers?",
    options: [
      "People who have a large following on social media and can persuade their followers to take action",
      "People who work for a marketing agency and create ads for a living",
      "People who work for a PR agency and handle crisis management",
      "People who work for a media company and produce content"
    ],
    answer: "People who have a large following on social media and can persuade their followers to take action"
  },
  {
    question: "What is the main benefit of influencer marketing?",
    options: [
      "Increased brand awareness",
      "Increased website traffic",
      "Increased sales",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "What is the difference between macro and micro influencers?",
    options: [
      "Macro influencers have a larger following than micro influencers",
      "Micro influencers have a larger following than macro influencers",
      "Macro influencers are more affordable than micro influencers",
      "Micro influencers are more affordable than macro influencers"
    ],
    answer: "Macro influencers have a larger following than micro influencers"
  },
  {
    question: "What is a common metric used to measure the success of an influencer campaign?",
    options: [
      "Impressions",
      "Engagement rate",
      "Click-through rate",
      "All of the above"
    ],
    answer: "Engagement rate"
  },
  {
    question: "What is the FTC?",
    options: [
      "Federal Trade Commission",
      "Famous Twitter Celebrities",
      "Fashion Trend Consultants",
      "Food Truck Coalition"
    ],
    answer: "Federal Trade Commission"
  },
  {
    question: "What is the role of the FTC in influencer marketing?",
    options: [
      "To ensure that influencers disclose their sponsored posts",
      "To ensure that influencers do not disclose their sponsored posts",
      "To ensure that influencers only promote certain products or services",
      "To ensure that influencers do not work with certain brands"
    ],
    answer: "To ensure that influencers disclose their sponsored posts"
  },
  {
    question: "What is a common type of influencer campaign?",
    options: [
      "Product reviews",
      "TV commercials",
      "Billboards",
      "Radio ads"
    ],
    answer: "Product reviews"
  },
  {
    question: "What is a brand ambassador?",
    options: [
      "An influencer who represents a brand and promotes its products or services",
      "An employee of a company who represents the brand at events",
      "A celebrity who endorses a brand",
      "A journalist who writes about a brand"
    ],
    answer: "An influencer who represents a brand and promotes its products or services"
  },
  {
    question: "What is the difference between an influencer and a brand ambassador?",
    options: [
      "An influencer is not necessarily affiliated with a specific brand, while a brand ambassador is",
      "An influencer has more followers than a brand ambassador",
      "An influencer only promotes products or services on social media, while a brand ambassador can promote products or services in person",
      "There is no difference between an influencer and a brand ambassador"
      ],
      answer: "An influencer is not necessarily affiliated with a specific brand, while a brand ambassador is"
      },
      {
      question: "What is the importance of choosing the right influencer for a campaign?",
      options: [
      "To ensure that the influencer's followers match the target audience",
      "To ensure that the influencer has the most followers possible",
      "To ensure that the influencer is the cheapest option",
      "To ensure that the influencer has a personal relationship with the brand"
      ],
      answer: "To ensure that the influencer's followers match the target audience"
      },
      {
      question: "What is a social media platform commonly used for influencer marketing?",
      options: [
      "Instagram",
      "LinkedIn",
      "Pinterest",
      "TikTok"
      ],
      answer: "Instagram"
      },
      {
      question: "What is a sponsored post?",
      options: [
      "A post on social media that promotes a product or service in exchange for payment",
      "A post on social media that promotes a product or service for free",
      "A post on social media that promotes a product or service and is not required to be disclosed",
      "A post on social media that does not promote a product or service"
      ],
      answer: "A post on social media that promotes a product or service in exchange for payment"
      },
      {
      question: "What is a hashtag commonly used in influencer marketing?",
      options: [
      "#ad",
      "#likeforlike",
      "#throwbackthursday",
      "#selfie"
      ],
      answer: "#ad"
      },
      {
      question: "What is a nano influencer?",
      options: [
      "An influencer with a small following, typically less than 1,000",
      "An influencer with a large following, typically over 1 million",
      "An influencer who only promotes products or services on YouTube",
      "An influencer who specializes in a specific niche"
      ],
      answer: "An influencer with a small following, typically less than 1,000"
      },
      {
      question: "What is a celebrity endorsement?",
      options: [
      "When a celebrity promotes a product or service in exchange for payment",
      "When a celebrity promotes a product or service for free",
      "When a celebrity promotes a product or service and is not required to disclose their affiliation with the brand",
      "When a celebrity promotes a product or service on social media"
      ],
      answer: "When a celebrity promotes a product or service in exchange for payment"
      },
      {
      question: "What is a key difference between influencer marketing and traditional marketing?",
      options: [
      "Influencer marketing focuses on building relationships with individuals, while traditional marketing focuses on mass communication",
      "Influencer marketing is more expensive than traditional marketing",
      "Influencer marketing only uses social media as a platform, while traditional marketing uses a variety of channels",
      "There is no difference between influencer marketing and traditional marketing"
      ],
      answer: "Influencer marketing focuses on building relationships with individuals, while traditional marketing focuses on mass communication"
      },

      {
        question: "What is a benefit of using micro influencers?",
        options: [
        "They have a highly engaged and loyal following",
        "They have a larger following than macro influencers",
        "They have a wider reach than macro influencers",
        "They are typically more affordable than macro influencers"
        ],
        answer: "They have a highly engaged and loyal following"
        },
        {
        question: "What is a key factor to consider when choosing an influencer for a campaign?",
        options: [
        "Their audience demographics",
        "Their personal interests and hobbies",
        "Their geographic location",
        "Their job title"
        ],
        answer: "Their audience demographics"
        },
        {
        question: "What is the difference between a macro influencer and a micro influencer?",
        options: [
        "A macro influencer has a larger following than a micro influencer",
        "A micro influencer has a larger following than a macro influencer",
        "A macro influencer is more affordable than a micro influencer",
        "There is no difference between a macro influencer and a micro influencer"
        ],
        answer: "A macro influencer has a larger following than a micro influencer"
        },
        {
        question: "What is a benefit of using influencer marketing?",
        options: [
        "It can help increase brand awareness and reach a wider audience",
        "It is typically less expensive than traditional marketing",
        "It can generate leads for the brand's sales team",
        "It can build personal relationships with customers"
        ],
        answer: "It can help increase brand awareness and reach a wider audience"
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
