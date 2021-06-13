import React from 'react';
import {TextDescription, TextH1, TextH2, TextH3, TextH4, TextP} from './TextStyles';
import './Text.css'

function Text({children, variant = 'p', styleVariant, BColor}) {
  switch (variant) {
    case('h1'):
      return <TextH1 className={styleVariant} BGcolor={BColor}>{children}</TextH1>;
    case('h2'):
      return <TextH2 className={styleVariant}>{children}</TextH2>;
    case('h3'):
      return <TextH3 className={styleVariant}>{children}</TextH3>;
    case('h4'):
      return <TextH4 className={styleVariant}>{children}</TextH4>;
    case('description'):
      return <TextDescription className={styleVariant}>{children}</TextDescription>;
    default:
      return <TextP className={styleVariant}>{children}</TextP>
  }
};

export default Text;