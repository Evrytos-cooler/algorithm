type StringToNumber<str extends string> = str extends `${infer num extends number}`
	? num
	: never
