type MyRequire<T> = {
	[K in keyof T]-?: T[K]
}
