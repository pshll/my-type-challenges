// type TupleToUnion<T> = any
// type TupleToUnion<T extends any[]> = T[number]
// type TupleToUnion<T> = T extends Array<infer R> ? R : never
type TupleToUnion<T extends any[]> = keyof {
    [S in T[number]]: S
}



// keyof T ===> key
// T extends any[] :::> T[number]  ===> value