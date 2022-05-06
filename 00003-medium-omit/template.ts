// type MyOmit<T, K> = any

// 辅助type
type MyExclude2<T, U> = T extends U ? never : T
// 返回对象
type MyOmit<T, K extends keyof T> = {
    [S in MyExclude2<keyof T, K>]: T[S]
}