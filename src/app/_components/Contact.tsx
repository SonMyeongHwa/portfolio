'use client';

import { color } from '@/styles/color';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  element: any;
};

const Contact = ({ element }: Props) => {
  return (
    <Container ref={element}>
      <div className="wrap">
        <h2 className="title">CONTACT</h2>
        <div>끝까지 읽어주셔서 감사합니다 :-)</div>
        <div className="icon-wrap">
          <div className="icon">
            <StyledLink href="https://github.com/SonMyeongHwa" target="_blank">
              <Image src={'/images/icon/github.svg'} alt="github" width={50} height={50} />
            </StyledLink>
            <span className="name">Github</span>
          </div>
          <div className="icon">
            <StyledLink href="https://velog.io/@smh0116" target="_blank">
              <Image src={'/images/icon/velog.svg'} alt="velog" width={50} height={50} />
            </StyledLink>
            <span className="name">Blog</span>
          </div>
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

  .icon-wrap {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin: 70px 0 100px 0;
  }

  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    .name {
      font-size: 12px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
  }

  .copyright {
    color: ${color.gray.gray3};
    font-size: 16px;
  }
`;

const StyledLink = styled(Link)`
  &:hover {
    + .name {
      opacity: 1;
      transition: opacity 0.3s ease;
    }
  }
`;
