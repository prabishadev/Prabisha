import React, { useState } from "react";
import Header from "../../Header";
import MCQ from './MCQ'
import {
  CourseContentContainer,
  CourseImage,
  LogoTitle,
  ConceptTitle,
  ConceptDescription,
  BtnContainer,
  LinkItem,
  StartExam,
  ExamContainer,
  ExamTitle,
  Arrow,
} from "./CMStyledComponents";

const ContentMarketing = () => {
  const [showDocument, setShowDocument] = useState(true);
  const [showExam, setShowExam] = useState(false);
  const handleStartExam = () => {
    setShowDocument(false);
    setShowExam(true);
  };


  return (
    <React.Fragment>
      <Header />
      <CourseContentContainer>
        {showDocument && (
          <>
          <LogoTitle>
            <CourseImage
              src="https://res.cloudinary.com/djdnnecc6/image/upload/v1682236293/Prabisha%20LMS/3080011_ocu8gg.png"
              alt="HTML"
            />

            <ConceptTitle>Color Theory</ConceptTitle></LogoTitle>
            <ConceptDescription>
              <embed
                src="https://go.marketo.com/rs/marketob2/images/DG2ECM.pdf"                
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
            <>
              <LinkItem to="/lms-available"><Arrow/></LinkItem>
            </>
            <MCQ/>
            
          </ExamContainer>
        )}
      </CourseContentContainer>
    </React.Fragment>
  );
};

export default ContentMarketing;
