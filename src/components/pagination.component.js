import _ from 'lodash';

const Pagination = ({ totalItems, pageCount, activePage, ClickedPage }) => {
    if(totalItems<=pageCount) return;

    const totalPages = Math.ceil(totalItems/pageCount);
    const pages = _.range(1, totalPages+1, 1);

    return ( 
        <nav aria-label="...">
            <ul className="pagination">
                <li className={ activePage > 1 ? "page-item" : "page-item disabled" } onClick={ () => activePage >  1 ? ClickedPage(activePage-1) : null }>
                    <span className="page-link">Previous</span>
                </li>
                {
                    pages.map(page=>(
                        <li className={activePage===page?'page-item active':'page-item'} onClick={ ()=>ClickedPage(page) }>
                            <span className="page-link">{page}</span>
                        </li>
                    ))
                }
                <li className={activePage === totalPages ? 'page-item disabled':'page-item'} onClick={ () => activePage < totalPages ? ClickedPage(activePage+1) : null }>
                    <a className="page-link">Next</a>
                </li>
            </ul>
        </nav>
     );
}
 
export default Pagination;