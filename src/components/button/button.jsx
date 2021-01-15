import React from 'react';
import style from './button.module.css';

const Button = (props) =>{
    return (
        <a onClick={()=>{props.getNewQuote()}} className={style.btn}>New quote</a>
    );

}

export default Button;