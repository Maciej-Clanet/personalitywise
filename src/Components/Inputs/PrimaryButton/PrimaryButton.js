import "./PrimaryButton.css"


export default function PrimaryButton({onClick, text, type="button"}){

    return(
        <button className="primary-button" type={type} onClick={onClick ? onClick : null}>{text}</button>
    )
}