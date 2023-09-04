import React from 'react';
import { Route, Routes } from 'react-router-dom';

// element
import * as Switch from '../pages';
import { CommonLayout, CommonLayoutWithMenus } from '../components/layout';
import { PAGE_URL } from '../config/path';

const PageRouter = () => {
  return (
    <>
      <Routes>
        <Route path={PAGE_URL.Main} element={<CommonLayout />}>
          <Route index element={<Switch.MainPage />} />
        </Route>
        <Route path="/*" element={<CommonLayoutWithMenus />}>
          <Route path={`${PAGE_URL.Problem}/:problemId`} element={<Switch.ProblemPage />} />
          <Route path={`${PAGE_URL.Submit}/:problemId`} element={<Switch.Submit />} />
          <Route path={`${PAGE_URL.Status}`} element={<Switch.Status />} />
        </Route>
      </Routes>
    </>
  );
};

export default PageRouter;
