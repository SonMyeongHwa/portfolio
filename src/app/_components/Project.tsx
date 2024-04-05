'use client';

import ProjectDetail from '@/components/ProjectDetail/ProjectDetail';
import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { projects } from '@/util/data/projectData';

type Props = {
  element: any;
};

const Project = ({ element }: Props) => {
  const PrevArrow = (props: any) => {
    const { className, onClick } = props;
    return <StyledImage className={className} src={'/images/icon/left_arrow.svg'} alt="left_arrow" width={20} height={20} onClick={onClick} />;
  };

  const NextArrow = (props: any) => {
    const { className, onClick } = props;
    return <StyledImage className={className} src={'/images/icon/right_arrow.svg'} alt="right_arrow" width={20} height={20} onClick={onClick} />;
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Container ref={element}>
      <div className="wrap">
        <h2 className="title">PROJECT</h2>
        <div className="sliderContainer">
          <Slider {...settings}>
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
          </Slider>
        </div>
      </div>
    </Container>
  );
};

export default Project;

const Container = styled.section`
  height: 100vh;
  box-sizing: border-box;
  padding: 130px 10px 0px 10px;

  .sliderContainer {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const StyledImage = styled(Image)`
  &:hover {
    background: ${color.gray.gray1};
    border-radius: 50%;
  }
`;
