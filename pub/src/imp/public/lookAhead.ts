import * as api from "api-pareto-ugly-stuff"

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
