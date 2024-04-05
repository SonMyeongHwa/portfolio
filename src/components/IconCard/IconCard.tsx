'use client';

import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  link: string;
  path: string;
  name: string;
};

const IconCard = ({ link, path, name }: Props) => {
  return (
    <Container>
      <StyledLink href={link} target="_blank">
        <Image src={`/images/icon/${path}.svg`} alt={path} width={50} height={50} />
      </StyledLink>
      <span className="name">{name}</span>
    </Container>
  );
};

export default IconCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  .name {
    font-size: 12px;
    opacity: 0;
    transition: opacity 0.3s ease;
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
