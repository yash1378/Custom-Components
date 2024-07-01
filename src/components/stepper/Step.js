import React, { useEffect, useState } from 'react';
import Button from './button/Button';
import './style.css'
import { useRef } from 'react';

function Step({ setValue, value,Steps=4 }) {
    const [setterFunction, setSetterFunction] = useState(value);


    const calc = () =>{
        return ((Math.min(Steps-1,value-1))/(Steps-1))*100;
    }

    useEffect(() => {

    }, [value]); // Run effect when 'value' changes


    return (
        <>
            <div className='background-div'>
                <div className='inside' 
                style={{width:`${calc()}%`}}
                ></div>
            </div>
            <div className='bar'>
                {
                    [...Array(4)].map((_, index) => (
                        <span
                            key={index}
                            className='bar_circle'
                            style={{
                                backgroundColor: index + 1 < value ? '#28a745' : index + 1 === value ? '#007bff' : '#ccc',
                                color: index + 1 <= value ? 'white' : 'black'
                            }}
                        >
                            {index + 1 < value ? '✓' : index + 1}
                        </span>
                    ))
                }
            </div>

            <Button setValue={setValue} />
        </>
    );
}

export default Step;
