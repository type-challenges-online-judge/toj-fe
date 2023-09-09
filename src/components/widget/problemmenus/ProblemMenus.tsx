import React from 'react';

import { ProblemInfoType } from '@/type/problem';
import { ProblemMenuButtons } from '../../../components';
import { PAGE_URL } from '../../../config/path';
import { useNavigate } from 'react-router-dom';
import { ButtonList } from './ProblemMenus.css';

interface ProblemMenusProps {
  problemInfo: { problemDiff: string; problemInfo: ProblemInfoType };
}

const ProblemMenus = ({ problemInfo }: ProblemMenusProps) => {
  const navigate = useNavigate();

  // 내 제출
  // https://localhost:3000/status?result_id=-1&problem_id=4&user_id=minh0518&mine=true
  // problem_id , user_id , result_id=-1(음수면 그냥 죄다 보여줌) , mine=true

  // 정답
  // https://localhost:3000/status?result_id=1&problem_id=4&user_id=minh0518&mine=false
  // problem_id , user_id , result_id=1(1이면 맞은 문제들) , mine=false
  return (
    <div>
      <ul className={ButtonList}>
        <li>
          <ProblemMenuButtons
            text={problemInfo.problemInfo.problemTitle}
            _onClick={() => {
              navigate(`/${PAGE_URL.Problem}/${problemInfo.problemInfo.problemId}`);
            }}
          />
        </li>

        <li>
          <ProblemMenuButtons
            text="제출하기"
            _onClick={() => {
              navigate(`/${PAGE_URL.Submit}/${problemInfo.problemInfo.problemId}`);
            }}
          />
        </li>
        <li>
          <ProblemMenuButtons
            text="답안 보기"
            _onClick={() => {
              navigate(
                `/${PAGE_URL.Status}?result_id=1&problem_id=${problemInfo.problemInfo.problemId}&user_id=minh0518&mine=false`,
              );
            }}
          />
        </li>
        <li>
          <ProblemMenuButtons
            text="내 제출"
            _onClick={() => {
              navigate(
                `/${PAGE_URL.Status}?result_id=-1&problem_id=${problemInfo.problemInfo.problemId}&user_id=minh0518&mine=true`,
              );
            }}
          />
        </li>
      </ul>
    </div>
  );
};

export default ProblemMenus;
