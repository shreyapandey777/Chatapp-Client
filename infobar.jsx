import React from 'react';
import { Link } from 'react-router-dom';



const Infobar = (prop) => {
    return (
        <div id="infobar">
            {prop.room}
            <Link to="/">
                <div id="exit" style={{ fontFamily: "system-ui", fontStyle: "normal" }} onClick={prop.disconnect}>
                    X
                </div>
            </Link>
        </div>
    )
}

export default Infobar;