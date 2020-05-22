import createId from '@/lib/createId';

const localStorageKeyName = 'tagList';

const tagStore = {
  tagList: [] as Tag[],
  fetchTags() {
    this.tagList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.tagList;
  },
  saveTags() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.tagList));
  },
  findTag(id: string) {
    return this.tagList.filter(t => t.id === id)[0];
  },
  removeTag(id: string) {
    const ids = this.tagList.map(item => item.id);
    if (ids.indexOf(id) >= 0) {
      this.tagList = this.tagList.filter(item => item.id === id);
      this.saveTags();
      return true;
    } else {
      return false;
    }
  },
  updateTag(id: string, name: string) {
    const idList = this.tagList.map(item => item.id);
    if (idList.indexOf(id) >= 0) {
      const names = this.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        return 'duplicated';
      } else {
        const tag = this.tagList.filter(item => item.id === id)[0];
        tag.name = name;
        this.saveTags();
        return 'success';
      }
    } else {
      return 'not found';
    }
  },
  createTag(name: string) {
    const names = this.tagList.map(item => item.name);
    if (names.indexOf(name) >= 0) {
      window.alert('标签名重复');
      return 'duplicated';
    }
    const id = createId().toString();
    this.tagList.push({id, name: name});
    window.alert('创建成功');
    this.saveTags();
    return 'success';
  }
};

tagStore.fetchTags();

export default tagStore;