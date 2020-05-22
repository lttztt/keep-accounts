import clone from '@/lib/clone';
export const localStorageName = 'recordList';

const recordListModel = {
  data: [] as RecordItem[],
  fetch(){
    this.data =  JSON.parse(window.localStorage.getItem(localStorageName) || '[]') as RecordItem[]; // 强制指定 返回类型
    return this.data;
  },
  create(record: RecordItem){
    let record2: RecordItem = clone(record);
    record2.createAt = new Date()
    this.data.push(record2);
    this.save();
  },
  save(){
    window.localStorage.setItem(localStorageName, JSON.stringify(this.data))
  }
}

export default recordListModel

