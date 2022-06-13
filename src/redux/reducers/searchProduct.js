import { searchProductString } from "../actionCreator/actionString";

const initialState = {
    searchProduct: "",
}

const searchProductReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case searchProductString:
            return { ...prevState, searchProduct: action.payload }
        default:
            return { ...prevState };
    }
}

export default searchProductReducer