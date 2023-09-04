import { Outlet } from 'react-router-dom';
import { CommonLayoutStyle } from './CommonLayout.css';

const CommonLayout = () => {
  return (
    <div className={CommonLayoutStyle}>
      <Outlet />
    </div>
  );
};

export default CommonLayout;
