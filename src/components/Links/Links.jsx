import "./Links.css"
import {Link} from "react-router-dom";
import {LINK_PATH} from "../../constants/linkPath";


function Links({classN, path=LINK_PATH.link, text}) {

    return (
        <Link to={path} className={classN}>{text}</Link>
    )
}

export default Links