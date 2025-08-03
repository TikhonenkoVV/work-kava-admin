import { Navigate, Route, Routes, useSearchParams } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { Layout } from './Global/Layout';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'store/auth/operations';
import { RestrictedRoute } from './Global/restrictedRoute';
import { PrivateRoute } from './Global/privateRoute';
import AuthPage from 'Pages/AuthPage';

const HomePage = lazy(() => import('../Pages/Home'));

const App = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');
    if (accessToken && refreshToken) {
      dispatch(refreshUser());
    }
  }, [searchParams, dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/coffee-classic"
          element={<PrivateRoute redirectTo="/auth" component={<HomePage />} />}
        />
        <Route
          path="/coffee-with-milk"
          element={<PrivateRoute redirectTo="/auth" component={<HomePage />} />}
        />
        <Route
          path="/desserts"
          element={<PrivateRoute redirectTo="/auth" component={<HomePage />} />}
        />
        <Route
          path="/burgers"
          element={<PrivateRoute redirectTo="/auth" component={<HomePage />} />}
        />
        <Route
          path="/rolls"
          element={<PrivateRoute redirectTo="/auth" component={<HomePage />} />}
        />
        <Route
          path="/hot-dogs"
          element={<PrivateRoute redirectTo="/auth" component={<HomePage />} />}
        />
        <Route path="/" element={<Navigate to={'/coffee-classic'} />} />
        <Route path="*" element={<Navigate to={'/coffee-classic'} />} />
      </Route>
      <Route
        path="/auth"
        element={<RestrictedRoute redirectTo="/" component={<AuthPage />} />}
      />
    </Routes>
  );
};

export default App;
