import tagStore from '@/store/tagStore';
import recordStore from '@/store/recordStore';

const store = {
  ...tagStore,
  ...recordStore
};

console.log('store', store);
export default store;