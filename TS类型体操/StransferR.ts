const a = 'a=1&b=2&c=3'
type strToRecord<str extends string> = str extends `${infer key}=${infer value}`
	? { [k in key]: value }
	: never
type STR = strToRecord<'a=1'>
