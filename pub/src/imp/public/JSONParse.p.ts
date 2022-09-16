import * as api from "api-pareto-ugly-stuff"

export const f_JSONParse: api.FJSONParse = <T>($: string) => {
    return JSON.parse($)
}