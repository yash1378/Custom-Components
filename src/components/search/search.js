import React from 'react';
import './search.css';

function Search({ onInputChange, data }) {
    const handleChange = (event) => {
        const { value } = event.target;
        onInputChange(value); // Call parent component's input change handler
    };

    return (
        <div className='search-container'>
            <input type='text' className='input' onChange={handleChange} />
            <ul className='suggestions'>
                {data.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Search;
