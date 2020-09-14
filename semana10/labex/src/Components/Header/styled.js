import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  background: #f8f8ff;
  height: 20vh;
  width: 100vw;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3vh;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const Text = styled.p`
  margin-right: 5vw;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    color: #000000;
    transition: 0.5s;
    transform: scale(1.2);
  }

  @media screen and (min-width: 200px) and (max-width: 766px) {
    font-size: 0.8rem;
    margin-right: 3vw;
  }
`;

export const Logo = styled.img`
  margin-left: 4vw;
  width: 25vw;

  @media screen and (min-width: 200px) and (max-width: 766px) {
    width: 35vw;
    margin-left: 1vw;
  }
`;
