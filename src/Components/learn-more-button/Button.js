import './learn_more_button.css'
import React from 'react'



const learn_more_button = (props) => {
    return (
        <>
            <button type="button" class="btn">{props.label}</button>
        </>

    )
}

export default learn_more_button;