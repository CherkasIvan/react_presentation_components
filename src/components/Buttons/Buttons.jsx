import {BUTTON_SIZE} from "constants/buttonSizes"
import "./Buttons.css"

function Buttons({classCSS, color, size = BUTTON_SIZE.big, text, spinner,iconRight,iconLeft}) {
    return (
        <button
                className={classCSS}
                style={{backgroundColor: color, width: size}}>{iconLeft} {text} {spinner} {iconRight}
        </button>
    )
}

export default Buttons