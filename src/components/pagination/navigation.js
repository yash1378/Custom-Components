import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function Navigation() {
    let { id } = useParams();
    const [currentPage, setCurrentPage] = useState(parseInt(id)); // State to track current page
    const page = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    console.log(currentPage)

    return (
        <div className='navi'>
            {
                currentPage < 11 && currentPage > 1 && <Link to={`/pagination/${currentPage - 1}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <span className='navi_child left' onClick={() => {
                        setCurrentPage((prev) => prev - 1);
                    }}><FaAngleLeft /></span>
                </Link>
            }


            {
                page.map((pageNumber) => (
                    <Link to={`/pagination/${pageNumber}`} key={pageNumber} style={{ textDecoration: 'none', color: 'inherit' }}><span
                        key={pageNumber}
                        className={`navi_child ${pageNumber === currentPage ? 'active' : ''}`}
                        onClick={() => handleClick(pageNumber)}
                    >
                        {pageNumber}
                    </span></Link>
                ))
            }

            {
                currentPage < 10 && currentPage > 0 && <Link to={`/pagination/${currentPage + 1}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <span className='navi_child right' onClick={() => {
                        setCurrentPage((prev) => prev + 1);
                    }}><FaAngleRight /></span>
                </Link>
            }

        </div>
    );
}

export default Navigation;
