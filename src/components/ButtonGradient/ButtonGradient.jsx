import React from 'react';
import {Gradient} from 'react-gradient';
import {memo} from "react";
import {BUTTON_SIZE} from "../../constants/buttonSizes";

const gradients = [
    ['#bd19d6', '#ff2121'],
];

function ButtonGradient({
                            text,
                            type = 'submit',
                            onClick,
                            size = BUTTON_SIZE.big,
                        }) {
    return (
        <Gradient
            gradients={gradients}
            property="background"
            duration={3000}
            angle="45deg"
            onClick={onClick}
            width={size}
            type={type}
        >{text}
        </Gradient>
    )
};

export default memo(ButtonGradient);