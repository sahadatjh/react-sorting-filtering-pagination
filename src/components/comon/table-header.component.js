const TableHeader = ({ columns, onSort, sortColumn }) => {

    const handleSort = ({ path, sorting }) => {
        if(!sorting) return;

        if (sortColumn.path === path) {
            if (sortColumn.order === 'asc') {
                onSort({path, order:'desc'})
            } else {
                onSort({path, order:'asc'})
            }
        } else {
            onSort({path, order:'asc'})
        }
    }

    const getIcon = (path) => {
        if ( sortColumn.path === path ) {
            if (sortColumn.order ==='asc') {
                return <i className="bi bi-sort-up"> </i>;
            }else{
                return <i className="bi bi-sort-down"></i>;
            }
        } else return null;
    }

    return (
        <thead>
            <tr className="">
                {
                    columns.map( column => <th onClick={ () => handleSort( column ) }> { column.label } { getIcon(column.path) }</th> )
                }
            </tr>
        </thead>
    )
}

export default TableHeader;