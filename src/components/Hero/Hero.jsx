import React from 'react';
import * as S from './Hero.style';

const Hero = ({ title, subtitle }) => (
  <S.HeroBlock>
    <div className="gray-beauty"></div>
    <div className="green-beauty"></div>
    <div className="text-box">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  </S.HeroBlock>
);

export default Hero;
