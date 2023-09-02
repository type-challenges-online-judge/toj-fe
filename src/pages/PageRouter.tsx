import React from 'react';
import { Route, Routes } from 'react-router-dom';

// element
import * as Switch from '../pages';
import { CommonLayout } from '../components/layout';
import { PAGE_URL } from '../config/path';

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
