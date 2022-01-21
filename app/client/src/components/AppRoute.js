import React, { useContext } from 'react';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import { Context } from '..';

import { authRoutes, publickRoutes } from '../routes';
import { MAIN_ROUTE } from '../utils/consts';

export const AppRoute = () => {
  const { user } = useContext(Context);

  return (
    <Routes>
      {user.isAuth === true &&
        authRoutes.map(({ path, element }) => (
          <Route index key={path} path={path} element={element} />
        ))}
      {publickRoutes.map(({ path, element }) => (
        <Route index key={path} path={path} element={element} />
      ))}
      <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
    </Routes>
  );
};
