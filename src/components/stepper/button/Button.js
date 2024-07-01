import React from 'react';
import './button.css'; // Import the CSS file

function Button({ setValue }) {
    const handleClick = () => {
        setValue(prev => (prev < 6 ? prev + 1 : prev)); // Increment only if prev < 5
    };

    return (
        <div className="button-container">
            <button className="custom-button" onClick={handleClick}>
                Click Me
            </button>
        </div>
    );
}

export default Button;
