import React, { useState, useEffect } from 'react';
import './step.css';
import Step from '../../components/stepper/Step';

function Stepper() {
    const [value, setValue] = useState(0);
    const arr = ["Next","Next", "Enter your Shipping Info", "Complete the Payment", "Confirm your Delivery", "Delivered","Bla"];

    useEffect(() => {
        // Handle any side effects based on the 'value' state here
    }, [value]);

    return (
        <div className="page">
            <div className="heading">CheckOut</div>
            <Step value={value} setValue={setValue}/> {/* Pass setValue as a prop */}
            <div className="status-container">
                <div className="status-text">{arr[value]}</div>
            </div>
        </div>
    );
}

export default Stepper;
