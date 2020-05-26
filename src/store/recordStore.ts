import clone from '@/lib/clone';

const localStorageName = 'recordList';

const recordStore =  {
  recordList: [] as RecordItem[],
  fetchRecords() {
    this.recordList = JSON.parse(window.localStorage.getItem(localStorageName) || '[]') as RecordItem[]; // 强制指定 返回类型
    return this.recordList;
  },
  createRecord(record: RecordItem) {
    let record2: RecordItem = clone(record);
    record2.createAt = new Date().toISOString();
    this.recordList.push(record2);
    this.saveRecords();
  },
  saveRecords() {
    window.localStorage.setItem(localStorageName, JSON.stringify(this.recordList));
  }
};
recordStore.fetchRecords()

export default recordStore;
