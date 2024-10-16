// import Login from './pages/login/Login';
// import Signin from './pages/login/pages/Signin';
// import Registration from './pages/login/pages/Registration';
// import LostPassword from './pages/login/pages/LostPassword';
// import { Link, Navigate, useRoutes } from 'react-router-dom';
// import PrivateRoute from './common/PrivateRoute';
// import Admin from './pages/Admin';
// import Catalog from './pages/catalog/Catalog';
// import PhotoDetails from './pages/catalog/PhotoDetails';
// import Home from './pages/Home';

// const MyRoutes = () => {
//   const element = useRoutes([
//     {
//       path: 'login',
//       element: <Login />,
//       children: [
//         { index: true, element: <Signin /> },
//         { path: 'registration', element: <Registration />},
//         { path: 'lostPassword', element: <LostPassword /> },
//       ],
//     },
//     { 
//       path: 'admin',
//       element: <PrivateRoute redirectTo='/login' element={<Admin/>}/>
//     },
//     { path: 'catalog', element: <Catalog /> },
//     { path: 'catalog/:id', element: <PhotoDetails /> },
//     { path: 'home', element: <Home /> },
//     { path: '/', element: <Navigate to='home' /> },
//     {
//       path: '*',
//       element: (
//         <div>
//           <p>This page does not exist</p>
//           <Link to="/">Go to HomePage!</Link>
//         </div>
//       )
//     }
//   ]);
  
//   return element;
// };

// export default MyRoutes;
