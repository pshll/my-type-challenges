// type Chainable = {
// 	option(key: string, value: any): any
// 	get(): any
// }

type Chainable<Options = {}> = {
	option<S extends string, V>(
		key: S,
		value: V
	): Chainable<Options & { [K in S]: V }>
	get(): Options
}
