import './css/content.css';
function ContentComponent(props){
    return(
        <div className="content">
            <div className="content-text">
            <h4 className="contentheader">Content Header</h4>
            <p className="maincontent">{props.maincontent}</p>
        </div>
        </div>
    );
}

export default ContentComponent;