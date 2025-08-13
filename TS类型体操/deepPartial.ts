type MyDeepPartial<T> = {
	[K in keyof T]?: T[K] extends object ? MyDeepPartial<T[K]> : T[K]
}
