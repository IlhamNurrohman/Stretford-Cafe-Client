import { searchProductString } from "./actionString";

export const searchProductAction = (element) => ({
    type: searchProductString,
    payload: element
})