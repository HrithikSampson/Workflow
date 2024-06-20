"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  Connection,
  addEdge,
  Background,
  Controls,
  Viewport,
  EdgeTypes,
  NodeChange,
  NodePositionChange,
} from "reactflow";
import "reactflow/dist/style.css";
import WorkflowBox from "./WorkflowBox";
import styles from "./Workspace.module.css";
import CustomEdge from "./CustomEdge";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";
import {
  addEdges,
  addNodes,
  changeNodesPosition,
  NodeType,
  selectNode,
} from "@/state/workspace/workspaceSlice";
import { EdgeStateType } from "@/state/workspace/workspaceSlice";

const Workspace = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [zoom, setZoom] = useState(1);
  const [xcor, setX] = useState(0);
  const [ycor, setY] = useState(0);
  const state = useSelector(
    (state: RootState) => state.workflow.currentWorkspace,
  );
  const dispatch = useDispatch();
  const nodeTypes = useMemo(
    () => ({
      workflowBox: WorkflowBox,
    }),
    [],
  );
  useEffect(() => {
    setNodes(state.nodes);
    setEdges(state.edges);
  }, [state.nodes, state.edges]);

  const onClick = useCallback(() => {
    dispatch(selectNode(null));
  }, []);
  const edgeTypes = useMemo(
    () => ({
      custom: CustomEdge,
    }),
    [],
  );
  const onMove = useCallback(
    (event: MouseEvent | TouchEvent, data: Viewport) => {
      setZoom(data.zoom);
      setX(data.x);
      setY(data.y);
    },
    [],
  );
  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const reactFlowBounds = event.currentTarget.getBoundingClientRect();
      //positioning the element when the Viewport changes
      const position = {
        x: (event.clientX - reactFlowBounds.left - xcor) / zoom,
        y: (event.clientY - reactFlowBounds.top - ycor) / zoom,
      };
      const newNode = {
        id: `${nodes.length + 1}`,
        type: "workflowBox",
        position,
        data: { content: "", text: "Message", id: `${nodes.length + 1}` },
      };
      dispatch(addNodes(newNode));
    },
    [nodes, xcor, ycor, zoom],
  );

  const onNodesChangeHandler = useCallback(
    (changes: NodeChange[]) => {
      let nodesChanged = false;
      const updatedNodes = nodes.map((node) => {
        const change = changes.find(
          (c) => c.type === "position" && c.id === node.id,
        ) as NodePositionChange | undefined;
        if (change && change.position) {
          nodesChanged = true;
          return {
            ...node,
            position: { x: change.position.x, y: change.position.y },
          };
        }
        return node;
      });
      if (nodesChanged) {
        const filteredUpdatedNodes: NodeType[] = updatedNodes.filter(
          (node): node is NodeType => node !== undefined,
        );
        dispatch(changeNodesPosition(filteredUpdatedNodes));
      }
      onNodesChange(changes);
    },
    [nodes, onNodesChange],
  );

  const onConnect = useCallback(
    (connection: Connection) => {
      const sourceEdges = edges.filter((el) => el.source === connection.source);

      if (sourceEdges.length < 1 && connection.source && connection.target) {
        const tempConnection = {
          ...connection,
          source: connection.source as string,
          target: connection.target as string,
        };
        const edge: EdgeStateType = {
          ...tempConnection,
          animated: false,
          type: "custom",
          id: `edge-${edges.length + 1}`,
        };
        dispatch(addEdges(edge));
      }
    },
    [edges, setEdges],
  );

  return (
    <div className={styles.container}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChangeHandler}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onDrop={onDrop}
        onDragOver={(event) => event.preventDefault()} // Allow dropping of chat box
        onMove={onMove}
        onClick={onClick}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Workspace;
