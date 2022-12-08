import * as api from "../../interface"

export const f_JSONStringify: api.FJSONStringify = <T>($: T) => {
    return JSON.stringify($, undefined, "\t")
}
