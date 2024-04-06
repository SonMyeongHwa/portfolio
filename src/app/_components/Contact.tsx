'use client';

import IconCard from '@/components/IconCard/IconCard';
import { color } from '@/styles/color';
import styled from '@emotion/styled';

type Props = {
  element: any;
};

const Contact = ({ element }: Props) => {
  return (
    <Container ref={element}>
      <div className="wrap">
        <h2 className="title">CONTACT</h2>
        <div className="content">끝까지 읽어주셔서 감사합니다 :-)</div>
        <div className="icon-wrap">
          <IconCard link="https://github.com/SonMyeongHwa" path="github" name="Github" />
          <IconCard link="https://velog.io/@smh0116" path="velog" name="Blog" />
          <IconCard link="mailto:myeonghwa0116@gmail.com" path="gmail" name="Gmail" />
          <IconCard link="" path="notion" name="Notion" />
        </div>
        <div className="copyright">ⓒ 2024. Myeonghwa All rights reserved.</div>
      </div>
    </Container>
  );
};

export default Contact;

const Container = styled.section`
  height: 100vh;
  box-sizing: border-box;
  padding: 130px 0px 100px 0px;
  text-align: center;

  .wrap {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .content {
    margin-top: 80px;
  }

  .icon-wrap {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin: 70px 0 100px 0;
  }

  .copyright {
    color: ${color.gray.gray3};
    font-size: 16px;
  }
`;
