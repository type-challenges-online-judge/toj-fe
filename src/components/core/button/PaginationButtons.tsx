import { COUNT_PER_PAGE } from '@/config/const';
import React from 'react';
import { ButtonsStyle, PaginationButtonsWrapperStyle } from './PaginationButtons.css';

interface PaginationButtonsProps {
  totalSize: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
const PaginationButtons = ({ totalSize, setCurrentPage }: PaginationButtonsProps) => {
  return (
    <div className={PaginationButtonsWrapperStyle}>
      {new Array(Math.ceil(totalSize / COUNT_PER_PAGE)).fill(0).map((_, index: number) => {
        return (
          <button
            key={index}
            type="button"
            className={ButtonsStyle}
            onClick={() => {
              setCurrentPage(index + 1);
            }}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};

export default PaginationButtons;
