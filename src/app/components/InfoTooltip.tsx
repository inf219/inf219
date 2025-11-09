import React, { useState } from 'react';

/** AI-generert komponent! */

interface InfoTooltipProps {
  text: string;
  size?: number;
}

function InfoTooltip({ text, size = 20 }: InfoTooltipProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="float-right relative inline-block">
      <div
        className="flex items-center justify-center ml-auto rounded-full bg-[var(--main_heading)] text-white transition-colors hover:bg-blue-700 mb-4"
        style={{ width: `${size}px`, height: `${size}px` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="text-xs font-bold">i</span>
      </div>
      
      {isHovered && (
        <div className="absolute z-10 right-0 mb-2 px-6 py-4 bg-gray-900 text-white text-m rounded-lg shadow-lg max-w-lg w-164 text-auto">
                    {typeof text === 'string' 
            ? text.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < text.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))
            : text
          }
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
            <div className="border-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InfoTooltip;