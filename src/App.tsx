import React, { useState, useEffect, useRef } from "react";
import AppLayout from "./components/AppLayout.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import InputProcessContainer from "./components/InputProcessContainer.jsx";
import ManageMappingsPage from "./pages/ManageMappingsPage.jsx";
import ProjectsPage from "./components/ProjectsPage.jsx";
import ToastNotification from "./components/ToastNotification.jsx";
import InputFigmaCssPage from "./pages/InputFigmaCssPage.jsx";

// Simulated Routing: In Lovable, currentRoute will be managed by useState/useEffect or a router.
const currentRoute: string = "input-figma-css"; // Change this value to simulate different pages

const App = () => {
  const [toast, setToast] = useState({ message: '', type: '', isVisible: false });
  const toastTimeout = useRef<NodeJS.Timeout | null>(null);

  const showToast = (message, type) => {
    setToast({ message, type, isVisible: true });
    if (toastTimeout.current) clearTimeout(toastTimeout.current);
    toastTimeout.current = setTimeout(() => {
      setToast((prev) => ({ ...prev, isVisible: false }));
    }, 3000);
  };

  // Helper to render the correct page based on currentRoute
  const renderPage = () => {
    if (currentRoute === "auth") {
      return <LoginPage showToast={showToast} />;
    }
    if (currentRoute === "signup") {
      return <SignupPage showToast={showToast} />;
    }
    if (currentRoute === "projects") {
      return <ProjectsPage showToast={showToast} />;
    }
    if (currentRoute === "input-figma-css" || !currentRoute) {
      return <InputFigmaCssPage />;
    }
    if (currentRoute === "manage-mappings") {
      return <ManageMappingsPage showToast={showToast} />;
    }
    // Default: Page not found
    return <div className="text-center text-red-600 text-3xl mt-20">Page Not Found!</div>;
  };

  return (
    <>
      <AppLayout>
        {renderPage()}
      </AppLayout>
      <ToastNotification message={toast.message} type={toast.type} isVisible={toast.isVisible} />
    </>
  );
};

export default App;
