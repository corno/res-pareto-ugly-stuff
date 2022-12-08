import * as api from "../../interface"
import { increment } from "../private/increment.p"

export const f_arrayLength: api.FArrayLength = (array) => {
    let counter = 0
    array.forEach(($) => {
        counter = increment(counter)
    })
    return counter
}