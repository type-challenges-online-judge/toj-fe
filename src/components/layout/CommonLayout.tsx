import { style } from '@vanilla-extract/css';
import { Outlet } from 'react-router-dom';
import { CommonLayoutStyle } from './styles.css';

const CommonLayout = () => {
  return (
    <div className={CommonLayoutStyle}>
      <Outlet />
    </div>
  );
};

export default CommonLayout;
