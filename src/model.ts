const recordListKey = 'recordList'
const model = {
    fetch() {
        return JSON.parse(window.localStorage.getItem(recordListKey) || '[]');
    },
    set(newRecord: RecordItem) {
        window.localStorage.setItem(recordListKey, JSON.stringify(newRecord));
    },
    clone(record: RecordItem){
        return JSON.parse(JSON.stringify(record));
    }
}

// export default model
export {model}