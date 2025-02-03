const s = '123456'
type Reverse<str extends string> = str extends `${infer first}${infer rest}`
	? `${Reverse<rest>}${first}`
	: ''

type Reverse1 = Reverse<'123'>
