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

        if (currentPage % MAXIMUM_PAGE_BUTTON_COUNT === 0) {
          const from = nextPage;
          const to = nextPage + MAXIMUM_PAGE_BUTTON_COUNT;

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
