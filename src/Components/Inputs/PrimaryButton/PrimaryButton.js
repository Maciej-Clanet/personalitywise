import "./PrimaryButton.css"


export default function PrimaryButton({onClick, text, type="button", disabled=false}){

    return(
        <button 
            className="primary-button" 
            type={type} 
            disabled={disabled}
            onClick={onClick ? onClick : null}>
                {text}
            </button>
    )
}