// type MyReadonly2<T, K> = any


// type MyReadonly2<T, K extends keyof T> = T & { readonly [S in K]: T[S]}
type Diff<T, K> = T extends K ? never : T
type MyReadonly2<T, K extends keyof T = keyof T> = 
   { readonly [S in K]: T[S] }
   & { [S in Diff<keyof T, K>]: T[S] }
