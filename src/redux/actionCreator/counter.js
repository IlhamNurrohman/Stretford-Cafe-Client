import { counterUpAction, counterDownAction } from "./actionString"

export const counterUp = () => ({
    type: counterUpAction
});

export const counterDown = () => ({
    type: counterDownAction
})