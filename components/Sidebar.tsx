
import React from 'react';
import { NodeData, NodeType } from '../types';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  hierarchy: NodeData;
  selectedNode: NodeData;
  onSelect: (node: NodeData) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, hierarchy, selectedNode, onSelect }) => {
  return (
    <div className={`${isOpen ? 'w-80' : 'w-12'} transition-all duration-300 border-r border-slate-800 bg-slate-900/50 backdrop-blur-sm z-40 flex flex-col`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="h-12 border-b border-slate-800 flex items-center justify-center hover:bg-slate-800 text-slate-400"
      >
        {isOpen ? (
          <div className="flex w-full items-center justify-between px-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Infrastructure Tree</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
          </div>
        ) : (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
        )}
      </button>

      {isOpen && (
        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          <TreeNode 
            node={hierarchy} 
            selectedNode={selectedNode} 
            onSelect={onSelect} 
            level={0}
          />
        </div>
      )}
    </div>
  );
};

const TreeNode: React.FC<{ 
  node: NodeData; 
  selectedNode: NodeData; 
  onSelect: (node: NodeData) => void;
  level: number;
}> = ({ node, selectedNode, onSelect, level }) => {
  const [isExpanded, setIsExpanded] = React.useState(level < 1);
  const isSelected = selectedNode.id === node.id;
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="mb-1">
      <div 
        className={`
          flex items-center group cursor-pointer py-1 px-2 rounded
          ${isSelected ? 'bg-cyan-500/20 text-cyan-400' : 'hover:bg-slate-800/50 text-slate-400'}
        `}
        onClick={() => {
          onSelect(node);
          setIsExpanded(!isExpanded);
        }}
        style={{ paddingLeft: `${level * 12 + 8}px` }}
      >
        <span className={`mr-2 transform transition-transform ${isExpanded ? 'rotate-90' : ''}`}>
          {hasChildren ? (
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" /></svg>
          ) : (
            <div className="w-3 h-3 border border-slate-600 rounded-full" />
          )}
        </span>
        <span className={`text-xs truncate ${isSelected ? 'font-bold' : ''}`}>
          {node.name}
        </span>
        {node.status === 'warning' && (
          <div className="ml-2 w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]" />
        )}
      </div>

      {hasChildren && isExpanded && (
        <div className="mt-1">
          {node.children!.map(child => (
            <TreeNode 
              key={child.id} 
              node={child} 
              selectedNode={selectedNode} 
              onSelect={onSelect} 
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
