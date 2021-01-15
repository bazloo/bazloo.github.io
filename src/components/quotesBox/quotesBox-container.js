import React from 'react';
import { connect } from 'react-redux';
import QuotesBox from './quotesBox';
import { generateNewQuote } from '../../redux/quotesBox-reduser'
import * as axios from 'axios';

class QuotesBoxContainer extends React.Component {
    
    componentDidMount() {
      axios.get('https://api.quotable.io/random').then(response => {
      this.props.generateNewQuote(response.data);

    });
    };
    getNewQuote = () => {
      axios.get('https://api.quotable.io/random').then(response => {
      this.props.generateNewQuote(response.data);

    });
    };
    makeTweet = () => {}
    
    render() { return <QuotesBox {...this.props} getNewQuote={this.getNewQuote}/>};
};

let mapStateToProps = (state) => {return {newQuote: state.newQuote}};
export default connect(mapStateToProps,{generateNewQuote})(QuotesBoxContainer);