import createId from '@/lib/idCreator';

const key = 'labelList';

const labelListModel: LabelList = {
  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(key) || '[]');
    return this.data;
  },
  create(tagName) {

    const names = this.data.map(item => item.name);
    if (names.indexOf(tagName) >= 0) {
      return 0;
    }
    this.data.push({id: createId(), name: tagName});
    window.localStorage.setItem(key, JSON.stringify(this.data));
    return 1;
  },
  update(id, name) {
    const ids = this.data.map(item => item.id);
    if (ids.indexOf(id) >= 0) {
      const tag = this.data.filter(item => item.id === id)[0];
      tag.name = name;
      window.localStorage.setItem(key, JSON.stringify(this.data));
      return 1;
    } else {
      return 0;
    }
  },
  remove(id){
    const ids = this.data.map(item => item.id);
    if (ids.indexOf(id) >= 0) {
      this.data = this.data.filter(item => item.id !== id)
      window.localStorage.setItem(key, JSON.stringify(this.data));
      return 1;
    }else{
      return 0;
    }
  }

};

// export default model
export {labelListModel};