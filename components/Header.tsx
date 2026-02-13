
import React from 'react';
import { DashboardStats } from '../types';

interface HeaderProps {
  stats: DashboardStats;
}

const Header: React.FC<HeaderProps> = ({ stats }) => {
  return (
    <header className="h-20 bg-slate-900/80 backdrop-blur border-b border-slate-800 flex items-center justify-between px-6 z-50">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-cyan-600 rounded flex items-center justify-center glow">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
            <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l8 4v7.64l-8 4-8-4V8.18l8-4zM12 7l-5.5 2.75 5.5 2.75 5.5-2.75L12 7z" />
          </svg>
        </div>
        <div>
          <h1 className="text-xl font-tech tracking-wider text-cyan-400">MPIDC</h1>
          <p className="text-[10px] uppercase text-slate-500 font-bold tracking-[0.2em]">State Monitoring Command Center</p>
        </div>
      </div>

      <div className="flex gap-8">
        <StatItem label="Regional Offices" value={stats.totalDivisions} />
        <StatItem label="Industrial Areas" value={stats.totalIndustrialAreas} />
        <StatItem label="Data Feeds" value={stats.activeFeeds} />
        <div className="flex flex-col items-end">
          <span className="text-[10px] text-slate-500 uppercase font-bold mb-1">System Health</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className={`w-1 h-4 rounded-sm ${i < 5 ? 'bg-cyan-500' : 'bg-slate-700'}`} />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

const StatItem: React.FC<{ label: string, value: number }> = ({ label, value }) => (
  <div className="flex flex-col items-end">
    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">{label}</span>
    <span className="text-2xl font-tech text-slate-200">{value.toString().padStart(2, '0')}</span>
  </div>
);

export default Header;
