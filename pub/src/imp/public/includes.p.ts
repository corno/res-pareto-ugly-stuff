import * as api from "api-pareto-ugly-stuff"

export const f_includes: api.FIncludes = ($) => {
    const searchString = $.value
    $.array.forEach(($) => {
        if ($ === searchString) {
            return true
        }
    })
    return false
}