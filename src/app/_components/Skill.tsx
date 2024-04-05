'use client';

import Progressbar from '@/components/Progressbar/Progressbar';
import { color } from '@/styles/color';
import { skillMenus, skills } from '@/util/data/skillData';
import styled from '@emotion/styled';
import { Fragment, useEffect, useState } from 'react';

type Props = {
  element: any;
};

type skillProps = {
  skill: string;
  menu: string;
  percent: number;
};

const Skill = ({ element }: Props) => {
  const [activeMenu, setActiveMenu] = useState(skillMenus[0]);
  const [skillData, setSkillData] = useState<skillProps[]>();

  useEffect(() => {
    setSkillData(skills.filter((skill) => skill.menu === activeMenu));
  }, [activeMenu]);

  return (
    <Container ref={element}>
      <div className="wrap">
        <h2 className="title">SKILL</h2>
        <SkillContainer>
          <div className="skillMenu">
            {skillMenus.map((menu) => {
              return (
                <div key={menu} className={activeMenu === menu ? 'menu active' : 'menu'} onClick={() => setActiveMenu(menu)}>
                  {menu}
                </div>
              );
            })}
          </div>
          <div className="skillWrap">
            {skillData?.map((skill) => (
              <Fragment key={skill.skill}>
                <Progressbar skill={skill.skill} percent={skill.percent} />
              </Fragment>
            ))}
          </div>
        </SkillContainer>
      </div>
    </Container>
  );
};

export default Skill;

const Container = styled.section`
  height: 100vh;
  box-sizing: border-box;
  padding: 130px 0px 50px 0px;
  font-family: 'PressStart2P';

  .title {
    margin-bottom: 30px;
  }
`;

const SkillContainer = styled.div`
  flex: 1;
  display: flex;
  gap: 90px;

  .skillMenu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .menu {
      cursor: pointer;
      background: ${color.gray.gray1};
      border-radius: 50%;
      height: 160px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      font-size: 14px;
      box-sizing: border-box;
      padding: 0px 20px;
      transition: box-shadow 0.1s linear;
    }

    .menu:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 4px rgba(0, 0, 0, 0.2);
    }

    .active {
      background: ${color.color.lightPurple};
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 4px rgba(0, 0, 0, 0.2);
    }
  }

  .skillWrap {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
`;
