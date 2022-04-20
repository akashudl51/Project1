import React from 'react';
import './User.css'
const Pagination = ({ postsPerPage, totalPosts, paginate,currentPage,onChange}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
           <a>{currentPage} to {postsPerPage} of {totalPosts}</a>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
              
            </a>
         
          </li>
        ))}
        <select 
                     value={postsPerPage}
                     onChange={event=>onChange(event.target.value)}
                    
                    className="custom-select ">
                        
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>20</option>
                       
                    </select>
      </ul>
      
    </nav>
  );
};

export default Pagination;