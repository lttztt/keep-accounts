import createId from '@/lib/createId';

const localStorageName = 'tagList';

const tagListModel: TagListModal = {
  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageName) || '[]');
    return this.data;
  },
  create(name) {
    const names = this.data.map(item => item.name);
    if (names.indexOf(name) >= 0) {
      return 'duplicated';
    }
    const id = createId().toString();
    this.data.push({id, name: name});
    this.save();
    return 'success';
  },
  save() {
    window.localStorage.setItem(localStorageName, JSON.stringify(this.data));
  },
  update(id, name) {
    const idList = this.data.map(item => item.id);
    if (idList.indexOf(id) >= 0) {
      const names = this.data.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        return 'duplicated';
      } else {
        const tag = this.data.filter(item => item.id === id)[0];
        tag.name = name;
        this.save();
        return 'success';
      }
    } else {
      return 'not found';
    }
  },
  remove(id) {
    const ids = this.data.map(item => item.id);
    if (ids.indexOf(id) >= 0) {
      this.data = this.data.filter(item => item.id === id);
      this.save();
      return true;
    } else {
      return false;
    }
  }
};

export default tagListModel;