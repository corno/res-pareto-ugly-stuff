
import * as pt from "pareto-core-types"

import * as common from "api-pareto-common"

export type FArrayLength = <T>($: pt.Array<T>) => number

export type FGetElement = <T>($: {
    readonly "array": pt.Array<T>,
    readonly "position": number
}) => T

export type FIncludes = ($: {
    readonly "array": pt.Array<string>,
    readonly "value": string
}) => boolean

export type FJSONStringify = <T>($: T) => string

export type FCreateJSONParser = <T>(
    $i: {
        callback: ($: T) => void,
        onError: ($: String) => void,
    },
) => common.IStreamConsumer<string>

//export type XPush = <T>(array: T[], element: T) => void
//export type FToRawArray = <T>($: pt.Array<T>) => T[]
//export type FToRawDictionary = <T>($: pt.Dictionary<T>) => { [key: string]: T }

//string
export type FTrimEnd = ($: string) => string

export type FStringLength = ($: string) => number

export type FSubStr = ($: {
    readonly "value": string,
    readonly "begin": number,
    readonly "length": number,
}) => string

export type FStartsWith = ($: {
    readonly "contextString": string
    readonly "searchString": string
}) => boolean

// export type PDoUntil = <T>(
//     $: pm.Stack<T>,
//     $c: ($: T) => boolean
// ) => void

// export type PLookAhead = <T>(
//     $: pm.Stack<T>,
//     $i: {
//         readonly "exists": ($: T) => void
//         readonly "notExists": () => void
//     }
// ) => void
