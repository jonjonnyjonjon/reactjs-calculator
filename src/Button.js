import React from "react"

function Button(props) {

    return (
        <button
            style={props.style}
            value={props.value}
            onClick={() => props.handleClick(props.value)}
        >{props.value}</button>
    )
    
}

export default Button