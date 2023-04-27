import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./SEOStyledComponents"

const questions = [  {    question: "What does SEO stand for?",    options: ["Search Engine Optimization", "Search Engine Organization", "Search Engine Operation", "Search Engine Order"],
    answer: "Search Engine Optimization"
  },
  {
    question: "What is the main purpose of SEO?",
    options: ["To increase website traffic", "To sell products online", "To create a beautiful website design", "To optimize website speed"],
    answer: "To increase website traffic"
  },
  {
    question: "Which of the following is a black hat SEO technique?",
    options: ["Keyword research", "Link building", "Cloaking", "Content creation"],
    answer: "Cloaking"
  },
  {
    question: "What is keyword stuffing?",
    options: ["A technique for inserting keywords into content", "A technique for hiding keywords in a website's code", "A technique for removing irrelevant keywords from content", "A technique for using keywords in website URLs"],
    answer: "A technique for inserting keywords into content"
  },
  {
    question: "What is a backlink?",
    options: ["A link from one website to another", "A link from one page to another on the same website", "A link from a website to a social media page", "A link from a website to a blog post"],
    answer: "A link from one website to another"
  },
  {
    question: "What is a meta description?",
    options: ["A brief summary of a webpage's content", "The main title of a webpage", "The first paragraph of a webpage's content", "A list of keywords related to a webpage's content"],
    answer: "A brief summary of a webpage's content"
  },
  {
    question: "What is a 404 error?",
    options: ["A page not found error", "A server error", "A redirect error", "A broken link error"],
    answer: "A page not found error"
  },
  {
    question: "What is a sitemap?",
    options: ["A file that lists all the pages on a website", "A file that stores website data", "A file that contains website images", "A file that contains website scripts"],
    answer: "A file that lists all the pages on a website"
  },
  {
    question: "What is a robots.txt file?",
    options: ["A file that tells search engines which pages to index", "A file that stores website data", "A file that contains website images", "A file that contains website scripts"],
    answer: "A file that tells search engines which pages to index"
  },
  {
    question: "What is the purpose of the rel=canonical tag?",
    options: ["To prevent duplicate content issues", "To increase website speed", "To add structured data to a webpage", "To optimize website images"],
    answer: "To prevent duplicate content issues"
  },
  {
    question: "What is the purpose of alt text?",
    options: ["To describe an image for visually impaired users", "To optimize website speed", "To add structured data to a webpage", "To prevent duplicate content issues"],
    answer: "To describe an image for visually impaired users"
  },
  {
    question: "What is a meta tag?",
    options: ["An HTML tag that provides information about a webpage", "An HTML tag that displays a video on a webpage", "An HTML tag that adds a link to a webpage", "An HTML tag that adds a button to a webpage"],
    answer: "An HTML tag that provides information about a webpage"
},
{
question: "What is the purpose of heading tags in HTML?",
options: ["To provide structure to a webpage's content", "To add links to a webpage", "To display images on a webpage", "To add social media buttons to a webpage"],
answer: "To provide structure to a webpage's content"
},
{
question: "What is a long-tail keyword?",
options: ["A keyword phrase that contains three or more words", "A keyword that is highly competitive", "A keyword that has low search volume", "A keyword that is specific to a particular topic"],
answer: "A keyword phrase that contains three or more words"
},
{
question: "What is a bounce rate?",
options: ["The percentage of visitors who leave a website after viewing only one page", "The percentage of visitors who make a purchase on a website", "The percentage of visitors who return to a website within a month", "The percentage of visitors who share a website on social media"],
answer: "The percentage of visitors who leave a website after viewing only one page"
},
{
question: "What is a title tag?",
options: ["An HTML tag that defines the title of a webpage", "An HTML tag that displays a video on a webpage", "An HTML tag that adds a link to a webpage", "An HTML tag that adds a button to a webpage"],
answer: "An HTML tag that defines the title of a webpage"
},
{
question: "What is a site audit?",
options: ["A process of evaluating a website's overall health and performance", "A process of creating a website's design", "A process of optimizing a website's images", "A process of analyzing a website's traffic"],
answer: "A process of evaluating a website's overall health and performance"
},
{
question: "What is domain authority?",
options: ["A score that predicts a website's ability to rank in search engine results", "A score that measures a website's loading speed", "A score that measures a website's social media engagement", "A score that measures a website's backlinks"],
answer: "A score that predicts a website's ability to rank in search engine results"
},
{
question: "What is the purpose of a 301 redirect?",
options: ["To redirect old URLs to new ones", "To block search engines from indexing a webpage", "To add structured data to a webpage", "To optimize website images"],
answer: "To redirect old URLs to new ones"
},
{
question: "What is a site map?",
options: ["A list of all the pages on a website", "A graphical representation of a website's structure", "A file that stores website data", "A file that contains website images"],
answer: "A list of all the pages on a website"
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
