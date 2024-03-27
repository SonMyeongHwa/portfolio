"use client";

import styled from "@emotion/styled";

type Props = {
  element: any;
};

const AboutMe = ({ element }: Props) => {
  return (
    <Container ref={element}>
      <h2 className="title">ABOUT ME</h2>
    </Container>
  );
};

export default AboutMe;

const Container = styled.section`
  height: 100vh;
  box-sizing: border-box;
  padding: 130px 100px;

  .title {
    font-size: 24px;
    text-decoration: underline;
    text-underline-position: under;
    margin-bottom: 80px;
  }
`;