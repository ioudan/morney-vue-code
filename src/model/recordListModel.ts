import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';
const recordListModel = {
  data:[] as RecordItem[],
  create(record: RecordItem){
    const recordDeepClone = clone(record);
    recordDeepClone.created = new Date();
    this.data.push(recordDeepClone);
  },
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.data;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  },
};

// export default recordListModel
export {recordListModel};