import "./Link.css"

function Link({classCSS, text}) {
    return (
        <a href="#" className={classCSS}>{text}</a>
    )
}

export default Link