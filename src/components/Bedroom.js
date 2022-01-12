import React from "react";

function Bedroom(props) {
    
    return (
        <>
            <div className={props.className}>
                <h1 className={props.headerClassName}>{props.title}{props.bedNum}</h1>
            </div>
        </>
    )
}

export default Bedroom