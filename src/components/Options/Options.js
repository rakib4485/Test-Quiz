import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Options = ({option, checkAnswer,disabledOption}) => {
    return (
        <div className='optin-btn'>
            <button disabled={disabledOption} onClick={()=> checkAnswer(option)} className='option-btn' value={option}><ArrowSmallRightIcon className="arrow-icon"/> {option}</button>
        </div>
    );
};

export default Options;