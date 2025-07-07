import React from "react";

const Step3_GeneratePrompt = ({ llmPrompt, onBack, onCopy }) => (
  <div className="w-full flex flex-col items-center">
    <p className="text-base text-gray-600 mb-4 text-center max-w-2xl">
      Copy this detailed prompt and paste it directly into your LLM code generator.
    </p>
    <textarea
      id="llm-output"
      className="w-full max-w-3xl min-h-[60vh] h-[60vh] p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-all duration-200 resize-y font-mono text-base text-gray-800 bg-gray-50 placeholder-gray-400 mb-6 shadow-none"
      placeholder="Your semantically enhanced LLM prompt will appear here after processing."
      value={llmPrompt}
      readOnly
    />
    <div className="flex justify-end w-full max-w-3xl mt-4 space-x-4">
      <button
        className="px-6 py-2 text-base font-semibold rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        onClick={onBack}
        type="button"
      >
        Back
      </button>
      <button
        id="copy-button"
        className="px-6 py-2 text-base font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="button"
        onClick={onCopy}
      >
        Copy Prompt to Clipboard
      </button>
    </div>
  </div>
);

export default Step3_GeneratePrompt; 