
import React from 'react';
import { NodeData, NodeType } from '../types';

interface Props {
  node: NodeData;
}

const FeedMonitor: React.FC<Props> = ({ node }) => {
  const feeds = Array.from({ length: 4 }).map((_, i) => ({
    id: `cam-${i}`,
    label: `CAM ${i + 1}: ${node.name}`,
    status: 'LIVE',
    placeholder: `https://picsum.photos/seed/${node.id + i}/400/225`
  }));

  return (
    <div className="p-4 h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <h4 className="text-xs font-tech text-slate-300 uppercase tracking-widest">
            Surveillance & Telemetry Matrix: {node.name}
          </h4>
        </div>
        <div className="flex gap-2">
          {['GRID', 'LIST', 'SOLO'].map(v => (
            <button key={v} className="px-2 py-0.5 rounded bg-slate-800 text-[9px] font-bold text-slate-500 hover:text-cyan-400 border border-slate-700">
              {v}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 grid grid-cols-4 gap-4">
        {feeds.map(feed => (
          <div key={feed.id} className="relative group overflow-hidden rounded-lg border border-slate-800 bg-slate-900 aspect-video">
            <img 
              src={feed.placeholder} 
              alt={feed.label} 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
            />
            
            {/* Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

            <div className="absolute inset-0 border border-cyan-500/20 group-hover:border-cyan-500/50 transition-colors" />
            
            <div className="absolute top-2 left-2 flex items-center gap-1.5">
              <span className="text-[8px] bg-red-600 text-white px-1.5 py-0.5 rounded-sm font-bold animate-pulse">LIVE</span>
              <span className="text-[8px] bg-black/60 text-slate-300 px-1.5 py-0.5 rounded-sm font-mono tracking-tight">{feed.label}</span>
            </div>

            <div className="absolute bottom-2 right-2 text-[8px] font-mono text-cyan-500/70 bg-black/40 px-1 rounded">
              ISO: 400 | F: 2.8 | 24 FPS
            </div>

            {/* Simulated Data Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
               <div className="flex justify-between text-[8px] font-mono text-slate-400">
                  <span>LAT: 23.2599° N</span>
                  <span>LNG: 77.4126° E</span>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedMonitor;
