import * as pi from 'pareto-core-internals'

import * as api from "../../interface"


function au<RT>(_x: never): RT {
    throw new Error("unreachable")
}
function cc<T, RT>(input: T, callback: (output: T) => RT): RT {
    return callback(input)
}

export const createJSONParser: api.FCreateJSONParser = (
    $i,
) => {
    let temp: null | string = ""
    return ($) => {
        switch ($[0]) {
            case "data":
                cc($[1], ($) => {
                    if (temp === null) {
                        pi.panic("unexpected data after end")
                    }
                    temp += $
                })
                break
            case "end":
                cc($[1], ($) => {
                    if (temp === null) {
                        pi.panic("unexpected end twice")
                    }
                    try {
                        $i.callback(JSON.parse(temp))
                    } catch (error) {
                        if (!(error instanceof Error)) {
                            pi.panic("unexpected error type")
                        }

                        $i.onError(error.message)
                    }
                    temp = null

                })
                break
            default: au($[0])
        }
    }
}
