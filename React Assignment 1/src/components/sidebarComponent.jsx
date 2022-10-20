import './css/sidebar.css';
function SidebarComponent(props){
    return(
        <div className="sidebar">
            <h4>List Header</h4>
            <div className="sidebar-items">
            {
            props.sidebar.map((sidebaritems)=>
            <div className="sidebar-item">
                <div className="sidebar-itemname">{sidebaritems.sidebaritemname}</div>
            </div>
            )
        }

            </div>
        </div>
    )
}

export default SidebarComponent;