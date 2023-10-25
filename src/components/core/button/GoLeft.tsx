import React from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { ButtonsStyle } from './PaginationButtons.css';
interface GoLeftProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
const GoLeft = ({ currentPage, setCurrentPage }: GoLeftProps) => {
  return (
    <button
      className={`${ButtonsStyle} ${currentPage === 1 && 'disabled'}`}
      disabled={currentPage === 1}
      onClick={() => {
        setCurrentPage((prev) => prev - 1);
      }}
    >
      <AiOutlineLeft />
    </button>
  );
};

export default GoLeft;
