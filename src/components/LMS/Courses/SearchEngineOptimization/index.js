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
} from "./SEOStyledComponents";

const SearchEngineOptimization = () => {
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
              src="https://cdn-icons-png.flaticon.com/512/3607/3607459.png"
              alt="Mobile Marketing"
            />

            <ConceptTitle>SearchEngineOptimization API </ConceptTitle></LogoTitle>
            <ConceptDescription>
              <embed
                src="https://www.westga.edu/its/assets-its/docs/seo_class.pdf"           
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

export default SearchEngineOptimization;
