"use client";
import { useCallback, useState } from "react";
import styles from "./Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { workflowSave } from "@/state/workspace/workspaceSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const [showError, setShowError] = useState(false);
  const state = useSelector(
    (state: RootState) => state.workflow.currentWorkspace,
  );
  const save = useCallback(() => {
    const set = new Set();
    state.edges.map((egs) => {
      set.add(egs.target);
    });
    if (set.size == state.nodes.length - 1 || state.nodes.length <= 1) {
      dispatch(workflowSave());
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  }, [state]);
  return (
    <div className={styles.header}>
      {showError && <div className={styles.errorMessage}>Cannot Save Flow</div>}
      <button className={styles.savebutton} onClick={save}>
        Save Changes
      </button>
    </div>
  );
};

export default Navbar;
