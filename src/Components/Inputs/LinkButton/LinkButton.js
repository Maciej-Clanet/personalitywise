import "./LinkButton.css"


export default function LinkButton({text, onClick, type="button"}){

    return(
        <button className="link-button" type={type} onClick={onClick ? onClick : null}>{text}</button>
    )
}