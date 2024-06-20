import Image from "next/image";
import styles from "./WorkflowBox.module.css";
import { Handle, NodeProps, Position } from "reactflow";
import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { selectNode } from "@/state/workspace/workspaceSlice";

const WorkflowBox = ({
  data: { content, text, id },
}: NodeProps<{ content?: string; text: string; id: string }>) => {
  const dispatch = useDispatch();
  const onClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      event.stopPropagation();
      dispatch(selectNode(id));
    },
    [id],
  );
  return useMemo(
    () => (
      <div className={styles.container} onClick={onClick}>
        <div className={styles.header}>
          <Image src="/chat-bubble.svg" alt="" width={20} height={20} />
          <div className={styles.headerText}>
            {content == "" ? "Send Message" : content}
          </div>
        </div>
        <div className={styles.content}>{text}</div>
        <Handle
          type="source"
          position={Position.Right}
          id="source"
          style={{ background: "#555" }}
        />
        <Handle
          type="target"
          position={Position.Left}
          id="target"
          style={{ background: "#555" }}
        />
      </div>
    ),
    [content, text],
  );
};

export default WorkflowBox;
