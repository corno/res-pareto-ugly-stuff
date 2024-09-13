
import * as pm from 'pareto-core-state'
import * as pl from 'pareto-core-lib'

import * as test from "lib-pareto-test"

import * as api from "../../../interface"


import * as pub from "../../../../pub"

export const createGetTestset: api.FCreateGetTestset = ($d) => {
    return () => {

        const builder = pm.createUnsafeDictionaryBuilder<test.TTestElement>()
        function createTest(name: string, actual: string, expected: string) {
            builder.add(name, {
                type: ["test", {
                    type: ["simple string", {
                        actual: actual,
                        expected: expected
                    }]
                }]
            })
        }

        let res: null | string = null

        // const jsonParser = pub.createJSONParser<string>(
        //     (t) => {
        //         res = t
        //     }
        // )

        // jsonParser(["data", '"foo"'])
        // jsonParser(["end", null])

        // builder.add("JSON Parser", {
        //     type: ["test", {
        //         type: ["boolean", { test: res === "foo" }]
        //     }]
        // })


        return pl.asyncValue({
            elements: builder.getDictionary()
        })
    }
}