import { ProblemInfoType } from 'type/problem';
import { getProblemList } from '../../../apis/get';
import { AnswerButton, MySubmitButton, SubmitButton } from '../../../components';
import { PAGE_URL } from '../../../config/path';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonList, Title } from './ProblemMenus.css';

interface ProblemMenusProps {
  problemInfo: ProblemInfoType;
}

const ProblemMenus = ({ problemInfo }: ProblemMenusProps) => {
  const navigate = useNavigate();

  return (
    <div>
      <ul className={ButtonList}>
        <li className={Title}>
          <p>{problemInfo.problemTitle}</p>
        </li>

        <li>
          <SubmitButton
            text="제출하기"
            _onClick={() => {
              navigate(`/${PAGE_URL.Submit}/${problemInfo.problemId}`);
            }}
          />
        </li>
        <li>
          <AnswerButton text="답안 보기" _onClick={() => {}} />
        </li>
        <li>
          <MySubmitButton text="내 제출" _onClick={() => {}} />
        </li>
      </ul>
    </div>
  );
};

export default ProblemMenus;
