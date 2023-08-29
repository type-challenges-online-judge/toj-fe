import React from 'react';

import { SignButtonStyle } from './SignButton.css';

interface SignButtonProps {
  text: string;
  _onClick: () => void;
}

const SignButton = ({ text, _onClick }: SignButtonProps) => {
  return (
    <button className={SignButtonStyle} onClick={_onClick}>
      {text}
    </button>
  );
};

export default SignButton;
