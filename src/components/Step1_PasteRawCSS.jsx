import React from "react";

const Step1_PasteRawCSS = ({ onParse, initialCss, showToast, onTextareaClick, setRawCss }) => {
  const handleParse = () => {
    // Simulate parsing logic (e.g., loading state, setTimeout)
    try {
      // Conceptual: Simulate success
      if (showToast) showToast('Variables parsed successfully!', 'success');
      if (onParse) onParse();
    } catch (err) {
      if (showToast) showToast('Parsing failed. Invalid CSS format.', 'error');
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <p className="text-base text-gray-600 mb-4 text-center max-w-2xl" >
        Export your Figma variables as CSS using your plugin, then paste them here.
      </p>
      <textarea
        id="raw-css-input"
        className="w-full max-w-3xl min-h-[60vh] h-[60vh] p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-all duration-200 resize-y font-mono text-base text-gray-800 bg-gray-50 placeholder-gray-400 mb-6 shadow-none"
        placeholder={"e.g., --color-primary-500: #123456;\n--spacing-base: 16px;\n..."}
        value={initialCss}
        onClick={onTextareaClick}
        onChange={e => setRawCss(e.target.value)}
      />
      <div className="flex justify-end w-full max-w-3xl">
        <button
          id="parse-button"
          className="px-6 py-2 text-base font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={handleParse}
          type="button"
        >
          Parse Variables
        </button>
      </div>
    </div>
  );
};

export default Step1_PasteRawCSS; 