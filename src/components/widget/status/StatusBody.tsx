import { useEffect, useState } from 'react';

import { SubmitType } from '@/type/status';

import { StatusBodyTr } from '..';

interface StatusBodyProps {
  items: SubmitType[];
}

const StatusBody = ({ items }: StatusBodyProps) => {
  console.log(items);
  const [showedCode, setShowedCode] = useState<Set<number>>(new Set());
  console.log(showedCode);

  useEffect(() => {
    setShowedCode(new Set());
  }, [items]);

  return (
    <tbody>
      {items.map((item: SubmitType, index) => {
        return (
          <StatusBodyTr
            key={index}
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
