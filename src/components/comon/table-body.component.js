const TableBody = ({ rows, columns }) => {
    return ( 
        <tbody>
            {
                rows.map( row => (
                    <tr>
                        {
                            columns.map( column => column.content(row, column.path) )
                        }
                    </tr>
                ) )
            }
        </tbody>
     );
}
 
export default TableBody;