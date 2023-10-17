const { BUY_LAPTOP, SELL_LAPTOP } = require("../Constants/constant");
let initialState ={
    noOfLaptop:10
  }
  let rootReducer = (state = initialState,action)=>{
    switch( action.type  ){
         case BUY_LAPTOP:
             return {
                 ...state,
                 noOfLaptop:state.noOfLaptop + 1
             }
            break;
         case SELL_LAPTOP:
             return {
                 ...state,
                 noOfLaptop: (state.noOfLaptop < 1) ? state.noOfLaptop : state.noOfLaptop - 1
             }
             break;
         default:
             return state;
    }
  }
module.exports = rootReducer;