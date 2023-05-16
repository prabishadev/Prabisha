import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./NEOBStyledComponents"

const questions = [  {    qnNo: 1,    question: "What does S3 stand for in Amazon Web Services?",    options: [      "Simple Storage Service",      "Server Storage System",      "Secure Storage Solution",      "Static Storage System",    ],
    answer: "Simple Storage Service",
  },
  {
    qnNo: 2,
    question: "What is the maximum size of an object that can be stored in S3?",
    options: ["2 TB", "5 TB", "10 TB", "20 TB"],
    answer: "5 TB",
  },
  {
    qnNo: 3,
    question:
      "What is the AWS service that allows you to run code without provisioning or managing servers?",
    options: [
      "Amazon Elastic Compute Cloud (EC2)",
      "AWS Lambda",
      "Amazon Elastic Block Store (EBS)",
      "Amazon Elastic File System (EFS)",
    ],
    answer: "AWS Lambda",
  },
  {
    qnNo: 4,
    question:
      "What is the name of the AWS service that provides a fully-managed relational database?",
    options: [
      "Amazon RDS",
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon Aurora",
    ],
    answer: "Amazon RDS",
  },
  {
    qnNo: 5,
    question:
      "What is the AWS service that provides a way to distribute traffic to multiple resources?",
    options: [
      "Amazon Route 53",
      "Amazon Elastic Load Balancer",
      "Amazon Simple Notification Service",
      "Amazon Simple Queue Service",
    ],
    answer: "Amazon Elastic Load Balancer",
  },
  {
    qnNo: 6,
    question:
      "What is the AWS service that provides scalable computing capacity in the cloud?",
    options: [
      "Amazon Elastic Compute Cloud (EC2)",
      "AWS Lambda",
      "Amazon Elastic Container Service (ECS)",
      "Amazon Elastic Kubernetes Service (EKS)",
    ],
    answer: "Amazon Elastic Compute Cloud (EC2)",
  },
  {
    qnNo: 7,
    question:
      "What is the AWS service that provides a scalable NoSQL database?",
    options: [
      "Amazon RDS",
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon Aurora",
    ],
    answer: "Amazon DynamoDB",
  },
  {
    qnNo: 8,
    question:
      "What is the AWS service that provides a way to store and retrieve data using web services?",
    options: [
      "Amazon S3",
      "Amazon EBS",
      "Amazon EFS",
      "Amazon Glacier",
    ],
    answer: "Amazon S3",
  },
  {
    qnNo: 9,
    question:
      "What is the AWS service that provides a way to store and process large amounts of data?",
    options: [
      "Amazon S3",
      "Amazon Kinesis",
      "Amazon Redshift",
      "Amazon EMR",
    ],
    answer: "Amazon Redshift",
  },
  {
    qnNo: 10,
    question:
      "What is the AWS service that provides a way to automate infrastructure deployment?",
    options: [
      "Amazon CloudFront",
      "Amazon CloudFormation",
      "AWS Elastic Beanstalk",
      "Amazon EC2 Container Service (ECS)",
    ],
    answer: "Amazon CloudFormation",
  },
  {
    
      qnNo: 11,
      question:
      "What is the AWS service that provides a way to send and receive messages between distributed systems?",
      options: [
      "Amazon SNS",
      "Amazon SQS",
      "Amazon Kinesis",
      "Amazon SWF",
      ],
      answer: "Amazon SQS",
      },
      {
      qnNo: 12,
      question:
      "What is the AWS service that provides a way to monitor and manage your AWS resources?",
      options: [
      "Amazon CloudFront",
      "Amazon CloudWatch",
      "AWS Config",
      "AWS CloudTrail",
      ],
      answer: "Amazon CloudWatch",
      },
      {
      qnNo: 13,
      question:
      "What is the AWS service that provides a way to protect your web applications from common web exploits?",
      options: [
      "AWS Shield",
      "AWS WAF",
      "AWS Firewall Manager",
      "Amazon GuardDuty",
      ],
      answer: "AWS WAF",
      },
      {
      qnNo: 14,
      question:
      "What is the AWS service that provides a way to create and manage virtual private clouds?",
      options: [
      "Amazon VPC",
      "Amazon EC2",
      "Amazon RDS",
      "Amazon S3",
      ],
      answer: "Amazon VPC",
      },
      {
      qnNo: 15,
      question:
      "What is the AWS service that provides a way to create and manage containerized applications?",
      options: [
      "Amazon EC2 Container Service (ECS)",
      "Amazon Elastic Kubernetes Service (EKS)",
      "AWS Lambda",
      "Amazon S3",
      ],
      answer: "Amazon Elastic Kubernetes Service (EKS)",
      },
      {
      qnNo: 16,
      question:
      "What is the AWS service that provides a way to build, train, and deploy machine learning models?",
      options: [
      "Amazon Machine Learning",
      "Amazon SageMaker",
      "Amazon Rekognition",
      "Amazon Lex",
      ],
      answer: "Amazon SageMaker",
      },
      {
      qnNo: 17,
      question:
      "What is the AWS service that provides a way to store and manage files in the cloud?",
      options: [
      "Amazon S3",
      "Amazon EBS",
      "Amazon EFS",
      "Amazon Glacier",
      ],
      answer: "Amazon S3",
      },
      {
      qnNo: 18,
      question:
      "What is the AWS service that provides a way to create and manage databases in the cloud?",
      options: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon Aurora",
      ],
      answer: "Amazon RDS",
      },
      {
      qnNo: 19,
      question:
      "What is the AWS service that provides a way to automate code deployments?",
      options: [
      "AWS CodePipeline",
      "AWS CodeDeploy",
      "AWS CodeCommit",
      "AWS CodeBuild",
      ],
      answer: "AWS CodeDeploy",
      },
      {
      qnNo: 20,
      question:
      "What is the AWS service that provides a way to manage and govern AWS resources?",
      options: [
      "AWS CloudFormation",
      "AWS CloudTrail",
      "AWS Config",
      "AWS Organizations",
      ],
      answer: "AWS Organizations",
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
