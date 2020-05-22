type RecordItem = {
  tags: string[],
  notes: string,
  type: string,
  amount: number, //数据类型 object | string
  createAt?: Date // 类 | 构造函数
}
type Tag = {
  id: string
  name: string
}
type TagListModal = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicated' // 联合类型  枚举
  update: (id: string, name: string) => 'success' | 'duplicated' | 'not found'
  remove: (id: string) => boolean
  save: () => void
}


interface Window {
  tagList: Tag[]
  createTag: (name: string)=> void
}