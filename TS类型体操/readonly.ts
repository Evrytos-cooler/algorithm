const obj = { a: 1, b: 1 }
type toReadOnly<T extends Record<any, any>> = T extends object
	? { readonly [P in keyof T]: toReadOnly<T[P]> }
	: T

const readOnlyObj: toReadOnly<typeof obj> = { a: 1, b: 2 }
