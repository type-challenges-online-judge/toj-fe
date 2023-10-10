import React, { ReactNode } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// element
import * as Switch from '@/pages';
import { PAGE_URL } from '@/config/path';
import { CommonLayout, CommonLayoutWithMenus } from '@/components/layout';
import App from '@/App';
import Authorization from '@/components/widget/common/Authorization';

interface RouterInfoType {
  path: string;
  element: ReactNode;
  withAuthorization: boolean;
  label: string;
}

const RouterInfo: RouterInfoType[] = [
  {
    path: `${PAGE_URL.Problem}/:problemId`,
    element: <Switch.ProblemPage />,
    withAuthorization: false,
    label: '문제 정보 페이지',
  },
  {
    path: `${PAGE_URL.Submit}/:problemId`,
    element: <Switch.Submit />,
    withAuthorization: true,
    label: '문제 제출 페이지',
  },
  {
    path: `${PAGE_URL.Status}`,
    element: <Switch.Status />,
    withAuthorization: true,
    label: '제출 현황 페이지',
  },
];

const router = createBrowserRouter([
  {
    path: `${PAGE_URL.Main}`,
    element: <App />,
    children: [
      {
        path: '',
        element: <CommonLayout />,
        children: [
          {
            index: true,
            element: <Switch.MainPage />,
          },
        ],
      },
      {
        path: '/*',
        element: <CommonLayoutWithMenus />,
        children: RouterInfo.map((routerInfo) => {
          return routerInfo.withAuthorization
            ? {
                path: routerInfo.path,
                element: <Authorization>{routerInfo.element}</Authorization>,
              }
            : {
                path: routerInfo.path,
                element: routerInfo.element,
              };
        }),
      },
      {
        path: `${PAGE_URL.Login}`,
        element: <Switch.LoginPage />,
      },
    ],
  },
  {
    path: `${PAGE_URL.Login}/process`,
    element: <Switch.LoginProcessPage />,
  },
]);

export default router;
