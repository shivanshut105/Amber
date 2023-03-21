import './GreenButton.scss';

const GreenButton = (props) => {

    return (
        <div className="button-container">
            <a href={props.href}>
                <button href={props.href} className={`signup-btn ${props.className}`} onClick={props.onClick}>
                    {props.children}
                </button>
            </a>
        </div>
    )
}

export default GreenButton;