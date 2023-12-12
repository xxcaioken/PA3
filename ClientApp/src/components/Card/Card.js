import React, { useState } from 'react';
import './Card.css'
const Card = React.memo((props) => {

    const [mustToSee, setMustToSee] = useState(props.mustToSee);



    return (
        mustToSee ? (
            <div style={{ marginInline: '20%' ,position:'fixed'}}>
                <div className='title'>
                    <span className='titleText'>{props.title}</span>
                </div>
                <div className='description'>
                    <span className='descriptionText'>{props.description}</span>
                    <button className='okButton' onClick={() => setMustToSee(!mustToSee)}>
                        {"OK"}
                    </button>
                </div>
            </div>
        ) : null
    );
});

export default Card;