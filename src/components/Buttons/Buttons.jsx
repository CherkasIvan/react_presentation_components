import {BUTTON_SIZE} from "constants/buttonSizes"
import "./Buttons.css"


function Buttons({classN, color, size = BUTTON_SIZE.big, text,}) {

    return (
        <button className={classN}
                style={{backgroundColor: color, width: size}}>{text}
        </button>
    )
}

export default Buttons