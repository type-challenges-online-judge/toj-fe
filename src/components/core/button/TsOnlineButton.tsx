import React from 'react';
import { TsOnlineButtonStyle } from './TsOnlineButton.css';

interface TsOnlineButtonProps {
  text: string;
  _onClick: () => void;
}
const TsOnlineButton = ({ text, _onClick }: TsOnlineButtonProps) => {
  return (
    <button className={TsOnlineButtonStyle} type="button" onClick={_onClick}>
      {text}
    </button>
  );
};

export default TsOnlineButton;
