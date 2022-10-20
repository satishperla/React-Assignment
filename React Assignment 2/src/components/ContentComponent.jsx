import './css/content.css';

function ContentComponent(props) {
    return (
        <div className="content">
            <div className="main-content">
                <h2>{props.about}</h2>
            </div>
            <div className="quick-links">
                <div className="list1">
                    <h5>{props.link}</h5>
                </div>
                <div className="list2">
                    <h5>{props.link}</h5>
                </div>
            </div>
        </div>
    );

}

export default ContentComponent;