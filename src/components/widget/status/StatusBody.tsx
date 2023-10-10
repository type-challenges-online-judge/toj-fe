import { useEffect, useState } from 'react';

import { StatusType } from '@/type/status';

import { StatusBodyTr } from '..';

interface StatusBodyProps {
  list: StatusType[];
}

const StatusBody = ({ list }: StatusBodyProps) => {
  const [showedCode, setShowedCode] = useState<Set<number>>(new Set());

  useEffect(() => {
    setShowedCode(new Set());
  }, [list]);

  return (
    <tbody>
      {list.map((item: StatusType) => {
        return (
          <StatusBodyTr
            key={item.id}
            item={item}
            showedCode={showedCode}
            setShowedCode={setShowedCode}
          />
        );
      })}
    </tbody>
  );
};

export default StatusBody;
