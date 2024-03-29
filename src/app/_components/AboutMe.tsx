'use client';

import styled from '@emotion/styled';

type Props = {
  element: any;
};

const AboutMe = ({ element }: Props) => {
  return (
    <Container ref={element}>
      <h2 className="title">ABOUT ME</h2>
      <div>안녕하세요. 프론트엔드 개발자 손명화입니다.</div>
    </Container>
  );
};

export default AboutMe;

const Container = styled.section`
  height: 100vh;
  box-sizing: border-box;
  padding: 130px 100px;

  .title {
    font-family: 'PressStart2P';
    font-size: 30px;
    text-decoration: underline;
    text-underline-position: under;
    margin-bottom: 80px;
  }
`;
