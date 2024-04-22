import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
// import Loadable from '../layouts/full/shared/loadable/Loadable';
import Loadable from '../layouts/full/shared/loadable/Loadable';
// import BlankLayout from '../layouts/blank/BlankLayout';
import BlankLayout from '../layouts/blank/BlankLayout';
// import PublicPage from '../layouts/full/LandingPage';
import PublicPage from '../layouts/full/LandingPage';
// import Landing from '../views/landingpage/LandingPage';
import Landing from '../views/landingpage/LandingPage';
// import Tracer from '../views/landingPage/Tracer';
import Tracer from '../views/landingpage/Tracer';
// import Alumni from '../views/landingPage/Alumni';
import Alumni from '../views/landingpage/Alumni';
// import LowonganPekerjaan from '../views/landingPage/LowonganPekerjaan';
import LowonganPekerjaan from '../views/landingpage/LowonganPekerjaan';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
// const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

// /* ****Pages***** */
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')));
const DataDiri = Loadable(lazy(() => import('../views/datadiri/DataDiri')));
const Akademik = Loadable(lazy(() => import('../views/datadiri/Akademik')));
const Pekerjaan = Loadable(lazy(() => import('../views/datadiri/Pekerjaan')));
const Prestasi = Loadable(lazy(() => import('../views/rekamjejak/Prestasi')));
const Organisasi = Loadable(lazy(() => import('../views/rekamjejak/Organisasi')));
const Pelatihan = Loadable(lazy(() => import('../views/rekamjejak/Pelatihan')));
const TracerInstansi = Loadable(lazy(() => import('../views/lainlain/TracerInstansi')));

const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));

const Router = [
  { 
    path: '/',
    element: <PublicPage />,
    children: [
      { path: '/', element: <Landing/> },
      { path: '/tracer-studi', element: <Tracer/> },
      { path: '/alumni', element: <Alumni/> },
      { path: '/lowongan-pekerjaan', element: <LowonganPekerjaan/> },
    ]
  },
  {
    path: '/dashboard',
    element: <FullLayout />,
    private: true,
    children: [
      { path: '/dashboard', element: <Navigate to="/dashboard/home" />, private: true },
      { path: '/dashboard/home', exact: true, element: <Dashboard />, private: true },
      { path: '/dashboard/biodata', exact: true, element: <Navigate to="/dashboard/biodata/data-diri" />, private: true },
      { path: '/dashboard/biodata/data-diri', exact: true, element: <DataDiri />, private: true },
      { path: '/dashboard/biodata/akademik', exact: true, element: <Akademik />, private: true },
      { path: '/dashboard/biodata/pekerjaan', exact: true, element: <Pekerjaan />, private: true },
      { path: '/dashboard/rekam-jejak', exact: true, element: <Navigate to="/dashboard/rekam-jejak/prestasi" />, private: true },
      { path: '/dashboard/rekam-jejak/prestasi', exact: true, element: <Prestasi />, private: true },
      { path: '/dashboard/rekam-jejak/organisasi', exact: true, element: <Organisasi />, private: true },
      { path: '/dashboard/rekam-jejak/pelatihan', exact: true, element: <Pelatihan />, private: true },
      { path: '/dashboard/tracer-instansi', exact: true, element: <TracerInstansi />, private: true },
      { path: '*', element: <Navigate to="/auth/404" />, private: true },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/login', element: <Login /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
