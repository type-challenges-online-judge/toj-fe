export interface GetUserInfoType {
  message: string;
  data: {
    snsId: number;
    name: string;
    profileUrl: string;
  };
}
