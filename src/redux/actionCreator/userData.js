import { GetUser } from "../../utiliti/auth";
import { getUserDataString } from "./actionString";

export const getUserDataAction = (token) =>({
    type: getUserDataString,
    payload: GetUser(token)
})