
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { NodeData, NodeType } from '../types';

interface Props {
  data: NodeData;
  selectedNode: NodeData;
  onSelect: (node: NodeData) => void;
  onHover: (node: NodeData | null) => void;
}

const NetworkDiagram: React.FC<Props> = ({ data, selectedNode, onSelect, onHover }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const g = svg.append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    // Zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 4])
      .on('zoom', (event) => g.attr('transform', event.transform));
    
    svg.call(zoom as any);

    // Initial transform
    svg.call(zoom.transform as any, d3.zoomIdentity.translate(width / 2, height / 2).scale(0.8));

    // Force simulation for command center "vibe"
    const nodes: any[] = [];
    const links: any[] = [];

    const flatten = (node: NodeData, parent?: any) => {
      const d3Node = { ...node };
      nodes.push(d3Node);
      if (parent) {
        links.push({ source: parent.id, target: d3Node.id });
      }
      node.children?.forEach(child => flatten(child, d3Node));
    };

    flatten(data);

    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id((d: any) => d.id).distance(120))
      .force('charge', d3.forceManyBody().strength(-400))
      .force('center', d3.forceCenter(0, 0))
      .force('collision', d3.forceCollide().radius(60));

    const link = g.append('g')
      .attr('stroke', '#334155')
      .attr('stroke-opacity', 0.6)
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke-width', 1.5);

    const node = g.append('g')
      .selectAll('g')
      .data(nodes)
      .join('g')
      .attr('class', 'cursor-pointer')
      .on('click', (event, d) => onSelect(d))
      .on('mouseover', (event, d) => onHover(d))
      .on('mouseout', () => onHover(null))
      .call(d3.drag<any, any>()
        .on('start', (event) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          event.subject.fx = event.subject.x;
          event.subject.fy = event.subject.y;
        })
        .on('drag', (event) => {
          event.subject.fx = event.x;
          event.subject.fy = event.y;
        })
        .on('end', (event) => {
          if (!event.active) simulation.alphaTarget(0);
          event.subject.fx = null;
          event.subject.fy = null;
        }));

    // Circle for nodes
    node.append('circle')
      .attr('r', (d: NodeData) => {
        if (d.type === NodeType.HEAD_OFFICE) return 24;
        if (d.type === NodeType.REGIONAL_OFFICE) return 18;
        if (d.type === NodeType.DISTRICT) return 12;
        return 8;
      })
      .attr('fill', (d: NodeData) => {
        if (d.id === selectedNode.id) return '#22d3ee';
        if (d.type === NodeType.HEAD_OFFICE) return '#0891b2';
        if (d.type === NodeType.REGIONAL_OFFICE) return '#0e7490';
        if (d.type === NodeType.DISTRICT) return '#155e75';
        return '#164e63';
      })
      .attr('stroke', (d: NodeData) => d.id === selectedNode.id ? '#ffffff' : '#334155')
      .attr('stroke-width', (d: NodeData) => d.id === selectedNode.id ? 3 : 1);

    // Text for nodes
    node.append('text')
      .attr('dy', (d: NodeData) => {
        if (d.type === NodeType.HEAD_OFFICE) return 40;
        return 24;
      })
      .attr('text-anchor', 'middle')
      .text((d: NodeData) => d.name)
      .attr('fill', '#94a3b8')
      .style('font-size', '10px')
      .style('font-weight', '600')
      .style('pointer-events', 'none')
      .style('text-transform', 'uppercase');

    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node.attr('transform', (d: any) => `translate(${d.x},${d.y})`);
    });

    return () => simulation.stop();
  }, [data, selectedNode]);

  return (
    <div className="w-full h-full">
      <svg ref={svgRef} className="w-full h-full" />
    </div>
  );
};

export default NetworkDiagram;
