import { loginUser } from "../../utiliti/auth";
import { loginString } from "./actionString";

export const loginAction = (body) => ({
    type: loginString,
    payload: loginUser(body)
})