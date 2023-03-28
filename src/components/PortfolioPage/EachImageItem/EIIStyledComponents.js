import styled from "styled-components";

export const ListItem = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style-type: none;
  width: 16rem;
  margin: 25px;
  text-decoration: none;
  height: ${(props) => props.height};
  border: 1px solid #b4b9fa;
  border-radius: 5px;
  box-sizing: border-box;
  background: rgba(217, 217, 217, 0.58);
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: all 0.5s;
  user-select: none;
  &:hover {
    border: 1px solid #c99b3b;
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95) rotateZ(1.7deg);
  }
  @media (max-width: 768px) {
    margin: 10px;
  }
`;

export const Image = styled.img`
  width: 15.8rem;
`;
export const Anchor = styled.div`
  text-decoration: none;
`;

export const HoverHead = styled.h1`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
`;
