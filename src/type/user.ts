export interface GetUserInfoType {
  message: string;
  data: {
    snsId: number;
    name: string;
    profileUrl: string;
  };
}

export interface UserType {
  snsId: number;
  name: string;
}

export interface GetSolvedListType {
  message: string;
  data: [
    {
      id: number;
      title: string;
      level: string;
      number: number;
      oldestSolvedDate: string;
    },
  ];
}
