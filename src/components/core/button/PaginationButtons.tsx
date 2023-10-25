import { COUNT_PER_PAGE } from '@/config/const';
import React from 'react';
import { ButtonsStyle, PaginationButtonsWrapperStyle } from './PaginationButtons.css';
import GoLeft from './GoLeft';
import GoRight from './GoRight';

interface PaginationButtonsProps {
  totalSize: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
const PaginationButtons = ({ totalSize, currentPage, setCurrentPage }: PaginationButtonsProps) => {
  const LAST_PAGE = Math.ceil(totalSize / COUNT_PER_PAGE);

  return (
    <div className={PaginationButtonsWrapperStyle}>
      <GoLeft currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {new Array(LAST_PAGE).fill(0).map((_, index: number) => {
        return (
          <button
            key={index}
            type="button"
            className={`${ButtonsStyle} ${currentPage === index + 1 && 'current'}`}
            onClick={() => {
              setCurrentPage(index + 1);
            }}
          >
            {index + 1}
          </button>
        );
      })}
      <GoRight lastPage={LAST_PAGE} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default PaginationButtons;
