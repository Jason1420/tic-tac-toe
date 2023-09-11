import { useState } from "react";
const Square = (props) => {

    return (
        <>
            {props.active === true ?
                <button className="square-win" onClick={props.handleOnClick}
                    style={props.value === "X" ? { color: "red" } : { color: "blue" }}
                >
                    {props.value}
                </button>

                :

                <button className="square" onClick={props.handleOnClick}
                    style={props.value === "X" ? { color: "red" } : { color: "blue" }}
                >
                    {props.value}
                </button>
            }
        </>
    )
}

export default Square;