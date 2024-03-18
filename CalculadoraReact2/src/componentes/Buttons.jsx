
function Buttons(props) {
    
    return (
        
        <button  className="buttons"  onClick={props.onClick} data-label={props.label} data-type={props.type} >{props.label}</button>
    )
}

export default Buttons
