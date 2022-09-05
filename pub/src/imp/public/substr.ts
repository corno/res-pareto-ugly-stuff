import * as api from "api-pareto-ugly-stuff"

export const substr: api.FSubStr = ($) => {
    return $.value.substr($.begin, $.length)
}
