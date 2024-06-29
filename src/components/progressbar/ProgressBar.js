import React, { useEffect } from 'react'
import './bar.css';

function Bar({ value = 0, backgroundColor = "green",onComplete=()=>{}}){
    useEffect(() => {
        if (value >= 100) {
            onComplete();
        }
    }, [value]);

    return (
        <>
            <div className="progress_frame">
                <span className="color"
                    style={{ width: `${value}%`, backgroundColor: `${backgroundColor}` }}
                ></span>
                <span className="value"
                    style={{
                        color: value < 50 ? 'black' : 'white'
                    }}
                >{value}%</span>
            </div>
            {
                value < 100 ? (
                    <div className="loading-indicator">
                        {/* Render a placeholder element */}
                        &nbsp;Loading...
                    </div>)
                    : (
                        <div className='text'>Completed</div>
                    )
            }
        </>
    )
}

export default Bar;
