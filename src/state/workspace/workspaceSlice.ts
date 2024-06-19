import { createSlice } from "@reduxjs/toolkit";

interface NodeType {
    id: number;
    title: String;
    content: String;
    files?: File;
}

interface WorkSpaceType {
    nodes: NodeType[];
}

const initialState: WorkSpaceType = {
    nodes: []
}

const initialNode: NodeType = {
    id: 0,
    title: "Send Message",
    content: "textNode",
}

const workflowSlice = createSlice({
    name: "workflow",
    initialState,
    reducers: {
        workflowSave: (state) => {

        },

    }
});
export const {workflowSave} = workflowSlice.actions;
export default workflowSlice.reducer;
