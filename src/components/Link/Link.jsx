import "./Link.css"

function Link({styleVariant, text}) {
    return (
        <a href="#" className={styleVariant}>{text}</a>
    )
}

export default Link