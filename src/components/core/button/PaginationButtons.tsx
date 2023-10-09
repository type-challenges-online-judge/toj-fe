import { COUNT_PER_PAGE } from '@/config/const';
import React from 'react';

interface PaginationButtonsProps {
  listLength: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
const PaginationButtons = ({ listLength, setCurrentPage }: PaginationButtonsProps) => {
  return (
    <div>
      {new Array(Math.ceil(listLength / COUNT_PER_PAGE)).fill(0).map((_, index: number) => {
        return (
          <button
            key={index}
            type="button"
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