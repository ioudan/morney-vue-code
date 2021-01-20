type RecordItem = {
  tags: string[];
  note: string;
  type: ('-' | '+');
  amount: string;
  createdAt?: Date;
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

interface Window {
  labelList: Tag[];
  labelFind: (id: string) => Tag | undefined;
  labelCreate: (name: string) => number;
  labelRemove: (id: number) => number;
  labelUpdate: (id: number, name: string) => number;
}