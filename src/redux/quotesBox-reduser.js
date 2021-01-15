const GEN = 'GENERATE'
let initialState = {
    newQuote: "Waiting for new quote"
};
const quotesBoxReduser = (state = initialState, action) => {
    if(action.type === GEN){
        return{
            ...state, newQuote: action.quote
        }
    }
    return state;
};
export const generateNewQuote = (quote) => {
    return {
        type: GEN,
        quote
    }
};
export default quotesBoxReduser;