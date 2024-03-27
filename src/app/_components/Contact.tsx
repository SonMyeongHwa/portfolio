"use client";

import styled from "@emotion/styled";

type Props = {
  element: any;
};

const Contact = ({ element }: Props) => {
  return (
    <Container ref={element}>
      <h2 className="title">CONTACT</h2>
    </Container>
  );
};

export default Contact;

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
