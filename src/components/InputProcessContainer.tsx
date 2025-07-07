
import React, { useState } from "react";
import ProcessProgressIndicator from "./ProcessProgressIndicator";
import Step1_PasteRawCSS from "./Step1_PasteRawCSS";
import Step2_ReviewSemanticize from "./Step2_ReviewSemanticize";
import Step3_GeneratePrompt from "./Step3_GeneratePrompt";
import ProjectSidebar from "./ProjectSidebar";

interface InputProcessContainerProps {
  showToast?: (message: string, type: string) => void;
}

const sampleParsedVariables = [
  {
    id: "1",
    rawName: "--color-primary-500",
    value: "#123456",
    suggestedSemanticName: "--color-brand-primary",
    suggestedCategory: "color",
    suggestedGuidance: "Primary brand color for main CTAs and highlights.",
  },
  {
    id: "2",
    rawName: "--spacing-base",
    value: "16px",
    suggestedSemanticName: "--spacing-md",
    suggestedCategory: "spacing",
    suggestedGuidance: "Standard spacing for padding and margins.",
  },
];

const demoRawCss = `--color-primary-500: #123456;\n--spacing-base: 16px;`;
const demoPrompt = `**Generated LLM Prompt (Copy this!)**\n\n--------------------------------------------------------------------------------------\n**Design System Context - Core Tokens:**\n\nThe following are the canonical Design System tokens for this project. **You MUST use these variables for styling, NOT hardcoded values.** Prioritize using the most semantically appropriate token.\n\n---\n\n**1. Color Tokens:**\n\n- **Token Name:** \`--color-brand-primary\`\n  - **Value:** \`#123456\`\n  - **Semantic Use:** "The primary brand color for main calls-to-action, prominent headers, and active states. Conveys brand identity."\n  - **Usage Examples/Guidance:** Buttons (primary variant), prominent links, active tab indicators, key headings (e.g., H1, H2).\n  - **CSS Variable:** \`var(--color-brand-primary)\`\n\n---\n\n**2. Spacing Tokens:**\n\n- **Token Name:** \`--spacing-md\`\n  - **Value:** \`16px\`\n  - **Semantic Use:** "Medium spacing unit. Ideal for padding within components and standard vertical spacing between distinct content blocks (e.g., paragraphs, list items)."\n  - **Usage Examples/Guidance:** Padding inside buttons, vertical margin between form fields, horizontal spacing between icons and text, default line height spacing.\n  - **CSS Variable:** \`var(--spacing-md)\`\n\n---\n\n**Instructions for Component Generation:**\n\nWhen generating UI components or code, if a visual attribute (e.g., a color, spacing, font size, border-radius) corresponds to one of the above defined Design System tokens, you **MUST use the specified token name** (e.g., \`var(--color-brand-primary)\`) instead of the raw value (e.g., \`#123456\`). Always prioritize semantic usage guidelines to ensure consistency and maintainability.`;

const projects = [
  { id: 1, name: "Design System Alpha" },
  { id: 2, name: "Marketing Site" },
  { id: 3, name: "Mobile App" },
];
const selectedProjectId = 1;

const InputProcessContainer: React.FC<InputProcessContainerProps> = ({ showToast }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [rawCss, setRawCss] = useState("");
  const [llmPrompt, setLlmPrompt] = useState("");

  // Handler for Step 1 textarea click
  const handleRawCssClick = () => {
    if (!rawCss) setRawCss(demoRawCss);
  };

  // Handler for Step 1 parse
  const handleParse = () => {
    if (showToast) showToast('Variables parsed successfully!', 'success');
    setCurrentStep(2);
  };

  // Handler for Step 2 confirm
  const handleConfirm = () => {
    setLlmPrompt(demoPrompt);
    if (showToast) showToast('Semantic mappings confirmed and prompt generated!', 'success');
    setCurrentStep(3);
  };

  // Handler for Step 3 copy
  const handleCopyPrompt = () => {
    if (navigator && window.navigator.clipboard) {
      window.navigator.clipboard.writeText(llmPrompt);
      if (showToast) showToast('Semantized variables have been copied to clipboard.', 'success');
    }
  };

  let stepContent = null;
  if (currentStep === 1) {
    stepContent = (
      <Step1_PasteRawCSS
        onParse={handleParse}
        initialCss={rawCss}
        showToast={showToast}
        onTextareaClick={handleRawCssClick}
        setRawCss={setRawCss}
      />
    );
  } else if (currentStep === 2) {
    stepContent = (
      <Step2_ReviewSemanticize
        parsedVariables={sampleParsedVariables}
        onConfirm={handleConfirm}
        onBack={() => setCurrentStep(1)}
        showToast={showToast}
      />
    );
  } else if (currentStep === 3) {
    stepContent = (
      <Step3_GeneratePrompt
        llmPrompt={llmPrompt}
        onBack={() => setCurrentStep(2)}
        showToast={showToast}
        onCopy={handleCopyPrompt}
      />
    );
  }

  return (
    <div className="flex justify-center items-start w-full min-h-[80vh] bg-gray-100">
      <div className="flex w-full max-w-6xl rounded-2xl shadow-xl bg-white mt-12 h-[88vh] overflow-hidden">
        {/* Sidebar: always visible on desktop */}
        <div className="hidden md:block h-full">
          <ProjectSidebar projects={projects} selectedProjectId={selectedProjectId} />
        </div>
        {/* Wizard content: fills the rest of the card */}
        <div className="flex-1 flex flex-col h-full overflow-y-auto p-10">
          <ProcessProgressIndicator currentStep={currentStep} onStepClick={setCurrentStep} />
          <div className="w-full mt-10">
            {stepContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputProcessContainer;
