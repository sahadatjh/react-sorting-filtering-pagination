import { useState } from 'react';
import _ from 'lodash';
import getMovies from '../service/get-movies';
import getGenres from '../service/get-genres';
import Table from './comon/table.component';
import Filter from './filtering.component';
import Pagination from './pagination.component';

const Movies = () => {
    const allMovies = getMovies();
    const getgneres = getGenres();
    const allGeneres = ["All Generes", ...getgneres];

    const [movies, setMovies]=useState(allMovies);
    const [generes, setGeneres]=useState(allGeneres);
    const [sortColumn, setSortColumn ] = useState({path:'id',order:'asc'});
    const [pageCount, setPageCount] = useState(10)
    const [activePage, setActivePage] = useState(1)
    const [selectedGenres, setSelectedGenres] = useState("All Generes")

    const handleSort = (sortColumn) => {
        setSortColumn(sortColumn);
    }

    const handleActiveGenere = (genere) => {
        setSelectedGenres(genere)
    }
    
    const handlePageClick = (activePage) => {
        setActivePage(activePage)
    }

    const filterMovies = (movies) => {
        const filteredMovies = movies.filter(movie => {
          if(selectedGenres === "All Generes") return true;
    
          if(movie.genres.includes(selectedGenres)) return true;
    
          return false;
        });
        return filteredMovies; 
    }

    const paginateMovies = (movies) => {
        const start = (activePage-1)*pageCount;
        const paginetedMovies = movies.slice(start, start+pageCount);
        return paginetedMovies;
    }

    const sortMovies = (movies) => {
        const sortedMovies = _.orderBy(movies, [sortColumn.path],[sortColumn.order]);
        return sortedMovies;
    }

    const columns = [
        { label:"ID", path:'id', sorting: true, content: ( movie, key ) => <td>{movie[key]}</td> },
        { label:"Poster", path:'posterUrl', content: ( movie, key ) => <td><img src={movie[key]} style={{ height:'40px' }}/></td> },
        { label:"Title", path:'title',sorting: true, content: ( movie, key ) => <td>{movie[key]}</td> },
        { label:"Year", path:'year', sorting: true, content: ( movie, key ) => <td>{movie[key]}</td> },
        { label:"Derectors", path:'director', sorting: true, content: ( movie, key ) => <td>{movie[key]}</td> },
        { label:"Actores", path:'actors', sorting: true, content: ( movie, key ) => <td>{movie[key]}</td> }
    ]

    const filteredMovies = filterMovies(movies);
    const sortedMovies = sortMovies(filteredMovies);
    const paginatedMovies = paginateMovies(sortedMovies);
    return ( 
        <div className='row'>
            <h1 className='text-center text-muted text-uppercase m-3'>Movies table</h1>
            <div className='col-md-2'>
                <Filter items={ generes } selectedItem={ selectedGenres } clickedItem={ handleActiveGenere } />
            </div>
            <div className='col-md-10'>
                <div className='table-responsive'>
                    <Table rows={ paginatedMovies } columns={columns} sortColumn={sortColumn} onSort={handleSort}/>
                </div>
                <Pagination totalItems={ filteredMovies.length } pageCount={ pageCount } activePage={ activePage } ClickedPage={ handlePageClick }/>
            </div>
        </div>
    );
}
 
export default Movies;