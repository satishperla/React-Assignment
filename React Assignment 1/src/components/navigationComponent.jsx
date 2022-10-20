import './css/navigation.css';
function NavigationComponent(props){
    return(
        <div className="navigation">
            <div className="navitems">
            {
            props.navbar.map((navitems)=>
            <div className="itemname"><strong>{navitems.itemname}</strong></div>
            )
        }
    
        </div>
        </div>
    )

}

export default NavigationComponent;