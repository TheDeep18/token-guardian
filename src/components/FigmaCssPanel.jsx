import React from "react";

const FigmaCssPanel = () => (
  <div className="flex-1 flex flex-col justify-between p-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Section 1: Raw CSS Input */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-extrabold text-gray-900 text-center md:text-left">Paste Raw Figma CSS</h2>
        <p className="text-base text-gray-500 text-center md:text-left">
          Export your Figma variables as CSS using this{' '}
          <a
            href="https://www.figma.com/community/plugin/1470777269812001046/css-variables-import-export"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-semibold"
          >
            Figma Plugin
          </a>. Then paste them here.
        </p>
        <textarea
          id="raw-css-input"
          className="ifcp-textarea"
          placeholder={"--color-primary-500: #123456;\n--spacing-base: 16px;"}
        />
      </section>

      {/* Section 2: LLM Prompt Output */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-extrabold text-gray-900 text-center md:text-left">Generated LLM Prompt</h2>
        <p className="text-base text-gray-500 text-center md:text-left">
          Copy this prompt and paste it into your LLM code generator. This will give a semantic knowledge of the Variables to the LLM.
        </p>
        <textarea
          id="llm-output"
          className="ifcp-textarea"
          readOnly
          placeholder={`**Generated LLM Prompt (Copy this!)**\n\n--------------------------------------------------------------------------------------\n**Design System Context - Core Tokens:**\n\nThe following are the canonical Design System tokens for this project. **You MUST use these variables for styling, NOT hardcoded values.** Prioritize using the most semantically appropriate token.\n\n---\n\n**1. Color Tokens:**\n\n- **Token Name:** \`--color-brand-primary\`\n  - **Value:** \`#123456\`\n  - **Semantic Use:** "The primary brand color for main calls-to-action, prominent headers, and active states. Conveys brand identity."\n  - **Usage Examples/Guidance:** Buttons (primary variant), prominent links, active tab indicators, key headings (e.g., H1, H2).\n  - **CSS Variable:** \`var(--color-brand-primary)\`\n\n---\n\n**2. Spacing Tokens:**\n\n- **Token Name:** \`--spacing-md\`\n  - **Value:** \`16px\`\n  - **Semantic Use:** "Medium spacing unit. Ideal for padding within components and standard vertical spacing between distinct content blocks (e.g., paragraphs, list items)."\n  - **Usage Examples/Guidance:** Padding inside buttons, vertical margin between form fields, horizontal spacing between icons and text, default line height spacing.\n  - **CSS Variable:** \`var(--spacing-md)\`\n\n---\n\n**Instructions for Component Generation:**\n\nWhen generating UI components or code, if a visual attribute (e.g., a color, spacing, font size, border-radius) corresponds to one of the above defined Design System tokens, you **MUST use the specified token name** (e.g., \`var(--color-brand-primary)\`) instead of the raw value (e.g., \`#123456\`). Always prioritize semantic usage guidelines to ensure consistency and maintainability.`}
        />
      </section>
    </div>
    <div className="flex flex-col md:flex-row gap-4 mt-8">
      <button
        id="process-button"
        className="w-full md:w-1/2 py-3 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition text-lg"
      >
        Process Variables & Generate LLM Prompt
      </button>
      <button
        id="copy-button"
        className="w-full md:w-1/2 py-3 px-4 bg-gray-200 text-gray-800 font-bold rounded-lg hover:bg-gray-300 transition text-lg"
      >
        Copy Prompt to Clipboard
      </button>
    </div>
  </div>
);

export default FigmaCssPanel; 