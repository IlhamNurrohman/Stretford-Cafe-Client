import { GetUser } from "../../utiliti/userData";
import { getUserData } from "./actionString";

export const getUserDataAction = (token) =>({
    type: getUserData,
    payload: GetUser(token)
})