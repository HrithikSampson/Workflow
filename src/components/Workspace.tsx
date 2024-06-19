"use client"
import { useCallback, useMemo } from "react";
import ReactFlow, { useNodesState, useEdgesState, Connection, addEdge, Background, Controls } from "reactflow";
import "reactflow/dist/style.css";
import WorkflowBox from "./WorkflowBox";
import styles from './Workspace.module.css'
import CustomEdge from "./CustomEdge";

const Workspace = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([{ id: "0", type: "workflowBox", position: { x: 0, y: 0 }, data: { content: "", text: "" } }]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const nodeTypes = useMemo(()=>({
    workflowBox: WorkflowBox,
  }),[]);
  
  const edgeTypes = useMemo(()=>({
    custom: CustomEdge,
  }),[]);
  
  const onDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const reactFlowBounds = event.currentTarget.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');
    const position = {
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    };
    const newNode = {
      id: `${nodes.length + 1}`,
      type: 'workflowBox',
      position,
      data: { content: "", text: "Message" },
    };
    setNodes((prevNodes) => [...prevNodes, newNode]);
  }, [nodes, setNodes]);

  const onConnect = useCallback((connection: Connection) => {
    const sourceEdges = edges.filter((el) => el.source === connection.source);

    if (sourceEdges.length < 1) {
      const edge = {
        ...connection,
        animated: false,
        type: 'custom',
        id: `edge-${edges.length + 1}`,
      };
      setEdges((prevEdges) => addEdge(edge, prevEdges));
    } else {
      alert('Only one edge can originate from a source handle');
    }
  }, [edges, setEdges]);

  return (
    <div className={styles.container}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onDrop={onDrop}
        onDragOver={(event) => event.preventDefault()} // Allow dropping
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Workspace;
