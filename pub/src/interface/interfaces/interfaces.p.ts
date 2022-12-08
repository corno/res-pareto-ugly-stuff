export type IStreamConsumer<PT> = {
    readonly "onData": ($: PT) => void
    readonly "onEnd": () => void
}