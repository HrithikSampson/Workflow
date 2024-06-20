import Workspace from "@/components/Workspace";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EdgeTypes {
    animated: boolean;
    type: string;
    id: string;
    source: string;
    target: string;
    sourceHandle: string | null;
    targetHandle: string | null;
}

interface NodeType {
    id: string;
    type: string;
    position: {
        x: number;
        y: number;
    };
    data: {
        content: string;
        text: string;
    },
    files?: File[],
}

interface WorkSpaceType {
    nodes: NodeType[],
    edges: EdgeTypes[],
}
interface WorkflowCollection {
    workflow: WorkSpaceType[],
    currentWorkspace: WorkSpaceType,
}
const initialState: WorkflowCollection = {
    workflow: [],
    currentWorkspace: {nodes: [],edges:[]},
}
const initialWorkflow: WorkSpaceType = {
    nodes: [],
    edges:[],
}


const workflowSlice = createSlice({
    name: "workflows",
    initialState,
    reducers: {
        workflowSave: (state) => {
            state.workflow.push(state.currentWorkspace);
            state.currentWorkspace = initialWorkflow;
        },
        updateCurrentWorkspace: (state,action:PayloadAction<{id:string,content:string}>) => {
            state.currentWorkspace.nodes.filter((node)=>node.id===action.payload.id)[0].data.content = action.payload.content;
        },
        addNodes: (state,action: PayloadAction<NodeType>) => {
            state.currentWorkspace.nodes.push(action.payload);
        },
        addEdges: (state,action: PayloadAction<EdgeTypes>) => {
            state.currentWorkspace.edges.push(action.payload);
        }
    }
});
export const {workflowSave, updateCurrentWorkspace, addNodes, addEdges} = workflowSlice.actions;
export default workflowSlice.reducer;
export type {EdgeTypes}
