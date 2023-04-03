import React from "react";
import {
  CardContainer,
  CertificateTitle,
  Cup,
  CertificateCard,
} from "./CAStyledComponents";
import Header from "../Header";

const certificateTitles = [
  {
    index: 1,
    title: "Sample",
  },
];

const CertificatesAchieved = () => {
  return (
    <>
      <Header />
      <CardContainer>
        {certificateTitles.map((each) => (
          <CertificateCard>
            <Cup
              src="https://i.pinimg.com/originals/a5/da/be/a5dabea9202dcfef09cb11340fd86192.gif"
              alt="cup"
            />
            <CertificateTitle>{each.title}</CertificateTitle>
          </CertificateCard>
        ))}
      </CardContainer>
    </>
  );
};

export default CertificatesAchieved;
