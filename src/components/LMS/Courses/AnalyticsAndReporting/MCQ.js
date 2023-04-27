import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./AStyledComponents"

const questions = [  {    question: "What is mobile marketing?",    options: [      "Marketing to people who work in the mobile industry",      "Marketing through mobile devices like smartphones and tablets",      "Marketing to people who are always on the move",      "Marketing to people who use public transportation"    ],
    answer: "Marketing through mobile devices like smartphones and tablets"
  },
  {
    question: "What is the difference between a mobile app and a mobile website?",
    options: [
      "A mobile app requires an internet connection, while a mobile website does not",
      "A mobile app is downloaded from an app store, while a mobile website is accessed through a browser",
      "A mobile app is cheaper to develop than a mobile website",
      "There is no difference between a mobile app and a mobile website"
    ],
    answer: "A mobile app is downloaded from an app store, while a mobile website is accessed through a browser"
  },
  {
    question: "What is the best way to promote a mobile app?",
    options: [
      "Using social media ads",
      "Using influencer marketing",
      "Optimizing the app store listing",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "What is push notification?",
    options: [
      "A notification that is sent when the app is opened",
      "A notification that is sent when the app is closed",
      "A notification that is sent to the user's mobile device",
      "A notification that is sent to the user's email"
    ],
    answer: "A notification that is sent to the user's mobile device"
  },
  {
    question: "What is geofencing?",
    options: [
      "Using GPS to target users within a specific geographic area",
      "Using social media to target users within a specific geographic area",
      "Using email to target users within a specific geographic area",
      "Using influencer marketing to target users within a specific geographic area"
    ],
    answer: "Using GPS to target users within a specific geographic area"
  },
  {
    question: "What is mobile search?",
    options: [
      "Searching for information on a mobile device",
      "Searching for mobile devices on a search engine",
      "Searching for mobile apps on a search engine",
      "Searching for mobile plans on a search engine"
    ],
    answer: "Searching for information on a mobile device"
  },
  {
    question: "What is the best way to optimize a mobile website?",
    options: [
      "Using a responsive design",
      "Using large images",
      "Using Flash",
      "All of the above"
    ],
    answer: "Using a responsive design"
  },
  {
    question: "What is the best way to measure the success of a mobile marketing campaign?",
    options: [
      "Tracking app downloads",
      "Tracking in-app purchases",
      "Tracking website traffic from mobile devices",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "What is the best way to use SMS marketing?",
    options: [
      "Sending frequent messages to customers",
      "Sending relevant and timely messages to customers",
      "Sending messages to customers at random times",
      "Sending messages to customers without their consent"
    ],
    answer: "Sending relevant and timely messages to customers"
  },
  {
    question: "What is the difference between SMS marketing and MMS marketing?",
    options: [
      "SMS marketing is text-based, while MS marketing is multimedia-based",
      "MMS marketing is text-based, while SMS marketing is multimedia-based",
      "There is no difference between SMS marketing and MMS marketing",
      "SMS marketing is only used for promotional messages, while MMS marketing is used for transactional messages"
      ],
      answer: "SMS marketing is text-based, while MMS marketing is multimedia-based"
      },
      {
      question: "What is mobile advertising?",
      options: [
      "Advertising through mobile devices like smartphones and tablets",
      "Advertising through traditional media channels like TV and radio",
      "Advertising through billboards and outdoor signage",
      "Advertising through print media like newspapers and magazines"
      ],
      answer: "Advertising through mobile devices like smartphones and tablets"
      },
      {
      question: "What is the best way to use mobile video advertising?",
      options: [
      "Using short, attention-grabbing videos",
      "Using long, informative videos",
      "Using videos with low production quality",
      "All of the above"
      ],
      answer: "Using short, attention-grabbing videos"
      },
      {
      question: "What is the best way to use mobile display advertising?",
      options: [
      "Using large banners that take up the entire screen",
      "Using small banners that don't take up much space",
      "Using banners with low resolution images",
      "All of the above"
      ],
      answer: "Using small banners that don't take up much space"
      },
      {
      question: "What is mobile affiliate marketing?",
      options: [
      "Marketing through mobile devices like smartphones and tablets",
      "Marketing through affiliate networks",
      "Marketing through mobile apps",
      "Marketing through SMS messages"
      ],
      answer: "Marketing through mobile devices like smartphones and tablets"
      },
      {
      question: "What is mobile payment?",
      options: [
      "Making payments using a mobile device",
      "Making payments using cash",
      "Making payments using a credit card",
      "Making payments using a debit card"
      ],
      answer: "Making payments using a mobile device"
      },
      {
      question: "What is the best way to use mobile coupons?",
      options: [
      "Offering coupons that can only be redeemed in-store",
      "Offering coupons that can only be redeemed online",
      "Offering coupons that can be redeemed both in-store and online",
      "Not offering mobile coupons at all"
      ],
      answer: "Offering coupons that can be redeemed both in-store and online"
      },
      {
      question: "What is the best way to use mobile gaming in marketing?",
      options: [
      "Creating games that are fun and engaging, but not related to the brand",
      "Creating games that are educational and informative, but not related to the brand",
      "Creating games that are both fun and engaging, and related to the brand",
      "Not using mobile gaming in marketing"
      ],
      answer: "Creating games that are both fun and engaging, and related to the brand"
      },
      {
      question: "What is mobile location-based marketing?",
      options: [
      "Marketing to people who are always on the move",
      "Marketing to people who work in the mobile industry",
      "Marketing to people who are located within a specific geographic area",
      "Marketing to people who use public transportation"
      ],
      answer: "Marketing to people who are located within a specific geographic area"
      },
      {
      question: "What is the best way to use mobile social media marketing?",
      options: [
      "Using the same content as on other social media channels",
      "Using content that is specifically designed for mobile devices",  "Not using social media marketing on mobile devices",
      "Using long-form content that requires users to scroll through multiple screens"
    ],
    answer: "Using content that is specifically designed for mobile devices"},
    {
    question: "What is mobile app marketing?",
    options: [
    "Marketing apps that are designed for mobile devices",
    "Marketing apps that are designed for desktop computers",
    "Marketing mobile devices",
    "Marketing mobile accessories"
    ],
    answer: "Marketing apps that are designed for mobile devices"
    },
    {
    question: "What is mobile website optimization?",
    options: [
    "Optimizing a website for desktop computers",
    "Optimizing a website for mobile devices",
    "Optimizing a website for search engines",
    "Optimizing a website for social media"
    ],
    answer: "Optimizing a website for mobile devices"
    },
    {
    question: "What is SMS short code marketing?",
    options: [
    "Marketing through short, memorable SMS codes",
    "Marketing through long, complex SMS codes",
    "Marketing through SMS messages that are longer than usual",
    "Marketing through email messages"
    ],
    answer: "Marketing through short, memorable SMS codes"
    },
    {
    question: "What is mobile search advertising?",
    options: [
    "Advertising through search engines like Google and Bing",
    "Advertising through social media channels like Facebook and Instagram",
    "Advertising through mobile apps",
    "Advertising through SMS messages"
    ],
    answer: "Advertising through search engines like Google and Bing"
    },
    {
    question: "What is mobile email marketing?",
    options: [
    "Sending emails to people's mobile devices",
    "Sending emails to people's desktop computers",
    "Sending emails to people's work email accounts",
    "Sending emails to people's personal email accounts"
    ],
    answer: "Sending emails to people's mobile devices"
    },
    {
    question: "What is mobile push notification marketing?",
    options: [
    "Sending notifications to people's mobile devices",
    "Sending notifications to people's desktop computers",
    "Sending notifications to people's work email accounts",
    "Sending notifications to people's personal email accounts"
    ],
    answer: "Sending notifications to people's mobile devices"
    },
    {
    question: "What is mobile lead generation?",
    options: [
    "Generating leads through mobile devices like smartphones and tablets",
    "Generating leads through traditional media channels like TV and radio",
    "Generating leads through billboards and outdoor signage",
    "Generating leads through print media like newspapers and magazines"
    ],
    answer: "Generating leads through mobile devices like smartphones and tablets"
    },
    {
    question: "What is mobile customer relationship management?",
    options: [
    "Managing customer relationships through mobile devices like smartphones and tablets",
    "Managing customer relationships through email",
    "Managing customer relationships through phone calls",
    "Managing customer relationships through social media"
    ],
    answer: "Managing customer relationships through mobile devices like smartphones and tablets"
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
