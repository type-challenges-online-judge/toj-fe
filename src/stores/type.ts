export interface IsAuthType {
  isAuth: boolean;
}

export interface IsAuthActionType {
  setLoginState: (loginState: boolean) => void;
}
