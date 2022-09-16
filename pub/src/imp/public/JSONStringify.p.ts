import * as api from "api-pareto-ugly-stuff"

export const f_JSONStringify: api.FJSONStringify = <T>($: T) => {
    return JSON.stringify($, undefined, "\t")
}
