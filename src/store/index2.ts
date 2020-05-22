import tagListModel from '@/models/tagListModel';
import recordListModel from '@/models/recordListModel';

const store = {
  // tag store
  tagList: tagListModel.fetch(),
  findTag(id: string){
    return this.tagList.filter(t => t.id === id)[0];
  },
  removeTag: (id: string) => {
    return tagListModel.remove(id);
  },
  updateTag: (id: string, name: string) => {
    return tagListModel.update(id, name);
  },
  createTag: (name: string) => {
    let message = tagListModel.create(name);
    if (message === 'duplicated') {
      window.alert('标签名重复');
    } else if (message === 'success') {
      window.alert('创建成功');
    }
  },
// record store
  recordList: recordListModel.fetch(),
  createRecord: (record: RecordItem) => recordListModel.create(record)
};

export default store;