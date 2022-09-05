import * as api from "api-pareto-ugly-stuff"
import { doUntilImp } from "../private/doUntilImp"

export const doUntil: api.XDoUntil = (
    stack,
    test,
    //callback: () => void,

) => {
    doUntilImp(stack, test)
}
