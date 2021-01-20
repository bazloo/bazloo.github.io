import React from 'react';
import { connect } from 'react-redux';
import QuotesBox from './quotesBox';
import { generateNewQuote, chooseColor } from '../../redux/quotesBox-reduser'
import * as axios from 'axios';

class QuotesBoxContainer extends React.Component {
    

    componentDidMount() {
      axios.get('https://api.quotable.io/random').then(response => {
      this.props.generateNewQuote(response.data);
      
      let random = (min, max) =>{
        return Math.floor(Math.random() * (max - min) + min);
      }

      this.props.chooseColor(this.props.newQuote.backgroundColor[random(0,12)]);
    });
    };
    getNewQuote = () => {
      axios.get('https://api.quotable.io/random').then(response => {
      this.props.generateNewQuote(response.data);

    });
    };
        
    render() { 
      return (<QuotesBox {...this.props} getNewQuote={this.getNewQuote} />)};
};

let mapStateToProps = (state) => {return {newQuote: state.newQuote}};
export default connect(mapStateToProps,{generateNewQuote, chooseColor})(QuotesBoxContainer);