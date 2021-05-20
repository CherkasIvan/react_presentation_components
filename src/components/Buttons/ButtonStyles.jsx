import styled from 'styled-components';
import { colors, spaces, typography } from '../../styles';
import { BUTTON_SIZE } from '../../constants/buttonSizes';

export const StyledButton = styled.button`
  width: ${({width}) => width};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: ${spaces.SPACES_8};
  margin: 5px;
  border: 1px solid ${colors.PRIMARY};
  background-color: ${({backgroundColor}) => backgroundColor};
  font-family: ${typography.FONT_FAMILY_SECONDARY};
  font-size: ${({width}) => width === BUTTON_SIZE.SMALL ? '14px' : '16px'};
  font-weight: ${typography.FONT_WEIGHT_BOLD};
  color: ${colors.WHITE};
  cursor: pointer;
  transition-duration: .3s;
  &:hover {
    background-color: ${colors.PRIMARY_DARK};
    color: ${colors.WHITE};
  }
`;