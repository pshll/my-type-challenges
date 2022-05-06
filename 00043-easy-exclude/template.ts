// type MyExclude<T, U> = any
type MyExclude1<T, U> = T extends U ? never : T