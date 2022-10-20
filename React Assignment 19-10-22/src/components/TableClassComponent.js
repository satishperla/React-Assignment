import React from "react";
import '../css/table.css';
class TableClassComponent extends React.Component{
    render(){
        
        return(
            
            <div className="content">
            <table>
                <th>
                    <td>Id</td><td>Name</td><td>Author</td><td>Publication</td>
                    {
                       this.props.data.map((details) =>
                            <tr>
                                <td>{details.id}</td>
                                <td>{details.name}</td>
                                <td>{details.author}</td>
                                <td>{details.publication}</td>
                            </tr>
                        )
                    }

                </th>
            </table>
        </div>
        )
    }

}

export default TableClassComponent;