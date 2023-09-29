export interface IsAuthType {
  isAuth: boolean;
}

export interface IsAuthActionType {
  setIsAuthState: (loginState: boolean) => void;
}

export interface UserInfoType {
  userInfo: { snsId: number; name: string; profileUrl: string };
}

export interface UserInfoActionType {
  setUserInfoState: (userInfo: UserInfoType) => void;
}
