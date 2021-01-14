import React from 'react';
import style from './textArea.module.css';

const TextArea = (props) =>{
    return (
        <div className={style.text}>
            here will be some quote
            <span id="author" className={style.author}>
                author's name
            </span>
        </div>
    );

}

export default TextArea;