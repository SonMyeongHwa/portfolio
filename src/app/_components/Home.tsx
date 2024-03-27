'use client';

import styled from '@emotion/styled';

type Props = {
  element: any;
};

const Home = ({ element }: Props) => {
  return (
    <Container ref={element}>
      <Info>
        안녕하세요!
        <br />
        <br />
        프론트엔드 개발자 손명화입니다.
      </Info>
    </Container>
  );
};

export default Home;

const Container = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
`;

const Info = styled.h1`
  font-size: 50px;
  font-weight: bold;
  margin-left: 50px;
`;
