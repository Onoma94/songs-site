import React from 'react';

const Pagination = ({itemsPerPage, totalItems, paginate}) =>
{
    const pageNumbers = [];
    for(let i=1; i <= Math.ceil(totalItems / itemsPerPage); i++)
    {
        pageNumbers.push(i)
    }
    return(
        <div className="pagination">
            {pageNumbers.map(number => 
                (
                    <div key={number} className="page-item">
                        <div onClick={() => paginate(number)} /*href="!#/songs"*/ className="page-link">
                            {number}
                        </div>
                    </div>
            ))}
        </div>
    )
}

export default Pagination;