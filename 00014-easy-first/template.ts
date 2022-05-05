// type First<T extends any[]> = any
type First<T extends any[]> = T extends [infer R, ...infer P] ? R : never