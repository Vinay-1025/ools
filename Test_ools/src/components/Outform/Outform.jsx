import React, { useRef } from 'react'
import './Videoplayer.css'

const Outform = ({formState, setFormState}) => {


    const player = useRef(null);

    const closeForm = (e) => {
        if (e.target === player.current){
            setFormState(false);
        }
    }

    return (
    <div className={`out-form ${formState ? '' : 'hide'}`} ref={player} onClick={closeForm}>
        <h1>Hello World</h1>
    </div>
    )
}

export default Outform
