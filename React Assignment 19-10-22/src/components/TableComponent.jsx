import '../css/table.css';
function TableComponent(props) {
    return (
        <div className="content">
            <table>
                <th>
                    <td>Id</td><td>Name</td><td>Author</td><td>Publication</td>
                    {
                        props.data.map((details) =>
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

export default TableComponent;