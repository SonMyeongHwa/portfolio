'use client';

import styled from '@emotion/styled';
import Home from './_components/Home';
import AboutMe from './_components/AboutMe';
import Skill from './_components/Skill';
import Project from './_components/Project';
import Contact from './_components/Contact';
import { useState } from 'react';
import { useObserver } from '@/hook/useObserver';
import { motion } from 'framer-motion';
import { color } from '@/styles/color';
import Image from 'next/image';

const Page = () => {
  const [isFocused, setIsfocused] = useState('HOME');

  const menus = [
    {
      label: 'HOME',
      observe: useObserver('HOME', setIsfocused),
    },
    {
      label: 'ABOUT_ME',
      observe: useObserver('ABOUT_ME', setIsfocused),
    },
    {
      label: 'SKILL',
      observe: useObserver('SKILL', setIsfocused),
    },
    {
      label: 'PROJECT',
      observe: useObserver('PROJECT', setIsfocused),
    },
    {
      label: 'CONTACT',
      observe: useObserver('CONTACT', setIsfocused),
    },
  ];

  const onScroll = (refcurrent: React.RefObject<HTMLDivElement>, name: string) => {
    refcurrent.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container>
      <header className={isFocused !== 'HOME' ? 'header' : 'header hide'}>
        <StyledImage src={'/images/icon/home.svg'} alt="home" width={24} height={24} onClick={() => onScroll(menus[0].observe, 'HOME')} />
        <div className="nav">
          {menus
            .filter((menu) => menu.label !== 'HOME')
            .map((menu) => {
              const isActive = isFocused === menu.label;
              return (
                <span className={isActive ? 'menu active' : 'menu'} key={menu.label} onClick={() => onScroll(menu.observe, menu.label)}>
                  {menu.label}
                  {isActive && <Underline layoutId="underline" />}
                </span>
              );
            })}
        </div>
      </header>
      <Home element={menus[0].observe} onClick={() => onScroll(menus[1].observe, 'ABOUT_ME')} />
      <AboutMe element={menus[1].observe} />
      <Skill element={menus[2].observe} />
      <Project element={menus[3].observe} />
      <Contact element={menus[4].observe} />
    </Container>
  );
};

export default Page;

const Container = styled.div`
  .title {
    font-family: 'PressStart2P';
    font-size: 30px;
    text-decoration: underline;
    text-underline-position: under;
    text-align: center;
    margin-bottom: 80px;
  }

  .wrap {
    margin: 0 auto;
    max-width: 1100px;
    padding: 0px 20px;
  }

  .header {
    width: 100%;
    height: 80px;
    background: rgba(128, 128, 128, 0.1);
    backdrop-filter: blur(6px);

    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 50px;

    position: fixed;
    z-index: 999;
    transition: transform 0.3s ease;

    .nav {
      display: flex;
      gap: 20px;
    }

    .menu {
      cursor: pointer;
      position: relative;
      font-family: 'PressStart2P';
      font-size: 14px;
    }

    .active {
      font-weight: bold;
      color: ${color.color.darkPurple};
    }
  }

  .hide {
    transform: translateY(-100%);
    transition: transform 0.3s ease;
  }
`;

const Underline = styled(motion.div)`
  position: absolute;
  top: -20px;
  left: 40%;
  width: 15px;
  height: 15px;
  background-image: url('/images/icon/location.svg');
`;

const StyledImage = styled(Image)`
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.3);
    transition: transform 0.3s ease;
  }
`;
