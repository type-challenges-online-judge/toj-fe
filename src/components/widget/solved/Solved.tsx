import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SingleBadgeStyle,
  SolvedBadgeStyle,
  SolvedButtonStyle,
  SolvedCountDescStyle,
} from './Solved.css';

// hook
import { useGetSolvedProblemList } from '@/hooks/queries/user';

// store
import { useUserInfo } from '@/stores/useUserInfoStore';

// types
import { GetSolvedListType } from '@/type/user';
import { Level } from '@/type/problem';

// component
import { BadgeButton } from '@/components';

// configs
import { PAGE_URL } from '@/config/path';
import { LEVEL_SEORE } from '@/config/const';
import ReactApexChart from 'react-apexcharts';

const Solved = () => {
  const userInfo = useUserInfo();
  const navigate = useNavigate();

  const { data: { data: solvedIdList = [] } = {} } = useGetSolvedProblemList<GetSolvedListType>(
    userInfo.snsId,
  );
  solvedIdList.sort((a, b) => {
    return LEVEL_SEORE[b.level as Level] - LEVEL_SEORE[a.level as Level];
  });

  return (
    <div className={SolvedBadgeStyle}>
      <p className={SolvedCountDescStyle}>총 {solvedIdList.length} 문제</p>
      <ul className={SolvedButtonStyle}>
        {solvedIdList.map((solvedInfo, index) => {
          return (
            <li key={index} className={SingleBadgeStyle}>
              <BadgeButton
                solvedInfo={solvedInfo}
                _onClick={() => {
                  navigate(`/${PAGE_URL.Problem}/${solvedInfo.id}`);
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Solved;
