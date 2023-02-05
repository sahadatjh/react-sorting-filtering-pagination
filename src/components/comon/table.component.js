import React from "react";
import TableHeader from './table-header.component';
import TableBody from './table-body.component';

const Table = ({ rows, columns, sortColumn, onSort }) => {
    return ( 
        <table className='table table-striped table-hoer table-bordered'>
            <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort}/>
            <TableBody rows={rows} columns={columns}/>
        </table>
    );
}
 
export default Table;