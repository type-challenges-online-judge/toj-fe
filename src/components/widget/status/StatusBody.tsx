import { useEffect, useState } from 'react';

import { SubmitType } from '@/type/status';

import { StatusBodyTr } from '..';

interface StatusBodyProps {
  items: SubmitType[];
}

const StatusBody = ({ items }: StatusBodyProps) => {
  const [showedCode, setShowedCode] = useState<Set<number>>(new Set());

  useEffect(() => {
    setShowedCode(new Set());
  }, [items]);

  return (
    <tbody>
      {items.map((item: SubmitType) => {
        return (
          <StatusBodyTr
            key={item.submitNumber}
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
