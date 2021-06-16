import React from 'react';
import PropTypes from 'prop-types';

import * as S from './Section.style';

const Section = ({ children, direction }) => <S.SectionBlock direction={direction}>{children}</S.SectionBlock>;

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
