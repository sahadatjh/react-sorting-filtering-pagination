const Filter = ({ items, selectedItem, clickedItem }) => {
    return ( 
        <ul className="list-group">
        {
            items.map(item => (
                <li 
                    className={ item === selectedItem ? "list-group-item active" : "list-group-item" }
                    onClick={ () => clickedItem( item )}
                >{ item }</li>
            ))
        }
        </ul>
     );
}
 
export default Filter;