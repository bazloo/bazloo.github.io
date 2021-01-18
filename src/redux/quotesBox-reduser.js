const GEN = 'GENERATE'
const BACKGROUND_COLOR = "CHOOSE-COLOR"
let initialState = {
    newQuote: "Waiting for new quote",
    backgroundColor: [
        {background:"linear-gradient(45deg, teal,rgba(172, 217, 231, 0.089))"},
        {background:"linear-gradient(45deg, #16a085,rgba(172, 217, 231, 0.089))"},
        {background:"linear-gradient(45deg, #27ae60,rgba(172, 217, 231, 0.089))"},
        {background:"linear-gradient(45deg, #2c3e50,rgba(172, 217, 231, 0.089))"},
        {background:"linear-gradient(45deg, #f39c12,rgba(172, 217, 231, 0.089))"},
        {background:"linear-gradient(45deg, #e74c3c,rgba(172, 217, 231, 0.089))"},
        {background:"linear-gradient(45deg, #9b59b6,rgba(172, 217, 231, 0.089))"},
        {background:"linear-gradient(45deg, #FB6964,rgba(172, 217, 231, 0.089))"},
        {background:"linear-gradient(45deg, #342224,rgba(172, 217, 231, 0.089))"},
        {background:"linear-gradient(45deg, #472E32,rgba(172, 217, 231, 0.089))"},
        {background:"linear-gradient(45deg, #BDBB99,rgba(172, 217, 231, 0.089))"},
        {background:"linear-gradient(45deg, #77B1A9,rgba(172, 217, 231, 0.089))"},
        {background:"linear-gradient(45deg, #73A857,rgba(172, 217, 231, 0.089))"}
    ],
    actualBackgroundCollor: null  
};
const quotesBoxReduser = (state = initialState, action) => {
    if(action.type === GEN){
        return{
            ...state, newQuote: action.quote
        }
    }
    else if(action.type === BACKGROUND_COLOR){
        return{
            ...state, actualBackgroundCollor: action.color
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
export const chooseColor = (color) => {
    return {
        type: BACKGROUND_COLOR,
        color
        
    }
};
export default quotesBoxReduser;