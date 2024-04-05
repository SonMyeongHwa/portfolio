'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Image from 'next/image';

type Props = {
  path: string;
  title: string;
  content: string;
};

const UserCard = ({ path, title, content }: Props) => {
  return (
    <Container>
      <span className="subtitle">
        <Image src={`/images/icon/${path}.svg`} alt={path} width={25} height={25} />
        <span>{title}</span>
      </span>
      <div className="content">{content}</div>
    </Container>
  );
};

export default UserCard;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  font-size: 24px;

  .subtitle {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    font-weight: bold;
    background: linear-gradient(to top, ${color.color.lightPurple} 60%, transparent 40%);
  }

  .content {
    margin-left: 5px;
  }
`;
