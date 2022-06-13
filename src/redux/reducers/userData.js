import { FULFILLED, getUserDataString, PENDING, REJECTED } from "../actionCreator/actionString";

const initialState = {
    data: [],
    isLoading: false,
    err: null,
    isSuccess: null,
    isLoggedIn: false,
}

export const getUserDataReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case getUserDataString + PENDING:
            return { ...prevState, isLoading: true, err: null }
        case getUserDataString + FULFILLED:
            return { ...prevState, data: action.payload.data.data[0], isLoading: false, isSuccess: true, isLoggedIn: true }
        case getUserDataString + REJECTED:
            return { ...prevState, isLoading: false, isSuccess: false, err: action.payload.data }
        default:
            return prevState
    }
}