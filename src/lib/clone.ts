export default function clone<T>(data: T):T{  // 泛型变量 定义输入和输出是同一种类型
  return JSON.parse(JSON.stringify(data))
}
