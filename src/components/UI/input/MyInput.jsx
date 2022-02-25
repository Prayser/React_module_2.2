import React from 'react';
import s from './MyInput.module.css';

const Myinput = (props) => {
    return (
        <input className={s.myInput} {...props} />
    );
}

export default Myinput;
