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
} from "./CMSStyledComponents";

const ContentManagementSystem = () => {
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
              src="https://cdn-icons-png.flaticon.com/512/3950/3950815.png"
              alt="HTML"
            />

            <ConceptTitle>Content Management System</ConceptTitle></LogoTitle>
            <ConceptDescription>
              <embed
                src="https://businessnetwork.opentext.com/robohelp/cm_hc/HC_CMS_User_Guide.pdf"                
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

export default ContentManagementSystem;
