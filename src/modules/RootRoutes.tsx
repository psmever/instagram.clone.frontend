import { Route, Routes, BrowserRouter } from 'react-router-dom';
import DefaultPage from 'src/pages/DefaultPage';
import LoginPage from 'src/pages/auth/LoginPage';
import FeedPage from 'src/pages/post/FeedPage';
import ProfilePage from 'src/pages/user/ProfilePage';
import ExplorePage from 'src/pages/user/ExplorePage';
import EditProfilePage from 'src/pages/user/EditProfilePage';

const RootRoutes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/default" element={<DefaultPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/post/feed" element={<FeedPage />} />
        <Route path="/user/profile" element={<ProfilePage />} />
        <Route path="/user/explore" element={<ExplorePage />} />
        <Route path="/user/edit-profile" element={<EditProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoutes;
