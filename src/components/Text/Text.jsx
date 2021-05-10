import "./Text.css"

function Text ({ tag: TypeText, text, classCSS}) {
    return <TypeText className={classCSS}>{text}</TypeText>
}

export default Text