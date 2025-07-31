import React, { useState } from 'react';
import './CheckerTest.css'; 

const CheckerTest = () => {
    const [inp, setInp] = useState<string>('');
    const [show, setShow] = useState<boolean | null>(null);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInp(e.target.value);
    };

    
    
    const handleShow = (): void => {
        const num = Number(inp);

        if (isNaN(num) || inp.trim() === '') {
            setShow(null);
            return;
        }

        setShow(num % 2 === 0);
    };

    return (
        <div className="container">
            <h2 className="title">Even or Odd Checker</h2>
            <input
                type="number"
                placeholder="Enter a number"
                value={inp}
                onChange={handleInput}
                className="input"
            />
            <button onClick={handleShow} className="button">Check</button>

            {show !== null && (
                <p className={`result ${show ? 'even' : 'odd'}`}>
                    This number is {show ? 'even' : 'odd'}
                </p>
            )}
        </div>
    );
};

export default CheckerTest;
