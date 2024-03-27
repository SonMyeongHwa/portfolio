"use client";

import styled from "@emotion/styled";

type Props = {
  element: any;
};

const Project = ({ element }: Props) => {
  return (
    <Container ref={element}>
      <h2 className="title">PROJECT</h2>
    </Container>
  );
};

export default Project;

const Container = styled.section`
  height: 100vh;
  box-sizing: border-box;
  padding: 130px 100px;

  .title {
    font-size: 24px;
    text-decoration: underline;
    text-underline-position: under;
  }
`;
