import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./WSFStyledComponents"

const questions = [
  {
    qnNo:1,
    question: "Which of the following is not a common web security threat?",
    options: ["Cross-site scripting (XSS)", "SQL injection", "Buffer overflow", "None of the above"],
    answer: "None of the above"
  },
  {
    qnNo:2,
    question: "What is the purpose of HTTPS?",
    options: ["To protect against cross-site scripting (XSS)", "To protect against SQL injection", "To encrypt web traffic", "To speed up web page loading"],
    answer: "To encrypt web traffic"
  },
  {
    qnNo:3,
    question: "What is the same-origin policy?",
    options: ["A policy that restricts how a web page can interact with resources from different origins", "A policy that allows any web page to interact with any resource", "A policy that only allows HTTPS traffic", "A policy that only allows HTTP traffic"],
    answer: "A policy that restricts how a web page can interact with resources from different origins"
  },
  {
    qnNo:4,
    question: "What is a password manager?",
    options: ["A tool that stores and manages user passwords securely", "A tool that blocks web traffic from certain origins", "A tool that scans web pages for vulnerabilities", "A tool that speeds up web page loading"],
    answer: "A tool that stores and manages user passwords securely"
  },
  {
    qnNo:5,
    question: "What is two-factor authentication?",
    options: ["A security mechanism that requires two forms of identification to access a resource", "A security mechanism that blocks web traffic from certain origins", "A security mechanism that scans web pages for vulnerabilities", "A security mechanism that speeds up web page loading"],
    answer: "A security mechanism that requires two forms of identification to access a resource"
  },
  {
    qnNo:6,
    question: "What is a denial-of-service (DoS) attack?",
    options: ["An attack that floods a server or network with traffic to make it unavailable", "An attack that steals user data from a server or network", "An attack that modifies the content of a web page", "An attack that redirects web traffic to a different site"],
    answer: "An attack that floods a server or network with traffic to make it unavailable"
  },
  {
    qnNo:7,
    question: "What is a firewall?",
    options: ["A security device that monitors and controls network traffic", "A tool that scans web pages for vulnerabilities", "A tool that stores and manages user passwords securely", "A tool that speeds up web page loading"],
    answer: "A security device that monitors and controls network traffic"
  },
  {
    qnNo:8,
    question: "What is a web application firewall (WAF)?",
    options: ["A security device that monitors and controls web traffic", "A tool that scans web pages for vulnerabilities", "A tool that stores and manages user passwords securely", "A tool that speeds up web page loading"],
    answer: "A security device that monitors and controls web traffic"
  },
  {
    qnNo:9,
    question: "What is a CAPTCHA?",
    options: ["A security mechanism that verifies that a user is human and not a bot", "A security mechanism that blocks web traffic from certain origins", "A security mechanism that scans web pages for vulnerabilities", "A security mechanism that speeds up web page loading"],
    answer: "A security mechanism that verifies that a user is human and not a bot"
  },
  {
    qnNo:10,
    question: "What is cross-site scripting (XSS)?",
    options: ["An attack that allows an attacker to execute scripts in a victim's browser", "An attack that floods a server or network with traffic to make it unavailable", "An attack that steals user data from a server or network", "An attack that modifies the content of a web page"],
    answer: "An attack that allows an attacker to execute scripts in a victim's browser"
    },
    {
      qnNo:11,
    question: "What is SQL injection?",
    options: ["An attack that exploits a vulnerability in a web application's database layer", "An attack that floods a server or network with traffic to make it unavailable", "An attack that steals user data from a server or network", "An attack that modifies the content of a web page"],
    answer: "An attack that exploits a vulnerability in a web application's database layer"
    },
    {
      qnNo:12,
    question: "What is the purpose of input validation?",
    options: ["To prevent malicious input from causing unexpected behavior in a web application", "To speed up web page loading", "To make a web application more visually appealing", "To allow any input to be accepted by a web application"],
    answer: "To prevent malicious input from causing unexpected behavior in a web application"
    },
    {
      qnNo:13,
    question: "What is the principle of least privilege?",
    options: ["A security principle that restricts a user's access to only what is necessary to perform their job", "A security principle that allows any user to access any resource", "A security principle that blocks web traffic from certain origins", "A security principle that only allows HTTP traffic"],
    answer: "A security principle that restricts a user's access to only what is necessary to perform their job"
    },
    {
      qnNo:14,
    question: "What is a vulnerability scan?",
    options: ["A tool that scans a web application or network for known vulnerabilities", "A tool that stores and manages user passwords securely", "A tool that blocks web traffic from certain origins", "A tool that speeds up web page loading"],
    answer: "A tool that scans a web application or network for known vulnerabilities"
    },
    {
      qnNo:15,
    question: "What is network segmentation?",
    options: ["A security technique that divides a network into smaller subnetworks to improve security", "A security technique that allows any user to access any resource", "A security technique that blocks web traffic from certain origins", "A security technique that only allows HTTPS traffic"],
    answer: "A security technique that divides a network into smaller subnetworks to improve security"
    },
    {
      qnNo:16,
    question: "What is a honeypot?",
    options: ["A security mechanism that simulates a vulnerable system to attract attackers", "A tool that scans web pages for vulnerabilities", "A tool that stores and manages user passwords securely", "A tool that speeds up web page loading"],
    answer: "A security mechanism that simulates a vulnerable system to attract attackers"
    },
    {
      qnNo:17,
    question: "What is a digital certificate?",
    options: ["A digital document that verifies the identity of a website or user", "A tool that blocks web traffic from certain origins", "A tool that scans web pages for vulnerabilities", "A tool that speeds up web page loading"],
    answer: "A digital document that verifies the identity of a website or user"
    },
    {
      qnNo:18,
    question: "What is a web server?",
    options: ["A computer program that serves web pages to clients", "A tool that scans web pages for vulnerabilities", "A tool that stores and manages user passwords securely", "A tool that speeds up web page loading"],
    answer: "A computer program that serves web pages to clients"
    },{
      qnNo:19,
      question: "What is cross-site scripting (XSS)?",
      options: ["An attack that allows an attacker to execute scripts in a victim's browser", "An attack that exploits a vulnerability in a web application's database layer", "An attack that floods a server or network with traffic to make it unavailable", "An attack that steals user data from a server or network"],
      answer: "An attack that allows an attacker to execute scripts in a victim's browser"
      },
      {
        qnNo:20,
        question: "What is the difference between HTTP and HTTPS?",
        options: ["HTTPS encrypts data sent between a client and server, while HTTP does not", "HTTP is faster than HTTPS", "HTTPS only works on mobile devices, while HTTP works on all devices", "HTTP is more secure than HTTPS"],
        answer: "HTTPS encrypts data sent between a client and server, while HTTP does not"
        },]
  
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
