type myPick<Obj, K extends keyof Obj> = {
	[P in K]: Obj[P]
}
