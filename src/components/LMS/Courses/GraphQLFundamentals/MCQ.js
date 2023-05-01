import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./GQLStyledComponents"

const questions = [
  {
    qnNo: 1,
    question: "What does GraphQL stand for?",
    options: [
      "Graph Query Language",
      "Graph Query Logic",
      "Graph Query Loader",
      "Graph Query Loader Language"
    ],
    answer: "Graph Query Language"
  },
  {
    qnNo: 2,
    question: "Which company developed GraphQL?",
    options: [
      "Google",
      "Facebook",
      "Microsoft",
      "Apple"
    ],
    answer: "Facebook"
  },
  {
    qnNo: 3,
    question: "What type of data does GraphQL use to represent the schema?",
    options: [
      "JSON",
      "XML",
      "YAML",
      "None of the above"
    ],
    answer: "None of the above"
  },
  {
    qnNo: 4,
    question: "What is a resolver in GraphQL?",
    options: [
      "A function that returns data for a field",
      "A type of mutation operation",
      "A way to handle errors in a query",
      "A way to cache query results"
    ],
    answer: "A function that returns data for a field"
  },
  {
    qnNo: 5,
    question: "What is the purpose of the GraphQL introspection system?",
    options: [
      "To allow clients to query the schema",
      "To validate queries before execution",
      "To handle subscriptions in real-time",
      "To encrypt data in transit"
    ],
    answer: "To allow clients to query the schema"
  },
  {
    qnNo: 6,
    question: "What is the difference between a query and a mutation in GraphQL?",
    options: [
      "Queries are used to fetch data, mutations are used to modify data",
      "Queries and mutations are interchangeable terms",
      "Queries are used for server-side operations, mutations are used for client-side operations",
      "There is no difference between queries and mutations"
    ],
    answer: "Queries are used to fetch data, mutations are used to modify data"
  },
  {
    qnNo: 7,
    question: "What is the purpose of a fragment in GraphQL?",
    options: [
      "To reuse parts of a query",
      "To handle errors in a query",
      "To generate random data for a query",
      "To cache query results"
    ],
    answer: "To reuse parts of a query"
  },
  {
    qnNo: 8,
    question: "What is a directive in GraphQL?",
    options: [
      "A way to add metadata to a field or fragment",
      "A type of query operation",
      "A way to handle errors in a query",
      "A way to paginate query results"
    ],
    answer: "A way to add metadata to a field or fragment"
  },
  {
    qnNo: 9,
    question: "What is the purpose of a schema in GraphQL?",
    options: [
      "To define the structure of the data graph",
      "To define the types of queries and mutations that can be executed",
      "To define the structure of the response data",
      "To define the authorization rules for the API"
    ],
    answer: "To define the structure of the data graph"
  },
  {
    qnNo: 10,
    question: "What is the purpose of a subscription in GraphQL?",
    options: [
      "To receive real -time updates to data",
      "To filter data in a query",
      "To generate random data for a query",
      "To handle errors in a query"
      ],
      answer: "To receive real-time updates to data"
      },
      {
      qnNo: 11,
      question: "What is the purpose of a resolver argument in GraphQL?",
      options: [
      "To pass parameters to a resolver function",
      "To specify the return type of a resolver function",
      "To handle errors in a query",
      "To cache query results"
      ],
      answer: "To pass parameters to a resolver function"
      },
      {
      qnNo: 12,
      question: "What is the purpose of a variable in a GraphQL query?",
      options: [
      "To parameterize the query",
      "To specify the return type of the query",
      "To handle errors in a query",
      "To cache query results"
      ],
      answer: "To parameterize the query"
      },
      {
      qnNo: 13,
      question: "What is the difference between a fragment and a query in GraphQL?",
      options: [
      "A fragment is a reusable part of a query, a query is a specific request for data",
      "A query is a reusable part of a fragment, a fragment is a specific request for data",
      "There is no difference between a fragment and a query",
      "A query is used for server-side operations, a fragment is used for client-side operations"
      ],
      answer: "A fragment is a reusable part of a query, a query is a specific request for data"
      },
      {
      qnNo: 14,
      question: "What is the purpose of a union type in GraphQL?",
      options: [
      "To allow a field to have multiple possible types",
      "To group related fields together",
      "To handle errors in a query",
      "To specify the return type of a query"
      ],
      answer: "To allow a field to have multiple possible types"
      },
      {
      qnNo: 15,
      question: "What is the purpose of an interface type in GraphQL?",
      options: [
      "To define a set of fields that can be implemented by other object types",
      "To group related fields together",
      "To handle errors in a query",
      "To specify the return type of a query"
      ],
      answer: "To define a set of fields that can be implemented by other object types"
      },
      {
      qnNo: 16,
      question: "What is the purpose of a subscription resolver in GraphQL?",
      options: [
      "To provide real-time updates to the data",
      "To fetch data for a subscription",
      "To handle errors in a subscription",
      "To cache subscription results"
      ],
      answer: "To provide real-time updates to the data"
      },
      {
      qnNo: 17,
      question: "What is the purpose of a schema stitching in GraphQL?",
      options: [
      "To combine multiple GraphQL schemas into a single API",
      "To break a large GraphQL schema into smaller, more manageable schemas",
      "To handle errors in a schema",
      "To cache schema results"
      ],
      answer: "To combine multiple GraphQL schemas into a single API"
      },
      {
        qnNo: 18,
        question: "What is the purpose of an introspection query in GraphQL?",
        options: [
        "To query the schema for metadata about the API",
        "To handle errors in a query",
        "To cache query results",
        "To generate random data for a query" ],
        answer: "To query the schema for metadata about the API"
        },
        {
        qnNo: 19,
        question: "What is the purpose of a directive in GraphQL?",
        options: [
        "To modify the behavior of a field or fragment",
        "To group related fields together",
        "To handle errors in a query",
        "To specify the return type of a query"
        ],
        answer: "To modify the behavior of a field or fragment"
        },
        {
        qnNo: 20,
        question: "What is the purpose of a client in GraphQL?",
        options: [
        "To send requests to a GraphQL server and receive responses",
        "To provide real-time updates to the data",
        "To handle errors in a query",
        "To cache query results"
        ],
        answer: "To send requests to a GraphQL server and receive responses"
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
