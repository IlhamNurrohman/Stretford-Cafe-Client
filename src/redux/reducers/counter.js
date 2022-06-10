import { counterUpAction, counterDownAction } from "../actionCreator/actionString"

const initialState = {
    counter: 0,
}

const counterReducers = (prevState = initialState, action) => {
    switch (action.type) {
        case counterUpAction:
            return { ...prevState, counter: prevState.counter + 1 }
        case counterDownAction:
            return { ...prevState, counter: prevState.counter === 0 ? prevState.counter = 0 : prevState.counter - 1 }
        default:
            return prevState
    }
}

export default counterReducers