import React from 'react';
import * as S from './Contact.style';

const Contact = ({ title, text, width }) => (
  <S.ContactBlock width={width}>
    <h2>{title}</h2>
    <p>{text}</p>
  </S.ContactBlock>
);

export default Contact;
