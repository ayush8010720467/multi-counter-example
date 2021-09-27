function Button(props){
    return(
        <button onClick={props.performOp} className={props.styling}>{props.children}</button>
    )
}
export default Button;