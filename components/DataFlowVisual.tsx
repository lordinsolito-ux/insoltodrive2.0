
import React from 'react';

export const DataFlowVisual: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg className="w-full h-full">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#22c55e', stopOpacity: 0 }} />
            <stop offset="50%" style={{ stopColor: '#22c55e', stopOpacity: 0.5 }} />
            <stop offset="100%" style={{ stopColor: '#22c55e', stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        {[...Array(5)].map((_, i) => (
          <rect key={i} x="-100" y={20 + i * 15} width="200" height="0.5" fill="url(#grad1)">
            <animate
              attributeName="x"
              from="-100%"
              to="100%"
              dur={`${3 + i}s`}
              repeatCount="indefinite"
            />
          </rect>
        ))}
      </svg>
    </div>
  );
};
