import * as pl from "pareto-core-lib"

import * as api from "api-pareto-ugly-stuff"


export const createJSONParser: api.FCreateJSONParser = (
    $i,
) => {
    let temp: null | string = ""
    return ($) => {
        switch ($[0]) {
            case "data":
                pl.cc($[1], ($) => {
                    if (temp === null) {
                        pl.panic("unexpected data after end")
                    }
                    temp += $
                })
                break
            case "end":
                pl.cc($[1], ($) => {
                    if (temp === null) {
                        pl.panic("unexpected end twice")
                    }
                    try {
                        $i.callback(JSON.parse(temp))
                    } catch (error) {
                        if (!(error instanceof Error)) {
                            pl.panic("unexpected error type")
                        }

                        $i.onError(error.message)
                    }
                    temp = null

                })
                break
            default: pl.au($[0])
        }
    }
}
