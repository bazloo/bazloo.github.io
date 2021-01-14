import React from 'react';
import Button from '../button/button.jsx';
import TextArea from '../textArea/textArea.jsx';
import style from './quotesBox.module.css';

const QuotesBox = (props) => {

    //temporary variables for visualization of button's title
    let newQ = 'New qoute';
    let tweetQ = 'Tweet quote'
    return (
        <div className={style.wrapper}>
            <TextArea />
            <div className={style.btnWrapper}>
                <Button title={newQ} />
                <Button title={tweetQ} />
            </div>
        </div>
    );

}

export default QuotesBox;