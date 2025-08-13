//  不行 type isNever<T> = T extends never ? true : false
// 需要包装成元组类型以禁用分布式行为， 否则整个表达式直接返回 never
type isNever<T> = [T] extends [never] ? true : false
type test = isNever<never>
type test2 = isNever<1>
