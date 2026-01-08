
import React from 'react';
import { CategoryData } from '../types';
import StatMiniBar from './StatMiniBar';

interface CategoryCardProps {
  data: CategoryData;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ data }) => {
  const isRejectionHigh = !data.isApprovalMain;
  const mainStatColor = isRejectionHigh ? 'text-rose-500' : 'text-emerald-400';
  const mainStatBg = isRejectionHigh ? 'bg-rose-500/10 border-rose-500/30' : 'bg-emerald-500/10 border-emerald-500/30';
  const mainIcon = isRejectionHigh ? '⚠️' : '✓';

  return (
    <div className="flex flex-col h-full glass-card rounded-[2rem] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 group">
      {/* Header */}
      <div className={`h-48 flex flex-col items-center justify-center p-6 bg-gradient-to-br ${data.headerGradient}`}>
        <span className="text-5xl mb-3 drop-shadow-lg group-hover:scale-110 transition-transform">{data.icon}</span>
        <h3 className="text-center text-white font-bold text-lg leading-tight drop-shadow-md">
          {data.title.split(' + ').map((part, i) => (
            <React.Fragment key={i}>
              {part}
              {i < data.title.split(' + ').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h3>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Main Badge */}
        <div className={`flex items-center gap-4 p-4 rounded-2xl border ${mainStatBg} mb-6`}>
          <span className={`text-2xl ${mainStatColor}`}>{mainIcon}</span>
          <div>
            <div className={`text-3xl font-black ${mainStatColor} leading-none`}>
              {isRejectionHigh ? data.rejectionRate : data.approvalRate}%
            </div>
            <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
              {isRejectionHigh ? 'Rechazo' : 'Aprobación'}
            </div>
          </div>
        </div>

        {/* Basic Stats List */}
        <div className="space-y-3 mb-6">
          <StatRow label="Solicitudes" value={data.requests} />
          <StatRow label="Usuarios" value={data.users} />
          <StatRow 
            label={isRejectionHigh ? 'Aprobación' : 'Rechazo'} 
            value={`${isRejectionHigh ? data.approvalRate : data.rejectionRate}%`} 
          />
          <StatRow label={data.extraStatLabel} value={data.extraStatValue} />
        </div>

        {/* Section Bars */}
        <div className="mb-4">
          <h4 className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-3">Antigüedad Laboral</h4>
          <StatMiniBar 
            label={data.seniorityMore12.label} 
            value={data.seniorityMore12.value} 
            percentage={data.seniorityMore12.percentage || 0}
            note={data.seniorityMore12.note}
            colorClass="bg-gradient-to-r from-cyan-400 to-blue-500"
          />
          <StatMiniBar 
            label={data.seniorityLess12.label} 
            value={data.seniorityLess12.value} 
            percentage={data.seniorityLess12.percentage || 0}
            note={data.seniorityLess12.note}
            colorClass="bg-gradient-to-r from-rose-400 to-orange-400"
          />
        </div>

        {/* Summary Tag */}
        <div className="mt-auto">
          <div className={`w-full py-3 px-2 rounded-xl border text-[10px] text-center font-bold uppercase tracking-wider ${data.footerClass}`}>
            {data.footerTag}
          </div>
        </div>
      </div>
    </div>
  );
};

const StatRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex justify-between items-center text-xs pb-2 border-b border-white/5">
    <span className="text-slate-500 font-medium">{label}</span>
    <span className="text-white font-bold">{value}</span>
  </div>
);

export default CategoryCard;
