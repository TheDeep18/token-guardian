
import React from "react";

interface ToastNotificationProps {
  message: string;
  type: string;
  isVisible: boolean;
}

const ToastNotification: React.FC<ToastNotificationProps> = ({ message, type, isVisible }) => {
  const bgClass =
    type === "success"
      ? "bg-green-50 border border-green-200 text-green-800"
      : type === "error"
      ? "bg-red-50 border border-red-200 text-red-800"
      : "bg-gray-50 border border-gray-200 text-gray-800";

  return (
    <div
      className={`fixed top-8 right-8 px-4 py-2 rounded-md z-50 font-medium text-sm transition-all duration-300 ease-in-out transform
        ${bgClass}
        ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-90 pointer-events-none"}
      `}
      style={{ minWidth: '220px', maxWidth: '320px' }}
      role="status"
      aria-live="polite"
    >
      <p className="truncate">{message}</p>
    </div>
  );
};

export default ToastNotification;
