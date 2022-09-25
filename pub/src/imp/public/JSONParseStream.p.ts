import * as pi from "pareto-core-internals"

import * as api from "api-pareto-ugly-stuff"

export const f_JSONParseStream: api.FJSONParseStream = ($d) => {
    return pi.wrapAsyncValueImp(
        true,
        (cb) => {
            let temp = ""
            $d.connectToStream({
                onData: ($) => {
                    temp += $
                },
                onEnd: () => {
                    cb(JSON.parse(temp))
                }
            })
        }
    )
}