// type DeepReadonly<T> = any
type DeepReadonly<T> = keyof T extends never ? T : {
    readonly [S in keyof T]: DeepReadonly<T[S]>
}
// type DeepReadonly<T> = {
//     readonly [S in keyof T]: keyof T[S] extends never ? T[S] : DeepReadonly<T[S]>
// }