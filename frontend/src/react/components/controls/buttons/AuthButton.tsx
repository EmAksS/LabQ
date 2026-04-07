export const AuthButton = ({text, onClick}) => {

    return (
        <button 
        className="button button--to-berry"
        onClick={onClick}>
            <p>{text}</p>
        </button>
    );
}