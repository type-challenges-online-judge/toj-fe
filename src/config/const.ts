export const GIT_HUB_LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=${
  process.env.NODE_ENV === 'development'
    ? import.meta.env.REACT_APP_GIT_HUB_CLIENT_ID_DEV
    : import.meta.env.REACT_APP_GIT_HUB_CLIENT_ID_PROD
}`;

export const COUNT_PER_PAGE = 8;
export const MAXIMUM_PAGE_BUTTON_COUNT = 4;

export const LEVEL_SEORE = {
  warm: 0,
  easy: 1,
  medium: 2,
  hard: 3,
  extreme: 4,
};
