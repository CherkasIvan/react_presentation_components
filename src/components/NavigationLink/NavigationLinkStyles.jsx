import {NavLink} from 'react-router-dom';
import styled, {css} from 'styled-components';

import {colors} from 'styles';

export const commonLinksStyles = css`
  text-decoration: none;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 1rem;
  color: ${colors.WHITE};
`;

export const InternalLink = styled(NavLink)`
  ${commonLinksStyles}
  &.active {
    color: ${colors.LINK_ON_DARK};
  }
`;

export const ExternalLink = styled.a`
  ${commonLinksStyles}`;