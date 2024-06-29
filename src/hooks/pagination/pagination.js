import React, { useEffect } from 'react'
import Pagination_Struct from '../../components/pagination/struct';
import Navigation from '../../components/pagination/navigation';
import './pagination.css'
function Pagination_Data() {
    return (
        <div className='page'>
            <Pagination_Struct/>
            <Navigation/>
        </div>
    )
}

export default Pagination_Data;
