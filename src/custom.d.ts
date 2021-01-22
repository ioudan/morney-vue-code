type RootState = {
  recordList: RecordItem[];
  tagList: Tag[];
  createRecordError: Error | null;
  createTagError: Error | null;
  currentTag?: Tag;
}
type RecordItem = {
  tags: Tag[];
  note: string;
  type: ('-' | '+');
  amount: string;
  //由于json不支持Date类型，所以JSON.parse()时，createdBy的Date类型会被转成string；
  // json只支持object、array、string、number、"true"、"false"、“null”
  createdAt?: string;
}
type Tag = {
  id: number;
  name: string;
}
type TagList = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => number;
  update: (id: number, name: string) => number;
  remove: (id: number) => number;
  save: () => void;
}

// interface Window {
// }