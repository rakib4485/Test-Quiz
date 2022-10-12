import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestions/QuizQuestion';

const QuizDetails = () => {
    const quiz = useLoaderData();
    const data = quiz.data;
    const {name,logo} = data;
    const questions = quiz.data.questions;
    return (
        <div>
            <div>
                <h1>{name}</h1>
                <p>Total Question: {questions.length}</p>
                {
                    questions.map(question => <QuizQuestion
                        key={question.id}
                        questions = {question}
                    ></QuizQuestion>)
                }
            </div>
        </div>
    );
};

export default QuizDetails;