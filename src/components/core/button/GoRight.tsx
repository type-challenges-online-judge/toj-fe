import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { ButtonsStyle } from './PaginationButtons.css';
interface GoRightProps {
  lastPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
const GoRight = ({ lastPage, currentPage, setCurrentPage }: GoRightProps) => {
  return (
    <button
      className={`${ButtonsStyle} ${currentPage === lastPage && 'disabled'}`}
      disabled={currentPage === lastPage}
      onClick={() => {
        setCurrentPage((prev) => prev + 1);
      }}
    >
      <AiOutlineRight />
    </button>
  );
};

export default GoRight;
