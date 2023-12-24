import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";

// Import a loading component (you can customize this)
const Loader = lazy(() => import('./loader.jsx'));


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const SignIn = lazy(async () => {
  // Simulate a delay of 2 seconds before loading the component
  await delay(1000);
  return import("@/pages/auth/sign-in");
});
const ChangePassword = lazy(async () => {
  await delay(1000);
  return import('@/pages/auth/change-password');})

const ForgotPassword = lazy(async () => {
    await delay(1000);
    return import('@/pages/auth/forgot-password');})

function App() {
  return (
    <Routes>
      <Route
        exact
        path="*"
        element={
          <Suspense fallback={<Loader />}>
            <SignIn />
          </Suspense>
        }
      />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/change-password" name="Change password Page" element={<Suspense fallback={<Loader />}>
            <ChangePassword />
          </Suspense>} />
          <Route path="/auth/forgot-password" name="Forgot password Page" element={<Suspense fallback={<Loader />}>
            <ForgotPassword />
          </Suspense>} />
      {/* <Route path="*" element={<Navigate to="/dashboard/home" replace />} /> */}
    </Routes>
  );
}

export default App;
