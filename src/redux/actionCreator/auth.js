import { loginUser } from "../../utiliti/auth";
import { loginString, logoutString } from "./actionString";

export const loginAction = (body) => ({
    type: loginString,
    payload: loginUser(body)
})

export const logoutAction = () => ({
    type: logoutString,
})