type MyPartial<T> = {
	[P in keyof T]?: T[P]
}
