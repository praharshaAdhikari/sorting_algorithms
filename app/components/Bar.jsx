const Bar = (props) => {
    const barStyle = 
    {
        padding: `${Math.floor(props.length/4.5)}px 1px`,
    }

    return(
        <span 
            className={"mx-bar " + (props.current ? "bg-yellow-300" : "bg-green-500")}
            style={ barStyle }
        >
        </span>
    )
}

export default Bar;