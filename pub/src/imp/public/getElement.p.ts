import * as pt from "pareto-core-types"

import * as api from "api-pareto-ugly-stuff"
import { increment } from "../private/f_increment"
import { panic } from "../private/p_panic"

export const f_getElement: api.FGetElement = <T>(
    //I don't want to have to specify this
    $: {
        readonly "array": pt.Array<T>;
        readonly "position": number;
    }
) => {
    const pos = $.position
    let counter = 0
    let res: T | undefined = undefined
    $.array.forEach(($) => {
        if (counter === pos) {
            res = $
        }
        counter = increment(counter)
    })
    if (res === undefined) {
        panic("PANIC: position does not exist")
    } else {
        return res
    }
}