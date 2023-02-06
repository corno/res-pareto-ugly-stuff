import * as api from "../../interface"

export const f_substr: api.FSubStr = ($) => {
    return $.value.substr($.begin, $.length)
}
