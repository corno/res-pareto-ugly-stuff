import * as api from "api-pareto-ugly-stuff"

export const f_substr: api.FSubStr = ($) => {
    return $.value.substr($.begin, $.length)
}
