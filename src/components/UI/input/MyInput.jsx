import React from 'react';
import s from './MyInput.module.css';

const Myinput = (props) => {
    const classInputBox = `${s.inputBox} ${s[props?.valid]}`
    return (props.label
        ?
        <div className={classInputBox}>
            <input className={s.myInput} {...props} />

            <label>{props.label}</label>
        </div>
        :
        <input className={s.myInput} {...props} />
    )

}

export default Myinput;
