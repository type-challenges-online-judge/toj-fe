import React from 'react';
import { ButtonStyle } from './styles.css';

interface ButtonProps {
  text: string;
  _disabled?: boolean;
  _width?: string;
  _height?: string;
  _onClick: () => void;
}

const Button = ({
  text,
  _disabled = false,
  _width = '425px',
  _height = '55px',
  _onClick,
}: ButtonProps) => {
  return (
    <button className={ButtonStyle} disabled={_disabled} onClick={_onClick}>
      {text}
    </button>
  );
};

export default Button;
