function clone(data: RecordItem|Tag) {
  return JSON.parse(JSON.stringify(data));
}

export default clone;
