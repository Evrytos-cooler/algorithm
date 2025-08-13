const a = 'a=1&b=2&c=3'
type strToRecord<str extends string> = str extends `${infer key}=${infer value}`
	? { [k in key]: value extends `${infer num extends number}` ? num : never }
	: never
type STR = strToRecord<'a=1'>
const str: STR = { a: 1 }
