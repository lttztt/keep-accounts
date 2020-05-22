import tagListModel from '@/models/tagListModel';

export default {
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
  }
}