import {BUTTON_SIZE} from "constants/buttonSizes"
import "./Buttons.css"

function Buttons({classN, color, size = BUTTON_SIZE.big, text, spinner}) {
    return (
        <button className={classN}
                style={{backgroundColor: color, width: size}}>{text} {spinner}
        </button>
    )
}

export default Buttons