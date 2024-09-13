import * as api from "../../interface"

export const f_includes: api.FIncludes = ($) => {
    const searchString = $.value
    $.array.forEach(($) => {
        if ($ === searchString) {
            return true
        }
    })
    return false
}