'use client';

import { color } from '@/styles/color';
import styled from '@emotion/styled';

type Props = {
  element: any;
  onClick: any;
};

const Home = ({ element, onClick }: Props) => {
  return (
    <Container ref={element}>
      <Title>
        MYEONGHWA’S
        <br />
        PORTFOLIO
      </Title>
      <Button onClick={onClick}>↓ MORE ↓</Button>
    </Container>
  );
};

export default Home;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  height: 100vh;
  background: #e1d2ff;
  font-family: 'PressStart2P';
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  line-height: 2;
  text-shadow: -10px 10px white;
  animation: motion 0.7s linear 0s infinite alternate;

  @keyframes motion {
    0% {
      margin-top: 0px;
    }
    100% {
      margin-top: 10px;
    }
  }
`;

const Button = styled.div`
  box-sizing: border-box;
  padding: 15px 20px;
  background: ${color.gray.gray1};
  border: 5px solid black;
  border-radius: 20px;
  cursor: pointer;
  animation: button 0.7s linear 0s infinite alternate;

  &:hover {
    background: ${color.gray.gray2};
    transition: all 0.3s ease;
  }

  @keyframes button {
    0% {
      margin-top: 10px;
    }
    100% {
      margin-top: 0px;
    }
  }
`;
