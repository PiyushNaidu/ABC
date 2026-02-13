
import React, { useState, useEffect, useMemo } from 'react';
import * as d3 from 'd3';
import { MPIDC_HIERARCHY } from './data';
import { NodeData, NodeType, DashboardStats } from './types';
import NetworkDiagram from './components/NetworkDiagram';
import Sidebar from './components/Sidebar';
import DetailsPanel from './components/DetailsPanel';
import Header from './components/Header';
import FeedMonitor from './components/FeedMonitor';

const App: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<NodeData>(MPIDC_HIERARCHY);
  const [hoveredNode, setHoveredNode] = useState<NodeData | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const stats: DashboardStats = useMemo(() => {
    let divisions = 0;
    let districts = 0;
    let industrialAreas = 0;

    const count = (node: NodeData) => {
      if (node.type === NodeType.REGIONAL_OFFICE) divisions++;
      if (node.type === NodeType.DISTRICT) districts++;
      if (node.type === NodeType.INDUSTRIAL_AREA) industrialAreas++;
      node.children?.forEach(count);
    };

    count(MPIDC_HIERARCHY);
    return {
      totalDivisions: divisions,
      totalDistricts: districts,
      totalIndustrialAreas: industrialAreas,
      activeFeeds: industrialAreas + divisions + 1
    };
  }, []);

  return (
    <div className="flex h-screen w-screen flex-col bg-slate-950 text-slate-200 bg-grid selection:bg-cyan-500/30">
      <Header stats={stats} />
      
      <main className="flex flex-1 overflow-hidden relative">
        <Sidebar 
          isOpen={isSidebarOpen} 
          setIsOpen={setIsSidebarOpen}
          hierarchy={MPIDC_HIERARCHY}
          selectedNode={selectedNode}
          onSelect={setSelectedNode}
        />
        
        <div className="flex-1 relative flex flex-col">
          {/* Network Visualization Area */}
          <div className="flex-1 relative overflow-hidden">
            <NetworkDiagram 
              data={MPIDC_HIERARCHY} 
              selectedNode={selectedNode}
              onSelect={setSelectedNode}
              onHover={setHoveredNode}
            />
            
            {/* Visual Overlays */}
            <div className="absolute top-4 left-4 pointer-events-none z-10">
              <div className="bg-slate-900/80 backdrop-blur border border-slate-700 p-3 rounded-lg flex flex-col gap-1">
                <span className="text-xs uppercase text-slate-500 font-bold tracking-widest">Active System</span>
                <span className="text-lg font-tech text-cyan-400">MPIDC COMMAND v4.2</span>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-green-500 uppercase">Synchronized with Sat-7B</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Feed Monitor */}
          <div className="h-64 border-t border-slate-800 bg-slate-950/50 backdrop-blur-md">
            <FeedMonitor node={selectedNode} />
          </div>
        </div>

        <DetailsPanel 
          node={hoveredNode || selectedNode} 
          onClose={() => setHoveredNode(null)}
        />
      </main>

      <footer className="h-6 bg-slate-900 border-t border-slate-800 flex items-center justify-between px-4 text-[10px] uppercase tracking-tighter text-slate-500">
        <span>&copy; MPIDC Command & Control System | MP STATE DATA CENTER</span>
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><span className="w-1 h-1 bg-cyan-500 rounded-full" /> Latency: 12ms</span>
          <span className="flex items-center gap-1"><span className="w-1 h-1 bg-green-500 rounded-full" /> Load: 14%</span>
          <span className="flex items-center gap-1"><span className="w-1 h-1 bg-red-500 rounded-full" /> Alerts: 0</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
