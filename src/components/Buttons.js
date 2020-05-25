import React from "react";

function Buttons(props) {
    return (
        <div className="button center">
            <button className="btn" onClick={props.sortFirst}>First Name</button>
            &nbsp;
            <button className="btn" onClick={props.sortLast}>Last Name</button>
            &nbsp;
            <button className="btn" onClick={props.sortDob}>Date of Birth</button>
        </div>
    )
}

export default Buttons;