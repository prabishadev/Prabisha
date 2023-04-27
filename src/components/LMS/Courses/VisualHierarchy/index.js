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
} from "./VHStyledComponents";

const VisualHierarchy = () => {
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
              src="https://cdn-icons-png.flaticon.com/512/3079/3079010.png"
              alt="Mobile Marketing"
            />

            <ConceptTitle>Visual Hierarchy</ConceptTitle></LogoTitle>
            <ConceptDescription>
              <embed
                src="https://laithaljunaidy.com/books/assets/files/uxpin_the_building_blocks_of_visual_hierarchy.pdf"           
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

export default VisualHierarchy;
