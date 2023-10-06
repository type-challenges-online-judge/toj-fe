import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// element
import * as Switch from '@/pages';
import { PAGE_URL } from '@/config/path';
import { CommonLayout, CommonLayoutWithMenus } from '@/components/layout';
import App from '@/App';

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
        children: [
          {
            path: `${PAGE_URL.Problem}/:problemId`,
            element: <Switch.ProblemPage />,
          },
          {
            path: `${PAGE_URL.Submit}/:problemId`,
            element: <Switch.Submit />,
          },
          {
            path: `${PAGE_URL.Status}`,
            element: <Switch.Status />,
          },
        ],
      },
    ],
  },
  {
    path: `${PAGE_URL.Login}`,
    element: <Switch.LoginPage />,
  },
]);

export default router;
