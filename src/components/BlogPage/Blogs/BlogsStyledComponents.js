import styled from "styled-components";

export const BlogsContainer = styled.div`
  @media screen and  (min-width: 768px) {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    height:auto;
  }
  @media screen and (max-width: 767px) {
    min-height: 500px;
    padding: 10px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;