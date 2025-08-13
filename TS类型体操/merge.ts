type Merge<Obj1, Obj2> = {
	[P in keyof Obj1 | keyof Obj2]: P extends keyof Obj1
		? Obj1[P]
		: P extends keyof Obj2
		? Obj2[P]
		: never
}
