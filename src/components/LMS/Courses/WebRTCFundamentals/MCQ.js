import React, { useState } from 'react';
import {SubmitBtn, ScoreText, DownloadCertificate, Certificate, ExamPassed} from "./WRStyledComponents"

const questions = [  {    qnNo: 1,    question: "What is WebRTC?",    options: [      "A video conferencing technology",      "A web development framework",      "A browser plugin",      "A mobile app development SDK"    ],
    answer: "A video conferencing technology"
  },
  {
    qnNo: 2,
    question: "What protocol does WebRTC use to establish peer-to-peer connections?",
    options: [
      "HTTP",
      "TCP",
      "UDP",
      "TLS"
    ],
    answer: "UDP"
  },
  {
    qnNo: 3,
    question: "What is the main purpose of the Session Description Protocol (SDP) in WebRTC?",
    options: [
      "To establish a secure connection",
      "To negotiate the media format and network details",
      "To handle NAT traversal",
      "To handle signaling between peers"
    ],
    answer: "To negotiate the media format and network details"
  },
  {
    qnNo: 4,
    question: "Which JavaScript APIs are used to access the user's camera and microphone in WebRTC?",
    options: [
      "getUserMedia()",
      "fetch()",
      "localStorage",
      "addEventListener()"
    ],
    answer: "getUserMedia()"
  },
  {
    qnNo: 5,
    question: "What is the role of the STUN server in WebRTC?",
    options: [
      "To establish a secure connection",
      "To handle NAT traversal",
      "To negotiate the media format and network details",
      "To handle signaling between peers"
    ],
    answer: "To handle NAT traversal"
  },
  {
    qnNo: 6,
    question: "What is the role of the TURN server in WebRTC?",
    options: [
      "To establish a secure connection",
      "To handle NAT traversal",
      "To negotiate the media format and network details",
      "To handle signaling between peers"
    ],
    answer: "To handle NAT traversal"
  },
  {
    qnNo: 7,
    question: "What is the role of the ICE framework in WebRTC?",
    options: [
      "To establish a secure connection",
      "To handle NAT traversal",
      "To negotiate the media format and network details",
      "To handle signaling between peers"
    ],
    answer: "To handle NAT traversal"
  },
  {
    qnNo: 8,
    question: "Which JavaScript API is used to send and receive data between peers in WebRTC?",
    options: [
      "RTCDataChannel",
      "RTCPeerConnection",
      "RTCSessionDescription",
      "RTCStatsReport"
    ],
    answer: "RTCDataChannel"
  },
  {
    qnNo: 9,
    question: "What is the role of the RTCPeerConnection API in WebRTC?",
    options: [
      "To handle NAT traversal",
      "To negotiate the media format and network details",
      "To handle signaling between peers",
      "To send and receive data between peers"
    ],
    answer: "To handle signaling between peers"
  },
  {
    qnNo: 10,
    question: "What is the role of the RTCSessionDescription API in WebRTC?",
    options: [
      "To handle NAT traversal",
      "To negotiate the media format and network details",
      "To handle signaling between peers",
      "To send and receive data between peers"
    ],
    answer: "To negotiate the media format and network details"
  },
  {
  qnNo: 11,
  question: "What is the main benefit of using WebRTC for video conferencing?",
  options: [
  "Lower latency",
  "Higher video quality",
  "Lower bandwidth usage",
  "Better security"
  ],
  answer: "Lower latency"
  },
  {
  qnNo: 12,
  question: "What is the main disadvantage of using WebRTC for video conferencing?",
  options: [
  "Higher latency",
  "Lower video quality",
  "Higher bandwidth usage",
  "Poor security"
  ],
  answer: "Higher bandwidth usage"
  },
  {
  qnNo: 13,
  question: "What are some of the features of WebRTC that make it suitable for real-time communication?",
  options: [
  "Low latency",
  "High video quality",
  "Bandwidth adaptation",
  "All of the above"
  ],
  answer: "All of the above"
  },
  {
  qnNo: 14,
  question: "What are some of the limitations of WebRTC?",
  options: [
  "Lack of support for older browsers",
  "Limited bandwidth for mobile devices",
  "Poor audio quality",
  "All of the above"
  ],
  answer: "Lack of support for older browsers"
  },
  {
  qnNo: 15,
  question: "What is the role of the MediaStream API in WebRTC?",
  options: [
  "To access the user's camera and microphone",
  "To send and receive data between peers",
  "To negotiate the media format and network details",
  "To handle signaling between peers"
  ],
  answer: "To access the user's camera and microphone"
  },
  {
  qnNo: 16,
  question: "What is the role of the RTCStats API in WebRTC?",
  options: [
  "To access statistics about the peer connection",
  "To negotiate the media format and network details",
  "To handle signaling between peers",
  "To send and receive data between peers"
  ],
  answer: "To access statistics about the peer connection"
  },
  {
  qnNo: 17,
  question: "What are some of the security features of WebRTC?",
  options: [
  "End-to-end encryption",
  "Secure signaling",
  "Certificate-based authentication",
  "All of the above"
  ],
  answer: "All of the above"
  },
  {
  qnNo: 18,
  question: "What is the role of the signaling server in WebRTC?",
  options: [
  "To establish a secure connection",
  "To handle NAT traversal",
  "To negotiate the media format and network details",
  "To handle signaling between peers"
  ],
  answer: "To handle signaling between peers"
  },
  {
  qnNo: 19,
  question: "What are some of the use cases for WebRTC?",
  options: [
  "Video conferencing",
  "File sharing",
  "Online gaming",
  "All of the above"
  ],
  answer: "All of the above"
  },
  {
  qnNo: 20,
  question: "What is the role of the ICE (Interactive Connectivity Establishment) protocol in WebRTC?",
  options: [
  "To handle NAT traversal",
  "To negotiate the media format and network details",
  "To handle signaling between peers",
  "To send and receive data between peers"
  ],
  answer: "To handle NAT traversal"
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
