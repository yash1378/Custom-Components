import React from 'react';
import './struct.css';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
const Pagination_Struct= React.memo(() => {
    const placeholderArray = new Array(15).fill(null);
    const [data,setData] = useState([]);
    console.log(data)

    let {id} = useParams();

    const fetchProducts = async()=>{
        const response = await axios.get(`https://dummyjson.com/products?limit=15&&skip=${15*(id-1)}`)
        console.log(response.data.products)
        setData(response.data.products);
    }
    useEffect(() => {
        const fetchProducts = async () => {
            if (id !== undefined) {
                const response = await axios.get(`https://dummyjson.com/products?limit=15&&skip=${15 * (id - 1)}`);
                setData(response.data.products);
            }
        };
    
        fetchProducts();
    }, [id]); // Only depends on id
    

    return (
        <div className="products">
            {data && data.length > 0
                ? data.map((prod) => (
                      <span className="products__single" key={prod.id}>
                          <img src={prod.thumbnail} alt={prod.title} className='image'/>
                      </span>
                  ))
                : placeholderArray.map((_, index) => (
                      <span className="loading-indicator" key={index}>
                          {/* Render a placeholder element */}
                          Loading...
                      </span>
                  ))}
        </div>
    );
})

export default Pagination_Struct;
