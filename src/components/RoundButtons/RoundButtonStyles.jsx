import styled from 'styled-components';
import { colors } from 'styles';

export const StyledRoundButton = styled.button`
  width: ${({size}) => size};
  height: ${({size}) => size};
  border-radius: 50%;
  border: 1px solid ${colors.DARK_BORDER};
  background-color: ${({backgroundColor}) => backgroundColor};
  cursor: pointer;
  transition-duration: .3s;
  &:hover {
    background-color: ${colors.CHART_TOOLTIP_BORDER};
  }
`;