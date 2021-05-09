import "./Texts.css"

const Texts = ({ tag: Tag, text, classN}) => (
    <Tag className={classN}>{text}</Tag>
)

export default Texts