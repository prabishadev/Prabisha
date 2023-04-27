import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./WSWPStyledComponents"

const questions = [
  {
    qnNo:1,
    question: "What is web scraping?",
    options: [
      "The process of designing websites",
      "The process of extracting data from websites using automated software tools",
      "The process of hosting websites on a server",
      "The process of optimizing websites for search engines"
    ],
    answer: "The process of extracting data from websites using automated software tools"
  },
  {
    qnNo:2,
    question: "Which Python library is commonly used for web scraping?",
    options: [
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
      "Beautiful Soup"
    ],
    answer: "Beautiful Soup"
  },
  {
    qnNo:3,
    question: "What is the purpose of robots.txt file?",
    options: [
      "To allow web crawlers to access all parts of a website",
      "To prevent web crawlers from accessing certain parts of a website",
      "To improve the speed and performance of a website",
      "To optimize a website for search engines"
    ],
    answer: "To prevent web crawlers from accessing certain parts of a website"
  },
  {
    qnNo:4,
    question: "What is the HTTP status code for a successful request?",
    options: [
      "200",
      "300",
      "400",
      "500"
    ],
    answer: "200"
  },
  {
    qnNo:5,
    question: "What is the difference between XPath and CSS selectors?",
    options: [
      "XPath is used for HTML elements while CSS selectors are used for XML elements",
      "XPath is more efficient than CSS selectors",
      "CSS selectors are easier to use than XPath",
      "XPath is more powerful than CSS selectors"
    ],
    answer: "XPath is more powerful than CSS selectors"
  },
  {
    qnNo:6,
    question: "What is the difference between GET and POST requests?",
    options: [
      "GET requests are used to retrieve data while POST requests are used to send data",
      "POST requests are faster than GET requests",
      "GET requests are more secure than POST requests",
      "POST requests are used to retrieve data while GET requests are used to send data"
    ],
    answer: "GET requests are used to retrieve data while POST requests are used to send data"
  },
  {
    qnNo:7,
    question: "What is a common method for handling pagination when scraping multiple pages?",
    options: [
      "Using a loop to iterate through each page",
      "Using a recursive function to navigate through each page",
      "Using a dictionary to store page numbers and URLs",
      "Using a list comprehension to extract data from each page"
    ],
    answer: "Using a loop to iterate through each page"
  },
  {
    qnNo:8,
    question: "What is the purpose of the requests module in Python?",
    options: [
      "To send and receive HTTP requests and responses",
      "To parse HTML and XML documents",
      "To extract data from websites using regular expressions",
      "To scrape data from websites using automated tools"
    ],
    answer: "To send and receive HTTP requests and responses"
  },
  {
    qnNo:9,
    question: "What is a common method for handling JavaScript-rendered content when scraping?",
    options: [
      "Using a headless browser like Selenium",
      "Using a regular expression to extract the content",
      "Using a dictionary to store the content",
      "Using a for loop to iterate through the content"
    ],
    answer: "Using a headless browser like Selenium"
  },
  {
    qnNo:10,
    question: "What is a common way to handle errors when scraping?",
    options: [  "Using try/except blocks to catch and handle exceptions",
    "Ignoring errors and continuing with the scraping process",
    "Stopping the scraping process and restarting it later",
    "Manually fixing errors in the scraped data"
  ],
  answer: "Using try/except blocks to catch and handle exceptions"
},
{
  qnNo:11,
question: "What is the purpose of user-agent in web scraping?",
options: [
"To identify the user accessing the website",
"To block web crawlers from accessing the website",
"To provide information about the web scraper accessing the website",
"To improve the performance of the website"
],
answer: "To provide information about the web scraper accessing the website"
},
{
  qnNo:12,
question: "What is the purpose of the scrapy framework in Python?",
options: [
"To extract data from websites using regular expressions",
"To scrape data from websites using automated tools",
"To parse HTML and XML documents",
"To handle HTTP requests and responses"
],
answer: "To scrape data from websites using automated tools"
},
{
  qnNo:13,
question: "What is the purpose of the re module in Python?",
options: [
"To extract data from websites using regular expressions",
"To scrape data from websites using automated tools",
"To parse HTML and XML documents",
"To handle HTTP requests and responses"
],
answer: "To extract data from websites using regular expressions"
},
{
  qnNo:14,
question: "What is a common method for storing scraped data?",
options: [
"Using a database like MySQL or PostgreSQL",
"Using a dictionary to store the data in memory",
"Using a CSV or JSON file to store the data",
"Using a list to store the data in memory"
],
answer: "Using a database like MySQL or PostgreSQL"
},
{
  qnNo:15,
question: "What is the purpose of a web scraper's robots.txt file?",
options: [
"To instruct search engines which pages to crawl",
"To instruct web scrapers which pages to crawl",
"To block access to a website",
"To improve website performance"
],
answer: "To instruct web scrapers which pages to crawl"
},
{
  qnNo:16,
question: "What is the purpose of an API in web scraping?",
options: [
"To block web scrapers from accessing a website",
"To provide a structured way to access data from a website",
"To improve the performance of a website",
"To automate the process of scraping data from a website"
],
answer: "To provide a structured way to access data from a website"
},
{
  qnNo:17,
question: "What is a common method for avoiding IP blocks when scraping?",
options: [
"Using a proxy server to route requests through different IP addresses",
"Using a VPN to mask the user's IP address",
"Using a headless browser like Selenium",
"Using a dictionary to store IP addresses and user agents"
],
answer: "Using a proxy server to route requests through different IP addresses"
},
{
  qnNo:18,
question: "What is the purpose of the BeautifulSoup object in web scraping with Python?",
options: [
"To parse HTML and XML documents",
"To send and receive HTTP requests and responses",
"To extract data from websites using regular expressions",
"To scrape data from websites using automated tools"
],
answer: "To scrape data from websites using automated tools"
},{
  qnNo:19,
  question: "Which of the following is an example of a web scraping project that could potentially violate ethical guidelines?",
  options: [
  "Scraping weather data to create a weather app",
  "Scraping job postings to analyze hiring trends",
  "Scraping personal information from social media profiles",
  "Scraping news articles to create a news aggregator app"
  ],
  answer: "Scraping personal information from social media profiles"
  },
  {
    qnNo:20,
  question: "What is the purpose of the selenium package in Python?",
  options: [
  "To extract data from websites using regular expressions",
  "To scrape data from websites using automated tools",
  "To parse HTML and XML documents",
  "To automate web browser interactions"
  ],
  answer: "To automate web browser interactions"
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
