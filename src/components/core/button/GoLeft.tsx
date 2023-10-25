import React from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { ButtonsStyle } from './PaginationButtons.css';
import { MAXIMUM_PAGE_BUTTON_COUNT } from '@/config/const';
interface GoLeftProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setSlicedPageInex: React.Dispatch<React.SetStateAction<number[]>>;
}
const GoLeft = ({ currentPage, setCurrentPage, setSlicedPageInex }: GoLeftProps) => {
  return (
    <button
      className={`${ButtonsStyle} ${currentPage === 1 && 'disabled'}`}
      disabled={currentPage === 1}
      onClick={() => {
        const nextPage = currentPage - 1;
        setCurrentPage(nextPage);
        if (currentPage % MAXIMUM_PAGE_BUTTON_COUNT === 1) {
          setSlicedPageInex([nextPage - MAXIMUM_PAGE_BUTTON_COUNT + 1, nextPage + 1]);
        }
      }}
    >
      <AiOutlineLeft />
    </button>
  );
};

export default GoLeft;
