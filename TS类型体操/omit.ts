type myOmit<Obj, K extends keyof Obj> = {
	[P in Exclude<keyof Obj, K>]: Obj[P]
}
