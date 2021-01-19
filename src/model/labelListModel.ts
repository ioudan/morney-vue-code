const key = 'labelList';
type LabelList = {
  data: string[];
  get: () => string[];
  set: (name: string) => number;

}
const labelListModel: LabelList = {
  data: [],
  get() {
    this.data = JSON.parse(window.localStorage.getItem(key) || '[]');
    return this.data;
  },
  set(tagName: string) {

    if(this.data.indexOf(tagName)>=0){
      return 0;
    }
    this.data.push(tagName);
    window.localStorage.setItem(key, JSON.stringify(this.data));
    return 1;
  },

};

// export default model
export {labelListModel};