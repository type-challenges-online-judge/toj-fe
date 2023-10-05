import React, { useEffect, useState } from 'react';
import { ProblemPageStyle } from './ProblemPage.css';

// components
import { ProblemInfo } from '@/components/widget';
import axios from 'axios';
import { SubmitType } from '@/type/status';

const ProblemPage = () => {
  const [items, setItems] = useState<SubmitType[]>([]);
  useEffect(() => {
    const getSubmitStatus = async () => {
      await axios
        .get('/status', {
          params: {
            result_id: -1,
            problem_id: 339,
            snsId: 0,
          },
        })
        .then((res) => {
          setItems(res.data);
        });
    };

    getSubmitStatus();
  }, []);

  console.log(items);
  return (
    <div className={ProblemPageStyle}>
      <ProblemInfo />
    </div>
  );
};

export default ProblemPage;
