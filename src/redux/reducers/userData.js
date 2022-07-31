import { FULFILLED, getUserData, PENDING, REJECTED } from "../actionCreator/actionString";

const initialState = {
    data: false,
    isLoading: false,
    err: null,
    isSuccess: null,
    isLoggedIn: false,
}

const getUserDataReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case getUserData + PENDING:
            return { ...prevState, isLoggedIn: true }
        case getUserData + FULFILLED:
            return { ...prevState, data: action.payload.data.data[0], isLoading: false, isSuccess: true, isLoggedIn: true }
        case getUserData + REJECTED:
            return { ...prevState, isSuccess: false, err: action.payload.data }
        default:
            return prevState
    }
}

export default getUserDataReducer