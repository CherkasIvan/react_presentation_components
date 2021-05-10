import './Text.css'
import React from 'react';

function Text({ type,styleVariant, text}) {
    return React.createElement(type,
        {className: styleVariant},
        text);
}

export default Text

// function Text ({ tag: TypeText, text, styleVariant}) {
//     return <TypeText className={styleVariant}>{text}</TypeText>
// }