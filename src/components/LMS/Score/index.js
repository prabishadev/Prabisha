import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header";

import { ScoreContainer, ScoreCard, Score, Message } from "./SStyledComponents";

const ScoreSum = ({ email }) => {
  const [scoreSum, setScoreSum] = useState(0);

  useEffect(() => {
    axios
      .get(`/api/scores/${email}`)
      .then((response) => {
        const scores = response.data;
        let sum = 0;
        for (let i = 0; i < scores.length; i++) {
          sum += scores[i].score;
        }
        setScoreSum(sum);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [email]);

  return (
    <>
      <Header />
      <ScoreContainer>
        <ScoreCard>
          <Score>{scoreSum}</Score>
          <Message>Total Score</Message>
        </ScoreCard>
      </ScoreContainer>
    </>
  );
};

export default ScoreSum;
