import styled from "styled-components";
import "typeface-raleway";
import "typeface-roboto";
import { MdDownload } from "react-icons/md";

export const CourseContentContainer = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  min-height: 500px;
  padding-top: 20px;
  padding-bottom: 50px;
`;

export const Download = styled(MdDownload)`
  height: 30px;
  width: 30px;
  color: black;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
`;

export const CourseImage = styled.img`
  height: 450px;
  width: 100%;
  margin-top: 50px;
`;

export const ConceptTitle = styled.h1`
  font-family: "Raleway";
  font-size: 19px;
  margin: 20px;
  font-weight: 600;
`;

export const ConceptDescription = styled.p`
  font-family: "Raleway";
  font-size: 16px;
  margin: 20px;
  margin-top: 0px;
  font-weight: 500;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-right: 20px;
`;
export const StartExam = styled.button`
  appearance: button;
  backface-visibility: hidden;
  background-color: #405cf5;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue",
    Ubuntu, sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  margin: 12px 0 0;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all 0.2s, box-shadow 0.08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-bottom: 40px;
  align-self: center;
`;

export const ExamContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
`;

export const ExamTitle = styled.h1`
  color: #15202b;
  font-family: "Raleway";
  font-size: 35px;
  font-weight: 600;
  text-align: center;
`;

export const Question = styled.p`
  color: #0927eb;
  font-family: "Roboto";
  font-size: 30px;
  font-weight: 500;
  text-align: left;
  margin-left: 40px;
  margin-right: 40px;
`;

export const Score = styled.h4`
  color: #0bdb4d;
  font-family: "Roboto";
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  margin-left: 20px;
`;

export const CountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  width: 100%;
`;

export const QNSCount = styled.p`
  color: #d10bdb;
  font-family: "Roboto";
  font-size: 25px;
  font-weight: 400;
  margin-left: 20px;
  margin-right: 50px;
`;

export const Option = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Roboto", sans-serif;
  border-radius: 6px;
  color: #3d3d3d;
  background: #fff;
  border: solid;
  width: 200px;
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-left: 100px;
  border-width: 1px;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const FailedMessage = styled.h4`
  color: red;
  font-family: "Roboto";
  font-size: 30px;
  font-weight: 400;
  text-align: center;
`;

export const ExamPassed = styled.h4`
  color: #0ad16a;
  font-family: "Roboto";
  font-size: 30px;
  font-weight: 400;
  text-align: center;
`;

export const Certificate = styled.img`
  height: 600px;
  width: 100%;
`;

export const DownloadCertificate = styled.h3`
  color: black;
  font-family: "Roboto";
  font-size: 30px;
  font-weight: 400;
  text-align: center;
`;
