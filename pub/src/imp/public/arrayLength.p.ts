import * as api from "api-pareto-ugly-stuff"
import { increment } from "../private/increment.p"

export const f_arrayLength: api.FArrayLength = (array) => {
    let counter = 0
    array.forEach(($) => {
        counter = increment(counter)
    })
    return counter
}