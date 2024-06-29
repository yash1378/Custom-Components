import React from 'react'
import Bar from '../../components/progressbar/ProgressBar';
import './bar.css';
import { useState } from 'react';
import { useEffect } from 'react';
import valuelogic from '../../hooks/progress/logic';
function ProgressBar() {
    const [value, setValue] = useState(0);
    useEffect(() => {
        valuelogic(setValue);
        // console.log("ren")
    }, []);

    return (
        <div className="page">
            <div className='Heading'>Progress Bar..</div>
            <Bar value={value} onComplete={() => console.log("Completed...")} />
        </div>
    )
}

export default ProgressBar
