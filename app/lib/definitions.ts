export type Worker = {
  id: string;
  name: string;
  email: string;
};

export type Location = {
  name: string;
};

export type Report = {
  date: Date;
  name: string;
  location: string;
  id? : number
};
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};
