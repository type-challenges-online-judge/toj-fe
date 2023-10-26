import React from 'react';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';
import { ButtonsStyle } from './PaginationButtons.css';
import { MAXIMUM_PAGE_BUTTON_COUNT } from '@/config/const';
interface GoEndProps {
  lastPageNumber: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setSlicedPageInex: React.Dispatch<React.SetStateAction<number[]>>;
}

const GoEnd = ({ lastPageNumber, currentPage, setCurrentPage, setSlicedPageInex }: GoEndProps) => {
  return (
    <button
      className={`${ButtonsStyle} ${currentPage === lastPageNumber && 'disabled'}`}
      disabled={currentPage === lastPageNumber}
      onClick={() => {
        setCurrentPage(lastPageNumber);

        // 마지막 페이지네이션 버튼들 시작 인덱스
        const nextSlicedStart = lastPageNumber - (lastPageNumber % MAXIMUM_PAGE_BUTTON_COUNT) + 1;

        setSlicedPageInex([
          nextSlicedStart > lastPageNumber ? 1 : nextSlicedStart,
          lastPageNumber + 1,
        ]);
      }}
    >
      <HiOutlineChevronDoubleRight />
    </button>
  );
};

export default GoEnd;
