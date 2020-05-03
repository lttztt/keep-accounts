export const localStorageName = 'recordList';

const recordListModel = {
  deepClone(value: RecordItem){
    return JSON.parse(JSON.stringify(value))
  },
  fetch(){
    return JSON.parse(window.localStorage.getItem(localStorageName) || '[]') as RecordItem[]; // 强制指定 返回类型
  },

  save(value: RecordItem[]){
    window.localStorage.setItem(localStorageName, JSON.stringify(value))
  }
}

export default recordListModel

