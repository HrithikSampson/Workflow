"use client";
import styles from "@/components/MessagePanel.module.css";
import { useCallback } from "react";
import SettingsPanel from "./SettingsPanel";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
const MessagePanel = () => {
  const selectedNodeId = useSelector(
    (state: RootState) => state.workflow.selectedNodeId,
  );
  const onDrag = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("drag");
    event.dataTransfer.dropEffect = "move";
  }, []);
  return selectedNodeId === null ? (
    <div className={styles.container}>
      <div className={styles.messageContainer} draggable onDragOver={onDrag}>
        <div className={styles.messageBox}>
          <p>___</p>
          <p>___</p>
          <p>__&nbsp;</p>
        </div>
        <div className={styles.messageText}>Message</div>
      </div>
    </div>
  ) : (
    <SettingsPanel />
  );
};

export default MessagePanel;
