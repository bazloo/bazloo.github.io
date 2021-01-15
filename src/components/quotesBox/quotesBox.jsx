import React from 'react';
import Button from '../button/button.jsx';
import TextArea from '../textArea/textArea.jsx';
import style from './quotesBox.module.css';

const QuotesBox = (props) => {
        
    return (
        <div className={style.wrapper}>
            <TextArea author={props.newQuote.newQuote.author} content={props.newQuote.newQuote.content}/>
            <div className={style.btnWrapper}>
                <Button getNewQuote={props.getNewQuote} />
                <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" target="_blank"className={style.btn} data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
        </div>
    );

}

export default QuotesBox;