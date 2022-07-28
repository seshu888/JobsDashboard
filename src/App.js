import Landing from "./pages/Landing";

import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";
import ProtectedRoute from "./pages/ProtectedRoute";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Alert from "./components/Alert";
import { useSelector } from "react-redux";
import SharedLayout from "./pages/dashboard/SharedLayout";
import AllJobs from "./pages/dashboard/AllJobs";
import AddJob from "./pages/dashboard/AddJob";
import Profile from "./pages/dashboard/Profile";
import Stats from "./pages/dashboard/Stats";
import { useEffect } from "react";
import { handleCloseToast } from "./redux/toast/toastSlice";
function App() {
  const { openToast } = useSelector((state) => state.toast);



  return (
    <BrowserRouter>
      {openToast && <Alert />}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="profile" element={<Profile />} />
          <Route path="add-job" element={<AddJob />} />
        </Route>

        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
