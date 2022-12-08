import * as api from "../../interface"

export const f_startsWith: api.FStartsWith = ($) => {
    return $.contextString.startsWith($.searchString)
}