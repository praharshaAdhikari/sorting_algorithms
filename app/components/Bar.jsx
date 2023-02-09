import windowDimensions from "./windowDimensions";

const Bar = (props) => {
    const { width, height } = windowDimensions();
    const barStyle = width > 393 ?
    {
        padding: `${Math.floor(props.length/4.5)}px 1px`,
    } : 
    {
        padding: `1px ${Math.floor(props.length/5.5)}px`,
    }

    return(
        <span 
            className={"xsm:my-bar xl:mx-bar " + (props.current ? "bg-yellow-300" : "bg-green-500")}
            style={ barStyle }
        >
        </span>
    )
}

export default Bar;