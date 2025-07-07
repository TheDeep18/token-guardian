
import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import InputProcessContainer from "./components/InputProcessContainer";
import ManageMappingsPage from "./pages/ManageMappingsPage";
import ProjectsPage from "./components/ProjectsPage";
import ToastNotification from "./components/ToastNotification";
import InputFigmaCssPage from "./pages/InputFigmaCssPage";
import { Toaster } from "./components/ui/toaster";

const App = () => {
  const [toast, setToast] = useState({ message: '', type: '', isVisible: false });
  const toastTimeout = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const showToast = (message: string, type: string) => {
    setToast({ message, type, isVisible: true });
    if (toastTimeout.current) clearTimeout(toastTimeout.current);
    toastTimeout.current = setTimeout(() => {
      setToast((prev) => ({ ...prev, isVisible: false }));
    }, 3000);
  };

  return (
    <>
      <Routes>
        <Route path="/auth" element={<LoginPage showToast={showToast} />} />
        <Route path="/signup" element={<SignupPage showToast={showToast} />} />
        <Route path="/*" element={
          <AppLayout>
            <Routes>
              <Route path="/" element={<InputFigmaCssPage />} />
              <Route path="/projects" element={<ProjectsPage showToast={showToast} />} />
              <Route path="/manage-mappings" element={<ManageMappingsPage showToast={showToast} />} />
              <Route path="/input-process" element={<InputProcessContainer showToast={showToast} />} />
            </Routes>
          </AppLayout>
        } />
      </Routes>
      <ToastNotification message={toast.message} type={toast.type} isVisible={toast.isVisible} />
      <Toaster />
    </>
  );
};

export default App;
