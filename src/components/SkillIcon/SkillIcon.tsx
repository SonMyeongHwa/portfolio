'use client';

import styled from '@emotion/styled';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  element: any;
};

const SkillIcon = ({ src, alt, width, height, element }: Props) => {
  const emojiVariants = {
    hidden: { opacity: 0, y: 100, rotateY: 300 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        rotateY: {
          duration: 0.3,
        },
        y: {
          type: 'spring',
          damping: 3,
          stiffness: 50,
          restDelta: 0.01,
          duration: 0.3,
        },
      },
    },
  };

  return (
    <Circle variants={emojiVariants} initial="hidden" whileInView="visible" viewport={{ root: element, once: true, amount: 0.3 }}>
      <Image src={src} alt={alt} width={width} height={height} />
    </Circle>
  );
};

export default SkillIcon;

const Circle = styled(motion.div)`
  width: 150px;
  height: 150px;
  background: #eeeeee;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  &:nth-of-type(2n) {
    transform: translateY(200px);
  }
`;
