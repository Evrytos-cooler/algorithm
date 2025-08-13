type CamelCase<str extends string> = str extends `${infer A}_${infer B}`
	? `${A}${Capitalize<CamelCase<B>>}`
	: str
