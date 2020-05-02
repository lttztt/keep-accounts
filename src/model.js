export const localStorageName = 'recordList';

const model = {
  fetch(){
    return JSON.parse(window.localStorage.getItem(localStorageName) || '[]')
  },

  save(value){
    window.localStorage.setItem(localStorageName, JSON.stringify(value))
  }
}

export default model

