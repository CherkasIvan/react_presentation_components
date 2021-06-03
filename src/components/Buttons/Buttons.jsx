import {StyledButton} from './ButtonStyles';
import {BUTTON_SIZE} from 'constants/buttonSizes';
import {memo} from "react";

function Buttons({
                   gradient,
                   className,
                   color = 'blue',
                   onClick,
                   size = BUTTON_SIZE.big,
                   children,
                   text,
                   radius,
                   type = 'submit'
                 }) {
  return (
    <StyledButton
      gradient={gradient}
      className={className}
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

export default memo(Buttons);