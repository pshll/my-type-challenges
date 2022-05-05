// type TupleToObject<T extends readonly any[]> = any
type TupleToObject<T extends readonly string[]> = {[S in T[number]]: S}
