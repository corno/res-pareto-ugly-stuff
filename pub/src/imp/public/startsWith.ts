import * as api from "api-pareto-ugly-stuff"

export const startsWith: api.FStartsWith = ($) => {
    return $.contextString.startsWith($.searchString)
}