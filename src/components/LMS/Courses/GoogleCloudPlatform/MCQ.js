import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./GCPStyledComponents"

const questions = [
  {
    qnNo: 1,
    question: "Which of the following is not a Google Cloud Platform service?",
    options: [
      "Google Compute Engine",
      "Google Kubernetes Engine",
      "Google App Engine",
      "Google Blockchain Engine"
    ],
    answer: "Google Blockchain Engine"
  },
  {
    qnNo: 2,
    question: "What is the name of the Google Cloud Platform service for storing and serving large amounts of data?",
    options: [
      "Google Cloud Storage",
      "Google Cloud Bigtable",
      "Google Cloud SQL",
      "Google Cloud Dataflow"
    ],
    answer: "Google Cloud Bigtable"
  },
  {
    qnNo: 3,
    question: "Which Google Cloud Platform service provides a fully-managed, serverless platform for building and deploying applications?",
    options: [
      "Google Kubernetes Engine",
      "Google App Engine",
      "Google Cloud Functions",
      "Google Cloud Run"
    ],
    answer: "Google App Engine"
  },
  {
    qnNo: 4,
    question: "Which Google Cloud Platform service allows you to run Docker containers on a fully-managed, scalable infrastructure?",
    options: [
      "Google Compute Engine",
      "Google Kubernetes Engine",
      "Google App Engine",
      "Google Cloud Run"
    ],
    answer: "Google Kubernetes Engine"
  },
  {
    qnNo: 5,
    question: "What is the name of the Google Cloud Platform service for building and training machine learning models?",
    options: [
      "Google Cloud AutoML",
      "Google Cloud ML Engine",
      "Google Cloud Dataflow",
      "Google Cloud Vision API"
    ],
    answer: "Google Cloud ML Engine"
  },
  {
    qnNo: 6,
    question: "Which Google Cloud Platform service provides a fully-managed, scalable NoSQL document database?",
    options: [
      "Google Cloud Datastore",
      "Google Cloud Bigtable",
      "Google Cloud Spanner",
      "Google Cloud SQL"
    ],
    answer: "Google Cloud Firestore"
  },
  {
    qnNo: 7,
    question: "Which Google Cloud Platform service allows you to build and deploy containerized applications to a serverless environment?",
    options: [
      "Google Kubernetes Engine",
      "Google App Engine",
      "Google Cloud Functions",
      "Google Cloud Run"
    ],
    answer: "Google Cloud Run"
  },
  {
    qnNo: 8,
    question: "What is the name of the Google Cloud Platform service for managing and monitoring your infrastructure and applications?",
    options: [
      "Google Cloud Deployment Manager",
      "Google Cloud Console",
      "Google Cloud Monitoring",
      "Google Cloud Logging"
    ],
    answer: "Google Cloud Monitoring"
  },
  {
    qnNo: 9,
    question: "Which Google Cloud Platform service provides a fully-managed, serverless platform for running event-driven applications?",
    options: [
      "Google Kubernetes Engine",
      "Google App Engine",
      "Google Cloud Functions",
      "Google Cloud Run"
    ],
    answer: "Google Cloud Functions"
  },
  {
    qnNo: 10,
    question: "What is the name of the Google Cloud Platform service for managing and encrypting your keys and secrets?",
    options: [
      "Google Cloud Key Management Service",
      "Google Cloud Security Command Center",
      "Google Cloud IAM",
      "Google Cloud Armor"
    ],
    answer:"Google Cloud Security Command Center"
  },
  {
  qnNo: 11,
  question: "Which Google Cloud Platform service provides a fully-managed, serverless platform for processing and analyzing streaming data?",
  options: [
  "Google Cloud Pub/Sub",
  "Google Cloud Dataflow",
  "Google Cloud Bigtable",
  "Google Cloud Dataproc"
  ],
  answer: "Google Cloud Dataflow"
  },
  {
  qnNo: 12,
  question: "What is the name of the Google Cloud Platform service for managing and provisioning resources in a declarative way?",
  options: [
  "Google Cloud Deployment Manager",
  "Google Cloud Console",
  "Google Cloud Monitoring",
  "Google Cloud Logging"
  ],
  answer: "Google Cloud Deployment Manager"
  },
  {
  qnNo: 13,
  question: "Which Google Cloud Platform service provides a fully-managed, serverless platform for running containerized applications?",
  options: [
  "Google Kubernetes Engine",
  "Google App Engine",
  "Google Cloud Functions",
  "Google Cloud Run"
  ],
  answer: "Google Cloud Run"
  },
  {
  qnNo: 14,
  question: "What is the name of the Google Cloud Platform service for managing and analyzing your data?",
  options: [
  "Google Cloud Pub/Sub",
  "Google Cloud Dataflow",
  "Google Cloud Bigtable",
  "Google Cloud Dataproc"
  ],
  answer: "Google Cloud Bigtable"
  },
  {
  qnNo: 15,
  question: "Which Google Cloud Platform service provides a fully-managed, serverless platform for running Apache Spark and Apache Hadoop clusters?",
  options: [
  "Google Cloud Pub/Sub",
  "Google Cloud Dataflow",
  "Google Cloud Bigtable",
  "Google Cloud Dataproc"
  ],
  answer: "Google Cloud Dataproc"
  },
  {
  qnNo: 16,
  question: "What is the name of the Google Cloud Platform service for managing and securing your network?",
  options: [
  "Google Cloud Virtual Private Cloud",
  "Google Cloud Interconnect",
  "Google Cloud VPN",
  "Google Cloud DNS"
  ],
  answer: "Google Cloud Virtual Private Cloud"
  },
  {
  qnNo: 17,
  question: "Which Google Cloud Platform service provides a fully-managed, serverless platform for running containers on a budget?",
  options: [
  "Google Kubernetes Engine",
  "Google App Engine",
  "Google Cloud Functions",
  "Google Cloud Run"
  ],
  answer: "Google Cloud Run"
  },
  {
  qnNo: 18,
  question: "What is the name of the Google Cloud Platform service for managing and securing your identity and access?",
  options: [
  "Google Cloud IAM",
  "Google Cloud Security Command Center",
  "Google Cloud Key Management Service",
  "Google Cloud Armor"
  ],
  answer: "Google Cloud IAM"
  },
  {
  qnNo: 19,
  question: "Which Google Cloud Platform service provides a fully-managed, serverless platform for running containerized batch processing jobs?",
  options: [
  "Google Cloud Pub/Sub",
  "Google Cloud Dataflow",
  "Google Cloud Bigtable",
  "Google Cloud Dataproc"
  ],
  answer: "Google Cloud Dataflow"
  },
  {
  qnNo: 20,
  question: "What is the name of the Google Cloud Platform service for protecting your applications and services against web attacks?",
  options: [
  "Google Cloud Security Command Center",
  "Google Cloud Identity-Aware Proxy",
  "Google Cloud Armor",
  "Google Cloud Firewall"
],
answer: "Google Cloud Armor"
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
