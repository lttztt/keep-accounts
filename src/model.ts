export const localStorageName = 'recordList';

const model = {
  fetch(){
    return JSON.parse(window.localStorage.getItem(localStorageName) || '[]') as RecordItem[]; // 强制指定 返回类型
  },

  save(value: RecordItem[]){
    window.localStorage.setItem(localStorageName, JSON.stringify(value))
  }
}

export default model

