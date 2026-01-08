
import React from 'react';

interface StatMiniBarProps {
  label: string;
  value: string | number;
  percentage: number;
  note?: string;
  colorClass?: string;
}

const StatMiniBar: React.FC<StatMiniBarProps> = ({ label, value, percentage, note, colorClass = 'bg-blue-500' }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1 text-xs">
        <span className="text-slate-400 font-medium">{label}</span>
        <span className="text-white font-bold">{value}</span>
      </div>
      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-1000 ease-out ${colorClass}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      {note && <p className="text-[10px] text-slate-500 mt-1">{note}</p>}
    </div>
  );
};

export default StatMiniBar;
