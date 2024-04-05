'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  name: string;
  type: string;
  date: string;
  image: string;
  githubLink: string;
  webLink?: string;
  introduction: string;
  func?: string;
  skill: string;
};

const ProjectDetail = ({ name, type, date, image, githubLink, webLink, introduction, func, skill }: Props) => {
  return (
    <Container>
      <LeftWrap>
        <Title>
          <div>
            <span className="name">{name}</span>
            <span className="type">{type} Project</span>
          </div>
          <div className="icon">
            <Link href={githubLink} target="_blank">
              <IconImage src={'/images/icon/github.svg'} alt="github" width={24} height={24} />
            </Link>
            {webLink && (
              <Link href={webLink} target="_blank">
                <IconImage src={'/images/icon/web.svg'} alt="web" width={24} height={24} />
              </Link>
            )}
          </div>
        </Title>
        <StyledImage src={`/images/project/${image}.png`} alt={name} width={500} height={300} />
      </LeftWrap>
      <RightWrap>
        <div>
          <span className="subtitle">진행 기간</span>
          <div className="content date">{date}</div>
        </div>
        <div>
          <span className="subtitle">프로젝트 소개</span>
          <div className="content">{introduction}</div>
        </div>
        {func && (
          <div>
            <span className="subtitle">기능 구현</span>
            <div className="content">{func}</div>
          </div>
        )}
        <div>
          <span className="subtitle">사용 스킬</span>
          <div className="content">{skill}</div>
        </div>
      </RightWrap>
    </Container>
  );
};

export default ProjectDetail;

const Container = styled.div`
  display: flex;
  gap: 50px;
  margin: 0 10px 20px 10px;
`;

const LeftWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;

  .name {
    font-size: 40px;
    font-weight: bold;
    margin-right: 20px;
  }

  .type {
    color: ${color.gray.gray3};
  }

  .icon {
    display: flex;
    gap: 10px;
  }
`;

const IconImage = styled(Image)`
  cursor: pointer;
`;

const StyledImage = styled(Image)`
  border-radius: 20px;
`;

const RightWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  line-height: 1.3;

  .subtitle {
    font-weight: bold;
    background: linear-gradient(to top, ${color.color.lightPurple} 60%, transparent 40%);
  }

  .content {
    font-size: 16px;
    margin-top: 10px;
  }

  .date {
    font-weight: bold;
  }
`;
