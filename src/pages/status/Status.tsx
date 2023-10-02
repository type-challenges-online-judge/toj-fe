import React from 'react';
import { useLocation } from 'react-router-dom';

import { StatusBody, StatusHeader } from '@/components';
import { useGetStatusList } from '@/hooks/queries/status';
import { StatusType } from '@/type/status';

import { TableStyle } from './Status.css';

const Status = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [problemId, snsId] = [
    Number(queryParams.get('resultId')),
    Number(queryParams.get('problemId')),
    Number(queryParams.get('snsId')),
    queryParams.get('mine') === 'true',
  ];

  const items = useGetStatusList({ problemId })[1].data?.data.data as StatusType[];

  return (
    <table className={TableStyle}>
      <StatusHeader />
      <StatusBody items={items} />
    </table>
  );
};

export default Status;
