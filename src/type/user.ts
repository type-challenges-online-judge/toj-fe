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
