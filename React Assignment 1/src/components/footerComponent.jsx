function FooterComponent(props){
    return (
        <div className="footer">
             {props.copyright} <em>{props.company}</em>
            <p>{new Date().toDateString()}</p>
        </div>
    );
}

export default FooterComponent;