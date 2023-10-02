import React from 'react';
import { useNavigate } from 'react-router-dom';

// components
import { ProblemMenuButtons } from '@/components/core';

// types
import { ProblemDetailType } from '@/type/problem';

// style
import { SingleButton, ButtonList, ProblemMunusWrapperStyle } from './ProblemMenus.css';

// const
import { PAGE_URL } from '@/config/path';

interface ProblemMenusProps {
  problemDetail: ProblemDetailType['data'];
}

const ProblemMenus = ({ problemDetail }: ProblemMenusProps) => {
  const navigate = useNavigate();

  // 내 제출
  // https://localhost:3000/status?result_id=1&problem_id=4&snsId=123&mine=true
  // problem_id , snsId , result_id=1(1이면 맞은 문제, -1이면 모두 ) , mine=true

  // 정답
  // https://localhost:3000/status?result_id=1&problem_id=4&snsId=123&mine=false
  // problem_id , snsId , result_id=1 , mine=false

  return (
    <div className={ProblemMunusWrapperStyle}>
      <ul className={ButtonList}>
        <li className={`${SingleButton} isFirst`}>
          <ProblemMenuButtons
            problemDiff={problemDetail.level}
            problemId={problemDetail.id}
            text={problemDetail.title}
            _onClick={() => {
              navigate(`/${PAGE_URL.Problem}/${problemDetail.id}`);
            }}
          />
        </li>

        <li className={SingleButton}>
          <ProblemMenuButtons
            text="제출하기"
            _onClick={() => {
              navigate(`/${PAGE_URL.Submit}/${problemDetail.id}`);
            }}
          />
        </li>
        <li className={SingleButton}>
          <ProblemMenuButtons
            text="답안 보기"
            _onClick={() => {
              navigate(
                `/${PAGE_URL.Status}?resultId=1&problemId=${problemDetail.id}&snsId=123&mine=false`,
              );
            }}
          />
        </li>
        <li className={`${SingleButton} isLast`}>
          <ProblemMenuButtons
            text="내 제출"
            _onClick={() => {
              navigate(
                `/${PAGE_URL.Status}?resultId=1&problemId=${problemDetail.id}&snsId=123&mine=true`,
              );
            }}
          />
        </li>
      </ul>
    </div>
  );
};

export default ProblemMenus;
