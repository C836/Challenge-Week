export type Student = {
  _id: number;
  name: string;
  group: keyof Class;
  age: number;
};

export enum Class {
  "TF",
  "T2",
  "T3",
  "T4",
  "T5",
  "T6",
  "T7",
  "T8",
  "T9",
  "T10",
  "T11",
  "T12",
  "T13",
  "T14",
  "T15",
  "T16",
  "T17",
  "T18",
  "T19",
  "T20",
}

export type Ages = {
  "18-21": {
    count: number;
  };
  "22-25": {
    count: number;
  };
  "26-29": {
    count: number;
  };
  "30-33": {
    count: number;
  };
  over33: {
    count: number;
  };
};
