import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { ButtonsStyle } from './PaginationButtons.css';
import { MAXIMUM_PAGE_BUTTON_COUNT } from '@/config/const';
interface GoRightProps {
  lastPageNumber: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setSlicedPageInex: React.Dispatch<React.SetStateAction<number[]>>;
}
const GoRight = ({
  lastPageNumber,
  currentPage,
  setCurrentPage,
  setSlicedPageInex,
}: GoRightProps) => {
  return (
    <button
      className={`${ButtonsStyle} ${currentPage === lastPageNumber && 'disabled'}`}
      disabled={currentPage === lastPageNumber}
      onClick={() => {
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);

        // 페이지 번호 변경 1,2,3,4 -> 5,6,7,8
        if (currentPage % MAXIMUM_PAGE_BUTTON_COUNT === 0) {
          const from = nextPage;
          const to = nextPage + MAXIMUM_PAGE_BUTTON_COUNT;

          // (from=5) 5,6,7,8 (to=9)  ->  (from=9) 9,10 (to=13) (lastPageNumber=10)
          if (to >= lastPageNumber + 1) setSlicedPageInex([from, lastPageNumber + 1]);
          if (to < lastPageNumber) setSlicedPageInex([from, to]);
        }
      }}
    >
      <AiOutlineRight />
    </button>
  );
};

export default GoRight;
