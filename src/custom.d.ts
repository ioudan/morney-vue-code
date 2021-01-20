type RecordItem = {
  tags: string[];
  note: string;
  type: ('-' | '+');
  amount: string;
  // created?: Date;
}
type Label = {
  id: number;
  name: string;
}
type LabelList = {
  data: Label[];
  fetch: () => Label[];
  create: (name: string) => number;
  update: (id: number, name: string) => number;
  remove: (id: number) => number;
}