const Square = ({ value, active, handleOnClick }) => {
    /*-----------Render-----------*/
    return (
        <>
            {active === true ?
                <button className="square-win" onClick={handleOnClick}
                    style={value === "X" ? { color: "red" } : { color: "blue" }}
                >
                    {value}
                </button>
                :
                <button className="square" onClick={handleOnClick}
                    style={value === "X" ? { color: "red" } : { color: "blue" }}
                >
                    {value}
                </button>
            }
        </>
    )
}

export default Square;