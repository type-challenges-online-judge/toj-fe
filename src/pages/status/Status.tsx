import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import { StatusBody, StatusHeader } from '@/components';
import { SubmitType } from '@/type/status';

import { TableStyle } from './Status.css';

const Status = () => {
  const [items, setItems] = useState<SubmitType[]>([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [resultId, problemId, snsId, mine] = [
    Number(queryParams.get('resultId')),
    Number(queryParams.get('problemId')),
    Number(queryParams.get('snsId')),
    queryParams.get('mine') === 'true',
  ];

  useEffect(() => {
    const getSubmitStatus = async () => {
      await axios
        .get('/status', {
          params: {
            result_id: resultId,
            problem_id: problemId,
            snsId,
            mine,
          },
        })
        .then((res) => {
          setItems(res.data);
        });
    };

    getSubmitStatus();
  }, [mine, problemId, resultId, snsId]);

  return (
    <table className={TableStyle}>
      <StatusHeader />
      <StatusBody items={items} />
    </table>
  );
};

export default Status;
