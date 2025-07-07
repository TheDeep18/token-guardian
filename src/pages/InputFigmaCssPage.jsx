import React, { useState } from "react";
import ProjectSidebar from "../components/ProjectSidebar";
import FigmaCssPanel from "../components/FigmaCssPanel";

const projects = [
  { id: 1, name: "Design System Alpha" },
  { id: 2, name: "Marketing Site" },
  { id: 3, name: "Mobile App" },
];

// Future: useState for rawCssInput and llmOutputPrompt
// const [rawCssInput, setRawCssInput] = useState("");
// const [llmOutputPrompt, setLlmOutputPrompt] = useState("");

const InputFigmaCssPage = () => {
  // For now, hardcode the selected project
  const selectedProjectId = 1;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex justify-center items-start w-full min-h-[80vh] bg-gray-100">
      <div className="flex w-full max-w-6xl rounded-2xl shadow-xl bg-white mt-12 h-[88vh] relative overflow-hidden">
        {/* Floating hamburger menu for mobile */}
        <button
          className="md:hidden fixed bottom-28 right-8 z-30 bg-white border border-gray-200 rounded-full w-14 h-14 flex items-center justify-center shadow hover:bg-gray-100"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Sidebar: Project Switcher */}
        <ProjectSidebar
          projects={projects}
          selectedProjectId={selectedProjectId}
          mobile={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-between p-10 overflow-auto">
          <FigmaCssPanel />
        </div>
        {/* Floating + button for mobile */}
        <button
          className="md:hidden fixed bottom-8 right-8 z-30 bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg text-3xl font-bold hover:bg-blue-700 transition"
          aria-label="Create New Project"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default InputFigmaCssPage; 