import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./SMMStyledComponents"

const questions = [  {    question: "What is the main goal of social media marketing?",    options: [      "To generate leads",      "To increase website traffic",      "To promote brand awareness",      "To sell products directly to customers"    ],
    answer: "To promote brand awareness"
  },
  {
    question: "What is a social media algorithm?",
    options: [
      "A set of rules that determines how content is ranked and displayed on social media platforms",
      "A tool for creating social media posts",
      "A system for scheduling social media posts",
      "A method for measuring social media engagement"
    ],
    answer: "A set of rules that determines how content is ranked and displayed on social media platforms"
  },
  {
    question: "What is the best way to determine which social media platforms to use for your business?",
    options: [
      "Choose the platforms that your competitors are using",
      "Use every platform available to maximize reach",
      "Select platforms based on where your target audience spends their time",
      "Choose the platform that you are most comfortable using"
    ],
    answer: "Select platforms based on where your target audience spends their time"
  },
  {
    question: "What is the ideal length for a social media post?",
    options: [
      "Less than 50 characters",
      "Between 50 and 100 characters",
      "Between 100 and 150 characters",
      "Between 150 and 200 characters"
    ],
    answer: "Between 100 and 150 characters"
  },
  {
    question: "What is a social media influencer?",
    options: [
      "A person with a large following on social media who can promote products and services to their audience",
      "A paid advertising platform on social media",
      "A tool for scheduling social media posts",
      "A method for measuring social media engagement"
    ],
    answer: "A person with a large following on social media who can promote products and services to their audience"
  },
  {
    question: "What is the best way to engage with your audience on social media?",
    options: [
      "Post updates regularly, but do not respond to comments or messages",
      "Only post promotional content to encourage sales",
      "Respond promptly to comments and messages, and participate in conversations",
      "Ignore negative comments and reviews"
    ],
    answer: "Respond promptly to comments and messages, and participate in conversations"
  },
  {
    question: "What is a social media listening tool?",
    options: [
      "A tool for scheduling social media posts",
      "A method for measuring social media engagement",
      "A platform for creating social media ads",
      "A tool for monitoring social media for brand mentions and customer feedback"
    ],
    answer: "A tool for monitoring social media for brand mentions and customer feedback"
  },
  {
    question: "What is a social media hashtag?",
    options: [
      "A paid advertising platform on social media",
      "A tool for scheduling social media posts",
      "A method for measuring social media engagement",
      "A word or phrase preceded by the # symbol used to categorize and organize social media content"
    ],
    answer: "A word or phrase preceded by the # symbol used to categorize and organize social media content"
  },
  {
    question: "What is the ideal number of hashtags to use on Instagram?",
    options: [
      "1-2 hashtags",
      "3-4 hashtags",
      "5-6 hashtags",
      "7-8 hashtags"
    ],
    answer: "5-6 hashtags"},
    {
    question: "What is the best way to measure the success of a social media campaign?",
    options: [
    "Number of followers gained",
    "Number of likes and comments",
    "Number of clicks and conversions",
    "All of the above"
    ],
    answer: "Number of clicks and conversions"
    },
    {
    question: "What is a social media crisis?",
    options: [
    "A situation where a company's social media account is hacked",
    "A situation where a company's social media post receives negative feedback",
    "A situation where a company's social media account is deleted",
    "A situation where a company's social media account is suspended"
    ],
    answer: "A situation where a company's social media post receives negative feedback"
    },
    {
    question: "What is the best way to handle a social media crisis?",
    options: [
    "Delete the offending post and pretend it never happened",
    "Ignore the negative feedback and hope it goes away",
    "Respond promptly and professionally, and offer a solution or apology",
    "Blame the situation on someone else"
    ],
    answer: "Respond promptly and professionally, and offer a solution or apology"
    },
    {
    question: "What is the best way to use social media for customer service?",
    options: [
    "Direct customers to a phone number or email address for support",
    "Respond promptly to messages and comments, and offer assistance or solutions",
    "Ignore customer complaints on social media",
    "Use automated chatbots to handle customer service inquiries"
    ],
    answer: "Respond promptly to messages and comments, and offer assistance or solutions"
    },
    {
    question: "What is the best way to build relationships with social media followers?",
    options: [
    "Only post promotional content",
    "Ignore comments and messages",
    "Respond promptly and personally to comments and messages, and participate in conversations",
    "Delete negative comments and reviews"
    ],
    answer: "Respond promptly and personally to comments and messages, and participate in conversations"
    },
    {
    question: "What is the difference between organic and paid social media reach?",
    options: [
    "Organic reach refers to the number of people who see your content without any advertising, while paid reach refers to the number of people who see your content as a result of paid advertising",
    "Organic reach refers to the number of people who see your content as a result of paid advertising, while paid reach refers to the number of people who see your content without any advertising",
    "Organic reach refers to the number of people who interact with your content, while paid reach refers to the number of people who see your content",
    "Organic reach refers to the number of people who like and share your content, while paid reach refers to the number of people who comment on your content"
    ],
    answer: "Organic reach refers to the number of people who see your content without any advertising, while paid reach refers to the number of people who see your content as a result of paid advertising"
    },
    {
        question: "What is the best way to work with social media influencers?",
        options: [
        "Send them free products and hope they promote them on social media",
        "Pay them to promote your products or services on social media",
        "Ignore them and focus on traditional advertising methods",
        "Ask them to promote your products or services without offering any compensation"
        ],
        answer: "Pay them to promote your products or services on social media"
        },
        {
        question: "What is a social media algorithm?",
        options: [
        "A set of rules that determines what content is shown to users on their social media feeds",
        "A tool for tracking social media metrics and analytics",
        "A type of social media post that is only visible to a select group of followers",
        "A program for scheduling social media posts in advance"
        ],
        answer: "A set of rules that determines what content is shown to users on their social media feeds"
        },
        {
        question: "What is the best time to post on social media?",
        options: [
        "During peak business hours on weekdays",
        "Late at night on weekends",
        "In the early morning on weekdays",
        "During off-hours on weekends"
        ],
        answer: "During peak business hours on weekdays"
        },
        {
        question: "What is the difference between social media monitoring and social media listening?",
        options: [
        "Social media monitoring involves tracking social media mentions of your brand or keywords, while social media listening involves analyzing and understanding the sentiment behind those mentions",
        "Social media monitoring involves tracking social media metrics and analytics, while social media listening involves tracking social media mentions of your brand or keywords",
        "Social media monitoring involves responding to customer complaints on social media, while social media listening involves posting promotional content on social media",
        "Social media monitoring involves tracking your competitors' social media accounts, while social media listening involves tracking your own social media accounts"
        ],
        answer: "Social media monitoring involves tracking social media mentions of your brand or keywords, while social media listening involves analyzing and understanding the sentiment behind those mentions"
        },
        {
        question: "What is a social media analytics tool?",
        options: [
        "A program for scheduling social media posts in advance",
        "A tool for tracking social media metrics and analytics",
        "A type of social media post that is only visible to a select group of followers",
        "A program for creating social media graphics and images"
        ],
        answer: "A tool for tracking social media metrics and analytics"
        },
        {
            question: "What is a social media crisis?",
            options: [
            "A situation where a company's social media account is hacked",
            "A situation where a company's social media post receives negative feedback",
            "A situation where a company's social media account is deleted",
            "A situation where a company's social media account is suspended"
            ],
            answer: "A situation where a company's social media post receives negative feedback"
            }]
  
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
