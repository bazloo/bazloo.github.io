import React from 'react';
import style from './textArea.module.css';

const TextArea = (props) =>{
   
    return (
        <div className={style.text}>
            <span className={style.conten}>
                {props.content ? props.content : "waiting for quote..."}
            </span>
            <span id="author" className={style.author}>
                {props.author ? props.author: "..."}
            </span>
        </div>
    );

}

export default TextArea;