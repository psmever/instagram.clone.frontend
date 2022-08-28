import { Route, Routes, BrowserRouter } from 'react-router-dom';
import DefaultPage from 'src/pages/DefaultPage';
import LoginPage from 'src/pages/auth/LoginPage';

const RootRoutes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/default" element={<DefaultPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoutes;
