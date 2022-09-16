import * as api from "api-pareto-ugly-stuff"

export const f_startsWith: api.FStartsWith = ($) => {
    return $.contextString.startsWith($.searchString)
}