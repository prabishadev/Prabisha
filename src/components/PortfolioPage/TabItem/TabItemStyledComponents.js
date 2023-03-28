import styled from "styled-components";

export const TabListItem = styled.li`
  list-style-type: none;
  cursor: pointer;
  margin: 0 20px 0 20px;
`;
export const ButtonListItem = styled.button`
  padding: 1.3em 3em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #c99b3b;
    box-shadow: 0px 15px 20px #d6bb83;
    color: #fff;
    transform: translateY(-7px);
  }
  &:active {
    transform: translateY(-1px);
    background-color: #c99b3b;
  }  
  @media (max-width: 768px) {
    width: 300px;
    margin: 20px 0 20px 0;
  }
`;
