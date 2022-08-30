import * as pt from "pareto-core-types"
import * as pl from "pareto-core-internals"
import * as api from "api-pareto-ugly-stuff"

export const arrayLength: api.ArrayLength = (array) => {
    return array.length
}
export const getElement: api.GetElement = (array, position) => {
    return array[position]
}
export const push: api.Push = (array, element) => {
    array.push(element)
}
export const includes: api.Includes = (array, value) => {
    return array.includes(value)
}
export const JSONStringify: api.JSONStringify = (data) => {
    return JSON.stringify(data, undefined, "\t")
}

export const JSONParse: api.JSONParse = (str) => {
    return JSON.parse(str)
}

export const toRawArray: api.ToRawArray = <T>(array: pt.Array<T>) => {
    const out: T[] = []
    array.forEach(($) => {
        out.push($)
    })
    return out
}

export const toRawDictionary: api.ToRawDictionary = <T>(dict: pt.Dictionary<T>) => {
    const out: { [key: string]: T } = {}
    dict.forEach(() => false, ($, key) => {
        out[key] = $
    })
    return out
}
export const trimEnd: api.TrimEnd = (str) => {
    return str.trimEnd()
}

export const stringLength: api.StringLength = (str) => {
    return str.length
}

export const substr: api.SubStr = (str, begin, length) => {
    return str.substr(begin, length)
}

export const max: api.Max = (a, b) => {
    const numbers = pl.flatten(b)

    let currentMax = a
    numbers.forEach(($) => {
       currentMax = Math.max(currentMax, $)
    })
    return currentMax
}