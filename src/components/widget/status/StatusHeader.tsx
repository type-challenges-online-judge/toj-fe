import { HeadStyle, TdStyle } from './Status.css';

const StatusHeader = () => {
  const COLUMN_TEXTS = [
    '제출 번호',
    '아이디',
    '문제',
    '정확성 점수',
    '유효성 점수',
    '코드 길이',
    '제출 시각',
  ];

  return (
    <thead className={HeadStyle}>
      <tr>
        {COLUMN_TEXTS.map((text, idx) => {
          return (
            <td key={idx} className={TdStyle}>
              {text}
            </td>
          );
        })}
      </tr>
    </thead>
  );
};

export default StatusHeader;
