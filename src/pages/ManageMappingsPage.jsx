import React from "react";

// Future: useState hooks for inputKey, outputKey, category, usageGuidance
// const [inputKey, setInputKey] = useState("");
// const [outputKey, setOutputKey] = useState("");
// const [category, setCategory] = useState("color");
// const [usageGuidance, setUsageGuidance] = useState("");
// const [mappings, setMappings] = useState([]);
// Future: useEffect to fetch data from Supabase semantic_token_mappings table on mount

const ManageMappingsPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Manage Semantic Token Mappings</h2>
      <p className="text-sm text-gray-600">
        Define how raw Figma variables (e.g., from a plugin export) map to your desired semantic tokens and their usage context for LLMs.
      </p>

      {/* Section 1: New Mapping Form */}
      <div className="p-6 bg-white rounded-lg shadow-inner mb-8 space-y-6">
        <h3 className="text-2xl font-bold text-gray-900">Add New Mapping</h3>
        <div className="mb-5">
          <label htmlFor="input-key" className="block text-lg font-medium text-gray-700 mb-2">Figma Input Key</label>
          <input
            id="input-key"
            type="text"
            className="w-full p-3 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 ease-in-out font-sans text-base text-gray-800 bg-white"
            placeholder="--figma-color-blue-500"
            // Future: value={inputKey} onChange={e => setInputKey(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="output-key" className="block text-lg font-medium text-gray-700 mb-2">Semantic Output Key</label>
          <input
            id="output-key"
            type="text"
            className="w-full p-3 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 ease-in-out font-sans text-base text-gray-800 bg-white"
            placeholder="--color-brand-primary"
            // Future: value={outputKey} onChange={e => setOutputKey(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="category" className="block text-lg font-medium text-gray-700 mb-2">Category</label>
          <select
            id="category"
            className="w-full p-3 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 ease-in-out font-sans text-base text-gray-800 bg-white"
            // Future: value={category} onChange={e => setCategory(e.target.value)}
          >
            <option value="" disabled selected>Select a category</option>
            <option value="color">color</option>
            <option value="spacing">spacing</option>
            <option value="typography">typography</option>
            <option value="border-radius">border-radius</option>
            <option value="shadow">shadow</option>
            <option value="other">other</option>
          </select>
        </div>
        <div className="mb-5">
          <label htmlFor="usage-guidance" className="block text-lg font-medium text-gray-700 mb-2">Usage Guidance</label>
          <textarea
            id="usage-guidance"
            className="w-full p-3 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 ease-in-out font-sans text-base text-gray-800 bg-white resize-y"
            placeholder="e.g., 'The main brand color for calls-to-action.'"
            // Future: value={usageGuidance} onChange={e => setUsageGuidance(e.target.value)}
          />
        </div>
        <button
          id="save-mapping-button"
          className="mt-6 px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg shadow-xl hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white transition-all duration-300 ease-in-out transform hover:scale-105"
          // Future: onClick={handleSaveMapping}
        >
          Save New Mapping
        </button>
      </div>

      {/* Section 2: Existing Mappings Table */}
      <div className="overflow-x-auto rounded-lg shadow-xl border border-gray-200">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-3 text-left border-b border-gray-300 font-semibold text-gray-700 text-sm uppercase tracking-wider">Figma Input Key</th>
              <th className="px-4 py-3 text-left border-b border-gray-300 font-semibold text-gray-700 text-sm uppercase tracking-wider">Semantic Output Key</th>
              <th className="px-4 py-3 text-left border-b border-gray-300 font-semibold text-gray-700 text-sm uppercase tracking-wider">Category</th>
              <th className="px-4 py-3 text-left border-b border-gray-300 font-semibold text-gray-700 text-sm uppercase tracking-wider">Usage Guidance</th>
              <th className="px-4 py-3 text-left border-b border-gray-300 font-semibold text-gray-700 text-sm uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample Row: Remove after integrating with dynamic data */}
            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-4 py-3 border-b border-gray-200 text-gray-800 text-base">--figma-spacing-md</td>
              <td className="px-4 py-3 border-b border-gray-200 text-gray-800 text-base">--spacing-md</td>
              <td className="px-4 py-3 border-b border-gray-200 text-gray-800 text-base">spacing</td>
              <td className="px-4 py-3 border-b border-gray-200 text-gray-800 text-base">Standard medium spacing for components and internal padding.</td>
              <td className="px-4 py-3 border-b border-gray-200 text-gray-800 text-base">
                <div className="flex flex-row items-center">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm mr-2 shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2">Edit</button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2">Delete</button>
                </div>
              </td>
            </tr>
            {/* Future: map over mappings array to render rows dynamically */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMappingsPage; 