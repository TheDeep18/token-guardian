
import React from "react";

interface ProjectsPageProps {
  showToast?: (message: string, type: string) => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ showToast }) => (
  <div className="w-full max-w-3xl mx-auto py-20 px-6 flex flex-col items-center justify-center">
    <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">Projects</h1>
    <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
      This is a placeholder for the Projects page. You can list, create, and manage your projects here in the future.
    </p>
    <div className="w-full bg-gray-100 rounded-xl shadow-inner p-10 text-center text-gray-400">
      [Project list UI coming soon]
    </div>
  </div>
);

export default ProjectsPage;
