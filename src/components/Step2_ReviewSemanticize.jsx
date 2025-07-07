import React, { useState, useEffect } from "react";

const categories = [
  "color",
  "spacing",
  "typography",
  "border-radius",
  "shadow",
  "other",
];

const Step2_ReviewSemanticize = ({ parsedVariables, onConfirm, onBack, showToast }) => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("All");
  const [editedVariables, setEditedVariables] = useState([]);

  useEffect(() => {
    setEditedVariables(parsedVariables);
  }, [parsedVariables]);

  const handleFieldChange = (id, field, value) => {
    setEditedVariables((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const handleAcceptSuggestion = (id, field, suggestedValue) => {
    setEditedVariables((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [field]: suggestedValue } : item
      )
    );
  };

  // Filtering logic
  const filteredVariables =
    activeCategoryFilter === "All"
      ? editedVariables
      : editedVariables.filter(
          (item) =>
            (item.category || item.suggestedCategory) ===
            activeCategoryFilter.toLowerCase()
        );

  const handleConfirm = () => {
    try {
      if (onConfirm) onConfirm(editedVariables);
      if (showToast) showToast('Semantic mappings confirmed and prompt generated!', 'success');
    } catch (err) {
      if (showToast) showToast('Failed to save mappings or generate prompt.', 'error');
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <p className="text-base text-gray-600 mb-4 text-center max-w-2xl">
        Review and refine the semantic meaning of your parsed CSS variables for the AI.
      </p>
      <div className="flex flex-wrap gap-2 mb-6 justify-center w-full">
        <button
          className={`px-4 py-2 rounded-full font-semibold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            activeCategoryFilter === "All"
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 focus:ring-blue-200"
          }`}
          onClick={() => setActiveCategoryFilter("All")}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full font-semibold text-sm transition-all focus:outline-none focus:ring-2 ${
              activeCategoryFilter === cat.charAt(0).toUpperCase() + cat.slice(1)
                ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400"
                : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 focus:ring-blue-200"
            }`}
            onClick={() => setActiveCategoryFilter(cat.charAt(0).toUpperCase() + cat.slice(1))}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      <div className="w-full max-w-5xl overflow-x-auto overflow-y-auto min-h-[40vh] border-2 border-gray-200 rounded-xl mb-8 bg-gray-50">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50 sticky top-0 z-[1]">
            <tr className="border-b border-gray-200">
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Raw Figma Variable</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Value</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Semantic Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Usage Guidance</th>
            </tr>
          </thead>
          <tbody>
            {filteredVariables.map((item) => (
              <tr key={item.id} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                {/* Raw Figma Variable */}
                <td className="px-6 py-4 text-sm text-gray-700 align-top">
                  <span className="font-mono text-gray-600">{item.rawName}</span>
                </td>
                {/* Value */}
                <td className="px-6 py-4 text-sm text-gray-700 align-top">
                  <span className="font-mono text-gray-600">{item.value}</span>
                </td>
                {/* Semantic Name */}
                <td className="px-6 py-4 text-sm text-gray-700 align-top">
                  <div className="flex flex-col">
                    <input
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm font-medium"
                      placeholder={item.suggestedSemanticName || "Semantic name"}
                      value={item.semanticName || ""}
                      onChange={(e) => handleFieldChange(item.id, "semanticName", e.target.value)}
                      readOnly={false}
                    />
                    {item.suggestedSemanticName && (
                      <span
                        className="ml-2 mt-1 px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-medium rounded-full w-max"
                        onClick={() => handleAcceptSuggestion(item.id, "semanticName", item.suggestedSemanticName)}
                        style={{ cursor: "pointer" }}
                      >
                        AI Suggestion
                      </span>
                    )}
                  </div>
                </td>
                {/* Category */}
                <td className="px-6 py-4 text-sm text-gray-700 align-top">
                  <div className="flex flex-col">
                    <select
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm bg-white"
                      value={item.category || ""}
                      onChange={(e) => handleFieldChange(item.id, "category", e.target.value)}
                      readOnly={false}
                    >
                      <option value="" disabled>Select</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat} selected={item.category === cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                    {item.suggestedCategory && (
                      <span
                        className="ml-2 mt-1 px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-medium rounded-full w-max"
                        onClick={() => handleAcceptSuggestion(item.id, "category", item.suggestedCategory)}
                        style={{ cursor: "pointer" }}
                      >
                        AI Suggestion
                      </span>
                    )}
                  </div>
                </td>
                {/* Usage Guidance */}
                <td className="px-6 py-4 text-sm text-gray-700 align-top">
                  <div className="flex flex-col">
                    <textarea
                      className="w-full h-20 p-2 border border-gray-300 rounded-md resize-y focus:ring-blue-500 focus:border-blue-500 text-sm"
                      placeholder={item.suggestedGuidance || "Usage guidance"}
                      value={item.usageGuidance || ""}
                      onChange={(e) => handleFieldChange(item.id, "usageGuidance", e.target.value)}
                      readOnly={false}
                    />
                    {item.suggestedGuidance && (
                      <span
                        className="ml-2 mt-1 px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-medium rounded-full w-max"
                        onClick={() => handleAcceptSuggestion(item.id, "usageGuidance", item.suggestedGuidance)}
                        style={{ cursor: "pointer" }}
                      >
                        AI Suggestion
                      </span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end w-full max-w-5xl mt-4 space-x-4">
        <button
          className="px-6 py-2 text-base font-semibold rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
          onClick={onBack}
          type="button"
        >
          Back
        </button>
        <button
          className="px-6 py-2 text-base font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={handleConfirm}
          type="button"
        >
          Confirm & Generate Prompt
        </button>
      </div>
    </div>
  );
};

export default Step2_ReviewSemanticize; 