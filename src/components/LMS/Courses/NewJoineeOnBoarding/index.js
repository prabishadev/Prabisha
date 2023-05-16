import React, {  } from "react";
import Header from "../../Header";
// import MCQ from './MCQ'
import {
  CourseContentContainer,
  CourseImage,
  LogoTitle,
  ConceptTitle,
  ConceptDescription,
  BtnContainer,
  // LinkItem,
  // StartExam,
  // ExamContainer,
  // ExamTitle,
  // Arrow,
} from "./NEOBStyledComponents";

const NewJoineeOnBoarding = () => {
  // const [showDocument, setShowDocument] = useState(true);
  // const [showExam, setShowExam] = useState(false);
  // const handleStartExam = () => {
  //   setShowDocument(false);
  //   setShowExam(true);
  // };


  return (
    <React.Fragment>
      <Header />
      <CourseContentContainer>
       
          <>
          <LogoTitle>
            <CourseImage
              src="https://cdn-icons-png.flaticon.com/512/10112/10112440.png"
              alt="HTML"
            />

            <ConceptTitle>New Joinee Onboarding</ConceptTitle></LogoTitle>
            <ConceptDescription>
              <embed
                src="https://docs.google.com/document/d/1xBqXoxNP2Hu2EzWHLH1C82GI7iyjdE64/edit?usp=sharing&ouid=101864348644793438885&rtpof=true&sd=true"                
                type="application/pdf"
                width="100%"
                height="600px"
              />
            </ConceptDescription>
            <BtnContainer>
              {/* <StartExam onClick={handleStartExam}></StartExam> */}
            </BtnContainer>
          </>
       
        {/* {showExam && (
          <ExamContainer>
            <ExamTitle>Welcome to the Exam!</ExamTitle>
            <>
              <LinkItem to="/lms-available"><Arrow/></LinkItem>
            </>
            <MCQ/>
            
          </ExamContainer>
        )} */}
      </CourseContentContainer>
    </React.Fragment>
  );
};

export default NewJoineeOnBoarding;
