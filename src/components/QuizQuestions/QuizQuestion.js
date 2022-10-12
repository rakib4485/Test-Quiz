import React, { useState } from 'react';
import Options from '../Options/Options';
import {  EyeIcon } from '@heroicons/react/24/solid';
import './QuizQuestion.css';

const QuizQuestion = ({questions}) => {

    const {question, correctAnswer, options, id} = questions;
    
    const [disabled, setDisabled] = useState(false);
    const [disabledOption, setDisabledOption] = useState(false);
    const [answer, setAnswer] = useState([]);

    const checkAnswer = (value) =>{
        setDisabledOption(true);
        if(value === correctAnswer){
            alert('Yes your answer is right');
            
        }
        else{
            alert('Thik kore por')
        }
    }
    const showCorrectAnswer = () =>{
        setAnswer(correctAnswer);
        setDisabled(true);
    }
    return (
        <div className='quiz-card'>
            <div>
                <p>{question}</p>
                    {
                        options.map((option , idx) => <Options
                            key={idx}
                            option = {option}
                            id = {id}
                            checkAnswer = {checkAnswer}
                            disabledOption = {disabledOption}
                        ></Options>)
                    }
                <p>Correct Answer: {answer}</p>
            </div>
            <div>
                <button disabled={disabled} onClick={showCorrectAnswer} >
                <EyeIcon  style={{width: '25px'}}></EyeIcon>
                </button>
            </div>
        </div>
    );
};

export default QuizQuestion;