import * as api from "api-pareto-ugly-stuff"

export const doUntilImp: api.XDoUntil = (
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
