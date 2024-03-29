'use client';

import SkillIcon from '@/components/SkillIcon/SkillIcon';
import styled from '@emotion/styled';
import { Fragment } from 'react';

type Props = {
  element: any;
};

const icons = [
  {
    path: 'html5',
    size: 100,
  },
  {
    path: 'css3',
    size: 100,
  },
  {
    path: 'javascript',
    size: 80,
  },
  {
    path: 'typescript',
    size: 80,
  },
  {
    path: 'react',
    size: 100,
  },
  {
    path: 'nextjs',
    size: 100,
  },
];

const Skill = ({ element }: Props) => {
  return (
    <Container ref={element}>
      <h2 className="title">SKILL</h2>
      <div className="skillWrap">
        {icons.map((icon) => (
          <Fragment key={icon.path}>
            <SkillIcon src={`/images/logo/${icon.path}_logo.svg`} alt={icon.path} width={icon.size} height={icon.size} element={element} />
          </Fragment>
        ))}
      </div>
    </Container>
  );
};

export default Skill;

const Container = styled.section`
  height: 100vh;
  box-sizing: border-box;
  padding: 130px 100px;
  background: #e1d2ff;

  .title {
    font-family: 'PressStart2P';
    font-size: 30px;
    text-decoration: underline;
    text-underline-position: under;
    margin-bottom: 100px;
  }

  .skillWrap {
    display: flex;
  }
`;
