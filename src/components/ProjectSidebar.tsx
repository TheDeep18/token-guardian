
import React from "react";

interface Project {
  id: number;
  name: string;
}

interface ProjectSidebarProps {
  projects: Project[];
  selectedProjectId: number;
  mobile?: boolean;
  onClose?: () => void;
}

const ProjectSidebar: React.FC<ProjectSidebarProps> = ({ projects, selectedProjectId, mobile, onClose }) => (
  <aside
    className={
      mobile
        ? "fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-end md:hidden"
        : "w-64 flex flex-col py-8 px-4 border-r border-gray-200 rounded-l-2xl hidden md:flex"
    }
    style={mobile ? {} : undefined}
  >
    <div
      className={
        mobile
          ? "w-64 h-full bg-white flex flex-col py-8 px-4 shadow-xl relative"
          : "w-full"
      }
    >
      {mobile && (
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          &times;
        </button>
      )}
      <button className="mb-8 w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition text-base text-center">+ Create New Project</button>
      <div className="flex flex-col gap-2">
        {projects.map((project) => (
          <button
            key={project.id}
            className={`text-left px-4 py-2 rounded-lg transition-colors text-gray-800 hover:bg-blue-50 ${
              project.id === selectedProjectId ? "bg-blue-100 text-blue-700" : ""
            }`}
          >
            {project.name}
          </button>
        ))}
      </div>
    </div>
  </aside>
);

export default ProjectSidebar;
