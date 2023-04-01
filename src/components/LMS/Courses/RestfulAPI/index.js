import React, { useState } from "react";

import {
    CourseContentContainer,
    CourseImage,
    ConceptTitle,
    ConceptDescription,
    DownloadCertificate,
    BtnContainer,
    CountContainer,
    Score,
    QNSCount,
    ExamPassed,
    Option,
    StartExam,
    Certificate,
    FailedMessage,
    ExamContainer,
    Question,
    ExamTitle,
} from "./RAStyledComponents";

const questions = [
    {
        question: "What is Responsive Web Design?",
        options: [
            "A web design technique that allows websites to adapt to different screen sizes",
            "A web design technique that makes websites look good on desktop computers",
            "A web design technique that only works on mobile devices",
            "A web design technique that allows websites to be downloaded faster",
        ],
        answer:
            "A web design technique that allows websites to adapt to different screen sizes",
    },
    {
        question:
            "What is the difference between a responsive website and a mobile app?",
        options: [
            "A responsive website can be accessed through a mobile browser while a mobile app needs to be downloaded and installed",
            "A mobile app is cheaper to develop than a responsive website",
            "A mobile app is faster than a responsive website",
            "A responsive website has more features than a mobile app",
        ],
        answer:
            "A responsive website can be accessed through a mobile browser while a mobile app needs to be downloaded and installed",
    },
    {
        question: "What is a viewport?",
        options: [
            "The visible area of a webpage",
            "The code that makes a webpage responsive",
            "The area where the logo is displayed on a webpage",
            "The area where the navigation menu is displayed on a webpage",
        ],
        answer: "The visible area of a webpage",
    },
    {
        question: "What is the purpose of media queries in responsive design?",
        options: [
            "To apply specific styles to different screen sizes",
            "To make the website faster",
            "To hide elements on smaller screens",
            "To make the website more interactive",
        ],
        answer: "To apply specific styles to different screen sizes",
    },
    {
        question: "What is a CSS breakpoint?",
        options: [
            "The point where a website breaks due to a coding error",
            "The point where a website changes its layout based on screen size",
            "The point where a website stops working on mobile devices",
            "The point where a website changes its font size",
        ],
        answer: "The point where a website changes its layout based on screen size",
    },
    {
        question: "What is the best way to test if a website is responsive?",
        options: [
            "Resize the browser window and see if the website adapts",
            "Use a mobile device and see if the website looks good",
            "Use a desktop computer and see if the website looks good",
            "Ask other people if the website looks good",
        ],
        answer: "Resize the browser window and see if the website adapts",
    },
    {
        question: "What is the role of the meta viewport tag in responsive design?",
        options: [
            "To set the width and initial scale of the viewport",
            "To hide elements on smaller screens",
            "To set the font size of the website",
            "To apply specific styles to different screen sizes",
        ],
        answer: "To set the width and initial scale of the viewport",
    },
    {
        question: "What is the purpose of the CSS max-width property?",
        options: [
            "To set a maximum width for an element",
            "To set a minimum width for an element",
            "To set the font size of an element",
            "To hide an element on smaller screens",
        ],
        answer: "To set a maximum width for an element",
    },
    {
        question: "What is the purpose of the CSS min-width property?",
        options: [
            "To set a minimum width for an element",
            "To set a maximum width for an element",
            "To set the font size of an element",
            "To hide an element on smaller screens",
        ],
        answer: "To set a minimum width for an element",
    },
    {
        question:
            "What is the purpose of the CSS float property in responsive design?",
        options: [
            "To position elements side by side",
            "To hide elements on smaller screens",
            "To change the font size of an element",
            "To set a maximum width for an element",
        ],
        answer: "To position elements side by side",
    },
    {
        question:
            "What is the purpose of the CSS clear property in responsive design?",
        options: [
            "To prevent elements from being positioned next to a floated element",
            "To set a maximum width for an element",
            "To hide elements on smaller screens",
            "To change the font size of an element",
        ],
        answer:
            "To prevent elements from being positioned next to a floated element",
    },
    {
        question:
            "What is the purpose of the CSS display property in responsive design?",
        options: [
            "To control the visibility of an element",
            "To set a maximum width for an element",
            "To hide elements on smaller screens",
            "To change the font size of an element",
        ],
        answer: "To control the visibility of an element",
    },
    {
        question:
            "What is the purpose of the CSS flexbox layout in responsive design?",
        options: [
            "To create flexible layouts that adapt to different screen sizes",
            "To position elements side by side",
            "To set a maximum width for an element",
            "To change the font size of an element",
        ],
        answer: "To create flexible layouts that adapt to different screen sizes",
    },
    {
        question:
            "What is the purpose of the CSS grid layout in responsive design?",
        options: [
            "To create complex, multi-column layouts",
            "To hide elements on smaller screens",
            "To change the font size of an element",
            "To set a maximum width for an element",
        ],
        answer: "To create complex, multi-column layouts",
    },
    {
        question:
            "What is the purpose of the CSS position property in responsive design?",
        options: [
            "To control the position of an element on the webpage",
            "To set a maximum width for an element",
            "To hide elements on smaller screens",
            "To change the font size of an element",
        ],
        answer: "To control the position of an element on the webpage",
    },
    {
        question:
            "What is the purpose of the CSS z-index property in responsive design?",
        options: [
            "To control the stacking order of elements",
            "To set a maximum width for an element",
            "To hide elements on smaller screens",
            "To change the font size of an element",
        ],
        answer: "To control the stacking order of elements",
    },
    {
        question:
            "What is the purpose of the CSS transform property in responsive design?",
        options: [
            "To apply visual effects to elements",
            "To set a maximum width for an element",
            "To hide elements on smaller screens",
            "To change the font size of an element",
        ],
        answer: "To apply visual effects to elements",
    },
    {
        question:
            "What is the purpose of the CSS transition property in responsive design?",
        options: [
            "To create smooth transitions between element states",
            "To set a maximum width for an element",
            "To hide elements on smaller screens",
            "To change the font size of an element",
        ],
        answer: "To create smooth transitions between element states",
    },
    {
        question:
            "What is the purpose of the CSS animation property in responsive design?",
        options: [
            "To create animated effects on elements",
            "To set a maximum width for an element",
            "To hide elements on smaller screens",
            "To change the font size of an element",
        ],
        answer: "To create animated effects on elements",
    },
];

// const htmlDescription =
//   `HTML (Hypertext Markup Language) is the standard markup language used to create web pages. HTML describes the structure of a web page and provides a way to add text, images, videos, links, and other elements to a web page. An HTML document consists of two main parts, the <head> section and the <body> section. The <head> section contains information about the document, such as the document title and metadata. The <body> section contains the actual content of the document, such as text, images, videos, and links. HTML uses tags to structure content on a web page. Tags are enclosed in angle brackets, such as <tag>. The opening tag is used to mark the beginning of a tag, and the closing tag is used to mark the end of a tag. For example, the <p> tag is used to create a paragraph, and the opening tag is <p> and the closing tag is </p>. HTML tags can have attributes that provide additional information about the tag. Attributes are added to the opening tag, and they are usually in the form of name-value pairs. For example, the <img> tag is used to add an image to a web page, and it has an attribute called src that specifies the URL of the image. HTML links are used to connect one web page to another. Links are created using the <a> tag, and the href attribute is used to specify the URL of the page being linked to. HTML supports two types of lists, ordered lists (<ol>) and unordered lists (<ul>). Ordered lists are used when the items on the list need to be numbered, while unordered lists are used when the items on the list do not need to be numbered. HTML tables are used to display data in a tabular format. Tables are created using the <table> tag, and rows and columns are created using the <tr> and <td> tags, respectively. HTML forms are used to collect user input. Forms are created using the <form> tag, and input fields are added using various types of input tags, such as ${<input type="text">} for text fields and ${<input type="radio">} for radio buttons. HTML5 is the latest version of HTML, and it introduces several new features, such as support for video and audio playback, support for responsive web design, and support for semantic tags.`;
// console.log(htmlDescription);

const RestfulAPI = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showCertificate, setShowCertificate] = useState(false);
    const [showDocument, setShowDocument] = useState(true);
    const [showExam, setShowExam] = useState(false);
    const [showFailed, setExamStatus] = useState("");

    const handleStartExam = () => {
        setShowDocument(false);
        setShowExam(true);
    };

    const handleAnswer = (answer) => {
        const isCorrect = answer === questions[currentQuestion].answer;
        if (isCorrect) {
            setScore(score + 5);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            if (score >= 80) {
                setShowCertificate(true);
            } else {
                setExamStatus("You have failed the Exam! Try again after some time");
            }
        }
    };

    return (
        <React.Fragment>
            <CourseContentContainer>
                {showDocument && (
                    <>
                        <CourseImage
                            src="https://maxoffsky.com/word/wp-content/uploads/2012/11/RESTful-API-design.jpg"
                            alt="RWD"
                        />

                        <ConceptTitle>Restful API</ConceptTitle>
                        <ConceptDescription>
                            <embed
                                src="https://docs.marklogic.com/guide/rest-dev.pdf"
                                type="application/pdf"
                                width="100%"
                                height="600px"
                            />
                        </ConceptDescription>
                        <BtnContainer>
                            <StartExam onClick={handleStartExam}>Start Exam</StartExam>
                        </BtnContainer>
                    </>
                )}
                {showExam && (
                    <ExamContainer>
                        <ExamTitle>Welcome to the Exam!</ExamTitle>
                        <CountContainer>
                            <Score> Score : {score}</Score>
                            <QNSCount>Question: {currentQuestion + 1}/20</QNSCount>
                        </CountContainer>

                        <Question>
                            {currentQuestion + 1}. {questions[currentQuestion].question}
                        </Question>
                        {questions[currentQuestion].options.map((option) => (
                            <Option key={option} onClick={() => handleAnswer(option)}>
                                {option}
                            </Option>
                        ))}
                        {showCertificate && (
                            <div>
                                <ExamPassed>Congratulations, you passed the exam!</ExamPassed>
                                <DownloadCertificate>
                                    Download your certificate:
                </DownloadCertificate>
                                <a
                                    href="https://allinwebpro.com/dev2/wp-content/uploads/2016/03/Responsive-Web-Design-Illustration.png"
                                    download
                                >
                                    <Certificate
                                        src="https://allinwebpro.com/dev2/wp-content/uploads/2016/03/Responsive-Web-Design-Illustration.png"
                                        alt="Certificate"
                                    />
                                </a>
                            </div>
                        )}
                        <FailedMessage>{showFailed}</FailedMessage>
                        <StartExam>Back</StartExam>
                    </ExamContainer>
                )}
            </CourseContentContainer>
        </React.Fragment>
    );
};

export default RestfulAPI;
