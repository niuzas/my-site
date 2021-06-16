import React from 'react';
import * as S from './Info.style';

const Info = ({ title, text, width }) => (
  <S.InfoBlock width={width}>
    <h2>{title}</h2>
    <div className="line-beauty">
      <div className="bold"></div>
      <div className="thin"></div>
    </div>
    <p>{text}</p>
  </S.InfoBlock>
);

export default Info;
