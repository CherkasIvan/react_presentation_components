import { StyledButton } from './ButtonStyles';
import { BUTTON_SIZE } from 'constants/buttonSizes';

function Buttons({ color='blue', onClick, size = BUTTON_SIZE.big, children, text, radius, type='submit'}) {
    return (
        <StyledButton
            backgroundColor={color}
            onClick={onClick}
            width={size}
            type={type}
            borderRadius={radius}
        >
            {text}
            {children}
        </StyledButton>
    )
};

export default Buttons;