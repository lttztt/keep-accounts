const localStorageName = 'tagList'

type TagListModal = {
  data: string[]
  fetch: () => string[]
  create: (name: string) => 'success' | 'duplicated' // 联合类型  枚举
  save: () => void
}

const tagListModel:TagListModal = {
  data: [],
  fetch(){
    this.data = JSON.parse(window.localStorage.getItem(localStorageName) || '[]')
    return this.data
  },
  create(name){
    if(this.data.indexOf(name) >= 0) {return 'duplicated'}
    this.data.push(name)
    this.save()
    return 'success'
  },
  save(){
    window.localStorage.setItem(localStorageName, JSON.stringify(this.data))
  }
}

export default tagListModel