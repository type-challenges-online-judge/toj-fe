import { COUNT_PER_PAGE, MAXIMUM_PAGE_BUTTON_COUNT } from '@/config/const';
import React, { useState } from 'react';
import { ButtonsStyle, PaginationButtonsWrapperStyle } from './PaginationButtons.css';
import GoLeft from './GoLeft';
import GoRight from './GoRight';
import { LuMoreHorizontal } from 'react-icons/lu';

interface PaginationButtonsProps {
  totalSize: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
const PaginationButtons = ({ totalSize, currentPage, setCurrentPage }: PaginationButtonsProps) => {
  const LAST_PAGE_NUMBER = Math.ceil(totalSize / COUNT_PER_PAGE);
  const [slicedPageInex, setSlicedPageInex] = useState([
    1,
    LAST_PAGE_NUMBER + 1 < MAXIMUM_PAGE_BUTTON_COUNT + 1
      ? LAST_PAGE_NUMBER + 1
      : MAXIMUM_PAGE_BUTTON_COUNT + 1,
  ]);

  return (
    <div className={PaginationButtonsWrapperStyle}>
      <GoLeft
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setSlicedPageInex={setSlicedPageInex}
      />
      {slicedPageInex[0] !== 1 && <LuMoreHorizontal />}
      {new Array(LAST_PAGE_NUMBER + 1)
        .fill(0)
        .map((_, arrIndex: number) => arrIndex)
        .slice(slicedPageInex[0], slicedPageInex[1])
        .map((pageNumber, pageIndex) => {
          return (
            <button
              key={pageIndex}
              type="button"
              className={`${ButtonsStyle} ${currentPage === pageNumber && 'current'}`}
              onClick={() => {
                setCurrentPage(pageNumber);
              }}
            >
              {pageNumber}
            </button>
          );
        })}
      {slicedPageInex[1] !== LAST_PAGE_NUMBER + 1 && <LuMoreHorizontal />}
      <GoRight
        lastPageNumber={LAST_PAGE_NUMBER}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setSlicedPageInex={setSlicedPageInex}
      />
    </div>
  );
};

export default PaginationButtons;
