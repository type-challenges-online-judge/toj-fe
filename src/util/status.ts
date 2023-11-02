import { MAXIMUM_PAGE_BUTTON_COUNT } from '@/config/const';

export const getLastPageSlicedIndexAtFirst = (lastPageNumber: number): number => {
  if (lastPageNumber < MAXIMUM_PAGE_BUTTON_COUNT) {
    return lastPageNumber + 1;
  } else {
    return MAXIMUM_PAGE_BUTTON_COUNT + 1;
  }
};
