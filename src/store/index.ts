import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router/index';
import clone from '@/lib/clone';
import createId from '@/lib/createId';

Vue.use(Vuex);

type RootState = {
  recordList: RecordItem[],
  tagList: Tag[],
  currentTag?: Tag
}

const store = new Vuex.Store({
  state: {
    recordList: [],
    tagList: [],
    currentTag: undefined
  } as RootState,
  mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[]; // 强制指定 返回类型
    },
    createRecord(state, record: RecordItem) {
      let record2: RecordItem = clone(record);
      record2.createAt = new Date();
      state.recordList.push(record2);
      store.commit('saveRecords');
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    fetchTags(state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    },
    findTag(state, id: string) {
      state.currentTag = state.tagList.filter(t => t.id === id)[0];
    },
    createTag(state, name: string) {
      const names = state.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        window.alert('标签名重复');
      }
      const id = createId().toString();
      state.tagList.push({id, name: name});
      window.alert('创建成功');
      store.commit('saveTags');
    },
    updateTag(state, payload: { id: string, name: string }) {
      const {id, name} = payload;
      const idList = state.tagList.map(item => item.id);
      if (idList.indexOf(id) >= 0) {
        const names = state.tagList.map(item => item.name);
        if (names.indexOf(name) >= 0) {
          window.alert('标签名重复了');
        } else {
          const tag = state.tagList.filter(item => item.id === id)[0];
          tag.name = name;
          store.commit('saveTags');
        }
      }
    },
    removeTag(state, id: string) {
      const ids = state.tagList.map(item => item.id);
      if (ids.indexOf(id) >= 0) {
        state.tagList = state.tagList.filter(item => item.id !== id);
        store.commit('saveTags');
        router.back();
      }else {
        window.alert('删除失败');
      }
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
  },
  actions: {},
  modules: {}
});
export default store;
