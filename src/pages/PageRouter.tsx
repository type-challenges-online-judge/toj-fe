import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { PAGE_URL } from '../config/path';
import ProblemInfo from '../components/widget/probleminfo/ProblemInfo';
import MainPage from './main/MainPage';

// element
import * as Switch from '../pages';
import { CommonLayout } from '../components/layout';

const PageRouter = () => {
  return (
    <>
      <Routes>
        <Route path={PAGE_URL.Main} element={<CommonLayout />}>
          <Route index element={<Switch.MainPage />} />
          <Route path={`${PAGE_URL.Problem}/:problemId`} element={<Switch.ProblemPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default PageRouter;
