import { Route, Routes, BrowserRouter } from 'react-router-dom';

import DefaultPage from 'src/pages/DefaultPage';
import LoginPage from 'src/pages/publish/auth/LoginPage';
import FeedPage from 'src/pages/publish/post/FeedPage';
import ProfilePage from 'src/pages/publish/user/ProfilePage';
import ExplorePage from 'src/pages/publish/user/ExplorePage';
import EditProfilePage from 'src/pages/publish/user/EditProfilePage';
import SignUpPage from 'src/pages/publish/auth/SignUpPage';

const RootRoutes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* publish pages */}
        <Route path="/default" element={<DefaultPage />} />
        <Route path="/publish/auth/sign-up" element={<SignUpPage />} />
        <Route path="/publish/auth/login" element={<LoginPage />} />
        <Route path="/publish/post/feed" element={<FeedPage />} />
        <Route path="/publish/user/profile" element={<ProfilePage />} />
        <Route path="/publish/user/explore" element={<ExplorePage />} />
        <Route
          path="/publish/user/edit-profile"
          element={<EditProfilePage />}
        />
        {/* publish pages */}
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoutes;
