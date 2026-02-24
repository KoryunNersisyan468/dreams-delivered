import CIcon from '@coreui/icons-react'
import {
  cilArrowCircleLeft,
  cilArrowCircleRight
} from '@coreui/icons'
import React, { useEffect, useState } from 'react';

const Pagination = ({ totalItems, itemsPerPage, onPageChange,pagenumber }) => {

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState( pagenumber || 1);
   const pageRange = 5;

  const handlePageChange = (newPage) => {

    localStorage.setItem("currentPage", JSON.stringify(newPage))

    setCurrentPage(newPage);
    onPageChange(newPage);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.max(1, currentPage - Math.floor(pageRange / 2));
    const endPage = Math.min(totalPages, startPage + pageRange - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li key={i} className={i === currentPage ? 'active' : ''}>
          <button onClick={() => handlePageChange(i)}>{i}</button>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <div className='paginationComponent' >
      <ul className="pagination">
        {currentPage > 1 && (
          <li>
            <button onClick={() => handlePageChange(currentPage - 1)}><CIcon icon={cilArrowCircleLeft} /></button>
          </li>
        )}
        {renderPageNumbers()}
        {currentPage < totalPages && (
          <li>
            <button onClick={() => handlePageChange(currentPage + 1)}><CIcon icon={cilArrowCircleRight} /></button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;