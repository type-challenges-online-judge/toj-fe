import React from 'react';
import { useGetSolvedProblemList } from '@/hooks/queries/user';
import { useUserInfo } from '@/stores/useUserInfoStore';
import { GetSolvedListType } from '@/type/user';
import { SolvedBadgeStyle } from './Solved.css';
import { BadgeButton } from '@/components';
import { useNavigate } from 'react-router-dom';
import { PAGE_URL } from '@/config/path';
import { LEVEL_SEORE } from '@/config/const';
import { Level } from '@/type/problem';

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
    <div>
      <div className={SolvedBadgeStyle}>
        {solvedIdList.map((solvedInfo, index) => {
          return (
            <BadgeButton
              key={index}
              solvedInfo={solvedInfo}
              _onClick={() => {
                navigate(`/${PAGE_URL.Problem}/${solvedInfo.id}`);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Solved;
