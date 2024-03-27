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

const Page = () => {
  const [isFocused, setIsfocused] = useState('HOME');

  const menus = [
    {
      label: 'HOME',
      observe: useObserver('HOME', setIsfocused),
    },
    {
      label: 'ABOUT ME',
      observe: useObserver('ABOUT ME', setIsfocused),
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
    <>
      <Header>
        {menus.map((menu) => {
          const isActive = isFocused === menu.label;
          return (
            <span className={isActive ? 'menu active' : 'menu'} key={menu.label} onClick={() => onScroll(menu.observe, menu.label)}>
              {menu.label}
              {isActive && <Underline layoutId="underline" />}
            </span>
          );
        })}
      </Header>
      <Home element={menus[0].observe} />
      <AboutMe element={menus[1].observe} />
      <Skill element={menus[2].observe} />
      <Project element={menus[3].observe} />
      <Contact element={menus[4].observe} />
    </>
  );
};

export default Page;

const Header = styled(motion.header)`
  width: 100%;
  height: 80px;
  background: transparent;
  backdrop-filter: blur(6px);

  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 50px;

  position: fixed;
  z-index: 999;

  .menu {
    cursor: pointer;
    padding: 0 4em;
    position: relative;
  }

  .active {
    font-weight: bold;
  }
`;

const Underline = styled(motion.div)`
  position: absolute;
  top: 45px;
  left: 0px;
  width: 100%;
  background: pink;
  height: 4px;
`;
