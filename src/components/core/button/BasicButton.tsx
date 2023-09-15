import React from 'react';
import { BasicButtonStyle } from './BasicButton.css';

interface BasicButtonProps {
  text: string;
  _onClick: () => void;
}
const BasicButton = ({ text, _onClick }: BasicButtonProps) => {
  return (
    <button className={BasicButtonStyle} type="button" onClick={_onClick}>
      {text}
    </button>
  );
};

export default BasicButton;
