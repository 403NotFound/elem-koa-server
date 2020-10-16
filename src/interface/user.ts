export interface userInfo {
  _id: string;
  username: string;
  password?: string;
  __v: number;
}

export interface tagInfo {
  _id: object;
  tags: string[];
  __v: number;
}
