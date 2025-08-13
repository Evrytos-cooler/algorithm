type split<
	S extends string,
	D extends string
> = S extends `${infer First}${D}${infer Rest}` ? [First, ...split<Rest, D>] : [S]
