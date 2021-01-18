const recordListKey = 'recordList'
const model = {
    fetch() {
        return JSON.parse(window.localStorage.getItem(recordListKey) || '[]');

    },
    set(newRecord) {
        window.localStorage.setItem(recordListKey, JSON.stringify(newRecord));
    }
}

// export default model
export {model}