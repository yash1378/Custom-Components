import React, { useState } from 'react';
import axios from 'axios';
import Search from '../components/search/search';

function SearchHook() {
    const [data, setData] = useState([]);
    const [btnClickCount, setBtnClickCount] = useState(0); // Count for button clicks
    const [apiCallCount, setApiCallCount] = useState(0); // Count for successful API calls
    const [timer, setTimer] = useState(null); // Timer state
    const [substring,setSubstring] = useState("");

    const apifetch = async (value) => {
        try {
            console.log(value)
            const response = await axios.get(`http://localhost:5000/search?substring=${value}`);
            console.log(response.data.words);
            setData(response.data.words); // Update data state with fetched words
            setApiCallCount(prevCount => prevCount + 1); // Increment API call count
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const deboundFunc = (value) => {
        if (timer) clearTimeout(timer); // Clear existing timer if present
        setTimer(setTimeout(() => {
            apifetch(value); // Execute apifetch after debounce delay (2000ms)
        }, 500));
        setBtnClickCount(prevCount => prevCount + 1); // Increment button click count on each click
    }

    const handleInputChange = (value) => {
        setSubstring(value); // Update substring state with the input value
        deboundFunc(value); // Trigger debounce function on input change
    }

    return (
        <div>
        <Search onInputChange={handleInputChange} data={data} />
        </div>
    );
}

export default SearchHook;
