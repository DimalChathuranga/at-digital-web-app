import './Question.css'
import React from 'react'



const Question = (props) => {
    return (
        <>
        {props.answer ? (
            <div className='question-div first-question-div'>
                <div className='d-flex justify-content-between'>
                    <h6>{props.question}</h6>
                    <svg width="15" height="15" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H15" stroke="#6B3CC9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <p>{props.answer}</p>
            </div>
        ) : (
            <div className='d-flex question-div justify-content-between'>
                <h6>{props.question}</h6>
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        )}
        </>
    );
};

export default Question;