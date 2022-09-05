import * as api from "api-pareto-ugly-stuff"

export const JSONStringify: api.FJSONStringify = <T>($: T) => {
    return JSON.stringify($, undefined, "\t")
}
