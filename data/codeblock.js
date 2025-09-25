import React, { useState } from "react";

const CodeBlock = ({ textContent }) => {
  const [copyButtonText, setCopyButtonText] = useState("Copy");

  const handleCopy = () => {
    // Uses the browser's Clipboard API to copy the text
    navigator.clipboard.writeText(textContent).then(
      () => {
        // On success, update the button text
        setCopyButtonText("Copied! ✅");
        // Reset the button text after 2 seconds
        setTimeout(() => {
          setCopyButtonText("Copy");
        }, 2000);
      },
      (err) => {
        setCopyButtonText("There was an Error! ❌");
        setTimeout(() => {
          setCopyButtonText("Copy");
        }, 2000);
      }
    );
  };

  return (
    <div className="code-block-container bg-white text-dark dark:bg-dark dark:text-white">
      <button onClick={handleCopy} className="copy-button">
        {copyButtonText}
      </button>
      <pre>
        <code>{textContent}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
