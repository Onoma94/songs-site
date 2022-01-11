import React from 'react';

const Pagination = ({songsPerPage, totalSongs, paginate}) =>
{
    const pageNumbers = [];
    for(let i=1; i <= Math.ceil(totalSongs / songsPerPage); i++)
    {
        pageNumbers.push(i)
    }
    return(
        <div className="pagination">
            {pageNumbers.map(number => 
                (
                    <div key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="!#/songs" className="page-link">
                            {number}
                        </a>
                    </div>
            ))}
        </div>
    )
}

export default Pagination;