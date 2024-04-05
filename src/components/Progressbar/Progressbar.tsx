'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';

type Props = {
  skill: string;
  percent: number;
};

const Progressbar = ({ skill, percent }: Props) => {
  return (
    <Container>
      <div className="name">{skill}</div>
      <ProgressBar>
        <Progress percent={percent} />
      </ProgressBar>
    </Container>
  );
};

export default Progressbar;

const Container = styled.div`
  .name {
    margin: 0 0 10px 5px;
    font-size: 14px;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 30px;
  background: ${color.gray.gray1};
  border-radius: 20px;
`;

const Progress = styled.div<{ percent: number }>`
  width: ${({ percent }) => percent}%;
  height: 30px;
  background: ${color.color.darkPurple};
  border-radius: 20px;
`;
