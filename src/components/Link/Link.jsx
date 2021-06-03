import "./Link.css"

function Link({styleVariant, text}) {
  return (
    <a href="https://ru.reactjs.org/docs/react-component.html#componentdidmount" className={styleVariant}>{text}</a>
  )
}

export default Link