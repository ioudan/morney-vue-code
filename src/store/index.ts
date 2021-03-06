import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createId from '@/lib/idCreator';

Vue.use(Vuex); // 把 store 绑到 Vue.prototype.$store = store

const store = new Vuex.Store({
  state: { // data
    recordList: [],
    createRecordError: null,
    createTagError: null,
    tagList: [],
    currentTag: undefined,
  } as RootState,
  mutations: { // methods
    setCurrentTag(state, id: string) {
      state.currentTag = state.tagList.filter(t => t.id === parseInt(id))[0];
    },
    updateTag(state, {id, name}: { id: string; name: string }) {
      const idList = state.tagList.map(item => item.id);
      if (idList.indexOf(parseInt(id)) >= 0) {
        const names = state.tagList.map(item => item.name);
        if (names.indexOf(id) >= 0) {
          window.alert('标签名重复');
        } else {
          const tag = state.tagList.filter(item => item.id === parseInt(id))[0];
          tag.name = name;
          store.commit('saveTags');
        }
      }
    },
    removeTag(state, id: string) {
      let index = -1;
      for (let i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].id === parseInt(id)) {
          index = i;
          break;
        }
      }
      state.tagList.splice(index, 1);
      store.commit('saveTags');
    },
    fetchRecords(state) {
      // JSON.parse返回一个any，等于是被强制断言了
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state, record) {
      const record2: RecordItem = clone(record);
      record2.createdAt = new Date().toISOString();
      state.recordList.push(record2);
      store.commit('saveRecords');
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    fetchTags(state) {
      // JSON.parse一次就等于重新clone一次
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
      if (!state.tagList || state.tagList.length === 0) {
        store.commit('createTag', '衣');
        store.commit('createTag', '食');
        store.commit('createTag', '住');
        store.commit('createTag', '行');
      }
    },
    createTag(state, name: string) {
      // 对Error初始化置空，怕会留到下次
      state.createTagError = null;
      const names = state.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        state.createTagError = new Error('tag name duplicated');
        return;
      }
      const id = createId();
      state.tagList.push({id, name});
      store.commit('saveTags');
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
  }
});

export default store;