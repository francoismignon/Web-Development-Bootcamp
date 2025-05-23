import React, { useState } from "react";

function ToDoItem(props) {

    // const [line, setLine] = useState(false);

    // function checked() {
    //     line ? setLine(false) : setLine(true);
    //     setLine(prevValue => {
    //         return !prevValue;
    //     });
    // }
    return (
        <div onClick={()=>props.onChecked(props.id)}>
            <li>{props.item}</li>
        </div>
    );
}
export default ToDoItem;