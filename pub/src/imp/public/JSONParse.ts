import * as api from "api-pareto-ugly-stuff"

export const JSONParse: api.FJSONParse = <T>($: string) => {
    return JSON.parse($)
}