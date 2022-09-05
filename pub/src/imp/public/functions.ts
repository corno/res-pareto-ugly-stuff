import * as pt from "pareto-core-types"
import * as pl from "pareto-core-internals"
import * as api from "api-pareto-ugly-stuff"

export const arrayLength: api.FArrayLength = (array) => {
    let counter = 0
    array.forEach(($) => {
        counter += 1
    })
    return counter
}
export const getElement: api.FGetElement = ($) => {
    const pos = $.position
    let counter = 0
    $.array.forEach(($) => {
        if (counter === pos) {
            return $
        }
        counter += 1
    })
    throw new Error("PANIC: position does not exist")
}
// export const push: api.XPush = (array, element) => {
//     array.push(element)
// }
export const includes: api.FIncludes = ($) => {
    const searchString = $.value
    $.array.forEach(($) => {
        if ($ === searchString) {
            return true
        }
    })
    return false
}
export const JSONStringify: api.FJSONStringify = <T>($: T) => {
    return JSON.stringify($, undefined, "\t")
}

export const JSONParse: api.FJSONParse = <T>($: string) => {
    return JSON.parse($)
}

// export const toRawArray: api.FToRawArray = <T>(array: pt.Array<T>) => {
//     const out: T[] = []
//     array.forEach(($) => {
//         out.push($)
//     })
//     return out
// }

// export const toRawDictionary: api.ToRawDictionary = <T>(dict: pt.Dictionary<T>) => {
//     const out: { [key: string]: T } = {}
//     dict.forEach(() => false, ($, key) => {
//         out[key] = $
//     })
//     return out
// }
export const trimEnd: api.FTrimEnd = ($) => {
    return $.trimEnd()
}

export const stringLength: api.FStringLength = ($) => {
    return $.length
}

export const substr: api.FSubStr = ($) => {
    return $.value.substr($.begin, $.length)
}

export const startsWIth: api.FStartsWith = ($) => {
    return $.contextString.startsWith($.searchString)
}

export const doUntil: api.XDoUntil = (
    stack,
    test,
    //callback: () => void,

) => {

    while (true) {
        let stop = false
        stack.pop(
            ($) => {
                stack.push($)

                const goOn = test($)
                if (!goOn) {
                    //callback()
                    stop = true
                }
            },
            () => {
                stop = true
            }
        )
        if (stop) {
            return
        }
    }
}

export const lookAhead: api.XLookAhead = (
    stack,
    exists,
    notExists,
) => {
    stack.pop(
        ($) => {
            stack.push($)
            exists($)
        },
        () => {
            notExists()
        }
    )
}
