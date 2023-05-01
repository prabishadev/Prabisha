import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./MongoDBStyledComponents"

const questions = [
  {
    qnNo: 1,
    question: "What is MongoDB?",
    options: [
      "A NoSQL database",
      "A SQL database",
      "A relational database",
      "A programming language",
    ],
    answer: "A NoSQL database",
  },
  {
    qnNo: 2,
    question: "Which of the following is NOT a data type in MongoDB?",
    options: [
      "Integer",
      "Float",
      "Date",
      "Double",
    ],
    answer: "Double",
  },
  {
    qnNo: 3,
    question: "Which of the following is true about MongoDB documents?",
    options: [
      "They can have a variable number of fields",
      "They can only have a fixed number of fields",
      "They can only have fields of a specific data type",
      "They cannot have nested fields",
    ],
    answer: "They can have a variable number of fields",
  },
  {
    qnNo: 4,
    question: "In MongoDB, a collection is equivalent to which of the following in SQL?",
    options: [
      "Table",
      "Column",
      "Row",
      "Index",
    ],
    answer: "Table",
  },
  {
    qnNo: 5,
    question: "Which operator is used to perform aggregation in MongoDB?",
    options: [
      "$sum",
      "$avg",
      "$max",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    qnNo: 6,
    question: "Which command is used to create a new database in MongoDB?",
    options: [
      "db.createDatabase()",
      "db.newDatabase()",
      "db.create()",
      "db.addDatabase()",
    ],
    answer: "db.createDatabase()",
  },
  {
    qnNo: 7,
    question: "Which of the following is NOT a valid way to insert a document into a MongoDB collection?",
    options: [
      "db.collection.insertOne()",
      "db.collection.insertMany()",
      "db.collection.insert()",
      "db.collection.create()",
    ],
    answer: "db.collection.create()",
  },
  {
    qnNo: 8,
    question: "Which operator is used to update a single field in a document in MongoDB?",
    options: [
      "$set",
      "$push",
      "$addToSet",
      "$pop",
    ],
    answer: "$set",
  },
  {
    qnNo: 9,
    question: "Which operator is used to add an element to an array field in MongoDB?",
    options: [
      "$set",
      "$push",
      "$addToSet",
      "$pop",
    ],
    answer: "$push",
  },
  {
    qnNo: 10,
    question: "Which operator is used to remove an element from an array field in MongoDB?",
    options: [
      "$set",
      "$pull",
      "$pop",
      "$remove",
    ],
    answer: "$pull",
  },
  {
    qnNo: 11,
    question: "Which command is used to find documents in a collection that match a specific criteria in MongoDB?",
    options: [
      "db.collection.find()",
      "db.collection.filter()",
      "db.collection.search()",
      "db.collection.query()",
    ],
    answer: "db.collection.find()",
  },
  {
    qnNo: 12,
    question: "Which of the following is NOT a valid query operator in MongoDB?",
    options: [
    "$gt",
    "$lt",
    "$eq",
    "$not",
    ],
    answer: "$not",
    },
    {
    qnNo: 13,
    question: "Which operator is used to limit the number of documents returned in a query in MongoDB?",
    options: [
    "$limit",
    "$skip",
    "$count",
    "$sort",
    ],
    answer: "$limit",
    },
    {
    qnNo: 14,
    question: "Which operator is used to sort the results of a query in MongoDB?",
    options: [
    "$sort",
    "$limit",
    "$skip",
    "$count",
    ],
    answer: "$sort",
    },
    {
    qnNo: 15,
    question: "Which of the following is NOT a type of index supported by MongoDB?",
    options: [
    "Single field index",
    "Compound index",
    "Text index",
    "Spatial index",
    ],
    answer: "Spatial index",
    },
    {
    qnNo: 16,
    question: "Which command is used to create an index in MongoDB?",
    options: [
    "db.collection.createIndex()",
    "db.collection.addIndex()",
    "db.collection.newIndex()",
    "db.collection.index()",
    ],
    answer: "db.collection.createIndex()",
    },
    {
    qnNo: 17,
    question: "Which of the following is a feature of MongoDB's sharding architecture?",
    options: [
    "Horizontal scalability",
    "ACID transactions",
    "Object-relational mapping",
    "Vertical scalability",
    ],
    answer: "Horizontal scalability",
    },
    {
    qnNo: 18,
    question: "Which command is used to enable sharding for a database in MongoDB?",
    options: [
    "sh.enable()",
    "sh.addShard()",
    "sh.enableSharding()",
    "sh.addDatabase()",
    ],
    answer: "sh.enableSharding()",
    },
    {
    qnNo: 19,
    question: "Which command is used to add a shard to a MongoDB cluster?",
    options: [
    "sh.add()",
    "sh.addShard()",
    "sh.createShard()",
    "sh.connect()",
    ],
    answer: "sh.addShard()",
    },
    {
    qnNo: 20,
    question: "Which of the following is a tool for monitoring and administering MongoDB?",
    options: [
    "MongoDB Compass",
    "MongoDB Atlas",
    "MongoDB Shell",
    "All of the above",
    ],
    answer: "All of the above",
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
