import { useEffect, useState } from 'react';

import { StatusType } from '@/type/status';

import { StatusBodyTr } from '..';

interface StatusBodyProps {
  items: StatusType[];
}

const StatusBody = ({ items }: StatusBodyProps) => {
  const [showedCode, setShowedCode] = useState<Set<number>>(new Set());

  useEffect(() => {
    setShowedCode(new Set());
  }, [items]);

  return (
    <tbody>
      {items.map((item: StatusType) => {
        console.log(item);
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
