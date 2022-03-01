import React from 'react';
import s from './MyInput.module.css';

const Myinput = (props) => {
    return (props.label
        ?
        <div className={s.inputBox}>
            <input className={s.myInput} {...props} />

            <label>{props.label}</label>
        </div>
        :
        <input className={s.myInput} {...props} />
    )

}

export default Myinput;
