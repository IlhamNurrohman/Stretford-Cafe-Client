import { setCartFulfilled } from "../actionCreator/actionString"

const cartReducers = (prevState = initialState, action) => {
    switch (action.type) {
      case setCartFulfilled:
        return { ...prevState };

      default:
        return prevState;
    }
  };
  
  export default cartReducers;