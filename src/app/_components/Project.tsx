'use client';

import ProjectDetail from '@/components/ProjectDetail/ProjectDetail';
import styled from '@emotion/styled';

type Props = {
  element: any;
};

const projects = [
  {
    name: '사이드 고',
    type: 'Team',
    date: '2024.02 ~ ing',
    image: 'sidego_main',
    githubLink: 'https://github.com/SonMyeongHwa',
    webLink: '',
    introduction:
      '사이드 프로젝트 플랫폼을 개발하며 사이드 프로젝트를 진행하는 개발자들이 중간에 이탈하지 않게 보증금을 받고 지원하는 역할을 합니다. 또한, 각 팀이 약속을 지키지 못하면 보증금이 다른 팀원들에게 돌아가는 플랫폼을 만듭니다. ',
    func: '사이드 프로젝트 플랫폼을 개발하며 사이드 프로젝트를 진행하는 개발자들이 중간에 이탈하지 않게 보증금을 받고 지원하는 역할을 합니다. 또한, 각 팀이 약속을 지키지 못하면 보증금이 다른 팀원들에게 돌아가는 플랫폼을 만듭니다. ',
    skill: 'Next.js, TypeScript, Styled-Components, emotion, Axios, Zustand',
  },
];

const Project = ({ element }: Props) => {
  return (
    <Container ref={element}>
      <h2 className="title">PROJECT</h2>
      {projects.map((project) => (
        <ProjectDetail
          key={project.name}
          name={project.name}
          type={project.type}
          date={project.date}
          image={project.image}
          githubLink={project.githubLink}
          webLink={project.webLink}
          introduction={project.introduction}
          func={project.func}
          skill={project.skill}
        />
      ))}
    </Container>
  );
};

export default Project;

const Container = styled.section`
  height: auto;
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
