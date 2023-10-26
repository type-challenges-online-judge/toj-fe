import React from 'react';
import { HiOutlineChevronDoubleLeft } from 'react-icons/hi';
import { ButtonsStyle } from './PaginationButtons.css';
import { MAXIMUM_PAGE_BUTTON_COUNT } from '@/config/const';

interface GoStartProps {
  currentPage: number;
  lastPageNumber: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setSlicedPageInex: React.Dispatch<React.SetStateAction<number[]>>;
}

const GoStart = ({
  currentPage,
  lastPageNumber,
  setCurrentPage,
  setSlicedPageInex,
}: GoStartProps) => {
  return (
    <>
      <button
        className={`${ButtonsStyle} ${currentPage === 1 && 'disabled'}`}
        disabled={currentPage === 1}
        onClick={() => {
          setCurrentPage(1);

          let nextSlicedEnd;
          if (MAXIMUM_PAGE_BUTTON_COUNT > lastPageNumber) {
            nextSlicedEnd = lastPageNumber + 1;
          } else {
            nextSlicedEnd = 1 + MAXIMUM_PAGE_BUTTON_COUNT;
          }

          setSlicedPageInex([1, nextSlicedEnd]);
        }}
      >
        <HiOutlineChevronDoubleLeft />
      </button>
    </>
  );
};

export default GoStart;
