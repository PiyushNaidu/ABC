
import React from 'react';
import { NodeData, NodeType } from '../types';

interface Props {
  node: NodeData;
  onClose: () => void;
}

const DetailsPanel: React.FC<Props> = ({ node, onClose }) => {
  return (
    <div className="absolute right-6 top-24 w-80 bg-slate-900/90 backdrop-blur-xl border border-slate-700 shadow-2xl rounded-xl z-30 pointer-events-auto overflow-hidden animate-in slide-in-from-right duration-300">
      <div className="bg-slate-800/50 p-4 border-b border-slate-700 flex justify-between items-center">
        <h3 className="font-tech text-cyan-400 text-sm">Entity Details</h3>
        <span className={`px-2 py-0.5 rounded-full text-[10px] uppercase font-bold ${
          node.status === 'online' ? 'bg-green-500/20 text-green-400' : 
          node.status === 'warning' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'
        }`}>
          {node.status}
        </span>
      </div>

      <div className="p-5 space-y-6">
        <div>
          <label className="text-[10px] uppercase text-slate-500 font-bold mb-1 block">Name</label>
          <div className="text-xl font-bold text-slate-100">{node.name}</div>
        </div>

        <div>
          <label className="text-[10px] uppercase text-slate-500 font-bold mb-1 block">Type</label>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-sm ${getTypeColor(node.type)}`} />
            <span className="text-sm font-medium text-slate-300">{node.type.replace('_', ' ')}</span>
          </div>
        </div>

        {node.location && (
          <div>
            <label className="text-[10px] uppercase text-slate-500 font-bold mb-1 block">Location</label>
            <div className="text-sm text-slate-400 italic">"{node.location}"</div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-800">
            <span className="text-[9px] text-slate-500 block">Uptime</span>
            <span className="text-sm font-tech text-cyan-500">99.98%</span>
          </div>
          <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-800">
            <span className="text-[9px] text-slate-500 block">Connections</span>
            <span className="text-sm font-tech text-cyan-500">{node.children?.length || 0}</span>
          </div>
        </div>

        <div>
          <label className="text-[10px] uppercase text-slate-500 font-bold mb-2 block">System Diagnostics</label>
          <div className="space-y-2">
            <DiagnosticRow label="Link Stability" value={88} color="bg-cyan-500" />
            <DiagnosticRow label="Feed Quality" value={94} color="bg-green-500" />
          </div>
        </div>
      </div>

      <div className="bg-cyan-600/10 p-4 border-t border-cyan-900/50">
        <button className="w-full py-2 bg-cyan-600 hover:bg-cyan-500 transition-colors rounded-lg text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-cyan-900/20">
          Request Full Report
        </button>
      </div>
    </div>
  );
};

const getTypeColor = (type: NodeType) => {
  switch (type) {
    case NodeType.HEAD_OFFICE: return 'bg-cyan-500';
    case NodeType.REGIONAL_OFFICE: return 'bg-blue-500';
    case NodeType.DISTRICT: return 'bg-indigo-500';
    case NodeType.INDUSTRIAL_AREA: return 'bg-teal-500';
    default: return 'bg-slate-500';
  }
};

const DiagnosticRow: React.FC<{ label: string, value: number, color: string }> = ({ label, value, color }) => (
  <div className="space-y-1">
    <div className="flex justify-between text-[10px]">
      <span className="text-slate-400">{label}</span>
      <span className="text-slate-300">{value}%</span>
    </div>
    <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
      <div className={`h-full ${color}`} style={{ width: `${value}%` }} />
    </div>
  </div>
);

export default DetailsPanel;
