import { StyledButton } from './ButtonStyles';
import { BUTTON_SIZE } from 'constants/buttonSizes';

function Button({ color='blue', onClick, size = BUTTON_SIZE.big, children, text, radius }) {
    return (
        <StyledButton
            backgroundColor={color}
            onClick={onClick}
            width={size}
            borderRadius={radius}
        >
            {text}
            {children}
        </StyledButton>
    )
};

export default Button;