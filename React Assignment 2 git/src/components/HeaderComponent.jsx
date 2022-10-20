import './css/header.css';

function HeaderComponent(props) {
    return (
        <div className="header">
            <h1>{props.header}</h1>
        </div>

    );
}

export default HeaderComponent;