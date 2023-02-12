import * as pt from 'pareto-core-types'

import * as api from "../../interface"
import { increment } from "../private/increment.p"
import { panic } from "../private/panic.p"

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