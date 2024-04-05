'use client';

import UserCard from '@/components/UserCard/UserCard';
import styled from '@emotion/styled';
import Image from 'next/image';

type Props = {
  element: any;
};

const AboutMe = ({ element }: Props) => {
  return (
    <Container ref={element}>
      <div className="wrap">
        <h2 className="title">ABOUT ME</h2>
        <AboutContainer>
          <div className="info">
            <UserCard path="user" title="이름" content="손명화" />
            <UserCard path="birth" title="생년월일" content="1998.01.16" />
            <UserCard path="email" title="이메일" content="myeonghwa0116@gmail.com" />
          </div>
          <div className="aboutWrap">
            <Image src={`/images/about_me_image.svg`} alt="image" width={300} height={300} />
            <div className="about">
              프론트엔드 개발자 손명화입니다.
              <br />
              <br />
              열정적이고 창의적인 프론트엔드 개발자로서 사용자 경험을 개선하고 싶습니다.
              <br />
              <br />
              새로운 기술에 빠르게 적응하며 협업을 통해 효율적인 결과물을 창출하는 것을 즐깁니다.
              <br />
              <br />
              맡은 업무에 최선을 다하여 최고의 결과를 도출해내겠습니다.
            </div>
          </div>
        </AboutContainer>
      </div>
    </Container>
  );
};

export default AboutMe;

const Container = styled.section`
  height: 100vh;
  box-sizing: border-box;
  padding-top: 130px;
`;

const AboutContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .aboutWrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
  }

  .about {
    //flex: 1;
  }

  .info {
    display: flex;
    justify-content: space-around;
  }
`;
