import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// styles
import { ButtonsStyle, PaginationButtonsWrapperStyle } from './PaginationButtons.css';

// const
import { COUNT_PER_PAGE } from '@/config/const';

// components
import GoLeft from './GoLeft';
import GoRight from './GoRight';
import GoStart from './GoStart';
import GoEnd from './GoEnd';

// icon
import { LuMoreHorizontal } from 'react-icons/lu';

// util
import { getLastPageSlicedIndexAtFirst } from '@/util/status';

interface PaginationButtonsProps {
  totalSize: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
const PaginationButtons = ({ totalSize, currentPage, setCurrentPage }: PaginationButtonsProps) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const snsId = Number(queryParams.get('sns_id'));
  const LAST_PAGE_NUMBER = Math.ceil(totalSize / COUNT_PER_PAGE);
  const [slicedPageInex, setSlicedPageInex] = useState([
    1,
    getLastPageSlicedIndexAtFirst(LAST_PAGE_NUMBER),
  ]);

  useEffect(() => {
    setSlicedPageInex([1, getLastPageSlicedIndexAtFirst(LAST_PAGE_NUMBER)]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [snsId]);

  return (
    <div className={PaginationButtonsWrapperStyle}>
      <GoStart
        currentPage={currentPage}
        lastPageNumber={LAST_PAGE_NUMBER}
        setCurrentPage={setCurrentPage}
        setSlicedPageInex={setSlicedPageInex}
      />
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
      <GoEnd
        lastPageNumber={LAST_PAGE_NUMBER}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setSlicedPageInex={setSlicedPageInex}
      />
    </div>
  );
};

export default PaginationButtons;
