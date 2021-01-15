import React from 'react';
import style from './textArea.module.css';

const TextArea = (props) =>{
    debugger;
    return (
        <div className={style.text}>
            {props.content ? props.content : "waiting for quote..."}
            <span id="author" className={style.author}>
                {props.author ? props.author: "..."}
            </span>
        </div>
    );

}

export default TextArea;