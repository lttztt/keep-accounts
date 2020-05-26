type RecordItem = {
  tags: string[],
  notes: string,
  type: string,
  amount: number, //数据类型 object | string
  createAt?: string // 类 | 构造函数 由于需要json序列化所以Date类型不能支持
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

type RootState = {
  recordList: RecordItem[],
  tagList: Tag[],
  currentTag?: Tag
}

interface Window {
  tagList: Tag[]
  createTag: (name: string)=> void
  removeTag: (id: string) => boolean
  updateTag: (id: string, name: string) => 'success' | 'duplicated' | 'not found'
  findTag: (id: string) => Tag | undefined
  recordList: RecordItem[]
  createRecord: (record: RecordItem)=> void
}