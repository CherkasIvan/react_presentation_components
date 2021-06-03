import {StyledRoundButton} from './RoundButtonStyles';
import {BUTTON_SIZE} from 'constants/buttonSizes';

function RoundButton({color = 'white', size = BUTTON_SIZE.ROUND_BUTTON_SIZE, children}) {
  return (
    <StyledRoundButton
      size={size}
      backgroundColor={color}
    >
      {children}
    </StyledRoundButton>
  )
};

export default RoundButton;