import { Suspense, useEffect } from 'react';
import Header from './components/Header/Header';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBaseCurrency } from './redux/operations';

const Home = lazy(() => import('./pages/Home'));
const Rates = lazy(() => import('./pages/Rates'));

export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      dispatch(fetchBaseCurrency(pos.coords))
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
