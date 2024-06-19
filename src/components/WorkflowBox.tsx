import Image from "next/image"
import styles from "./WorkflowBox.module.css"
import { Handle, NodeProps, Position } from "reactflow"
import { useMemo } from "react"

const WorkflowBox = ({data:{content,text}}:NodeProps<{content?: string,text:string}>) => {
  return useMemo(()=>(
    <div className={styles.workflowContainer}>
        <div className={styles.workHeader}>
            <Image src="/chat-bubble.svg" alt="" width={10} height={10}/>
            <div className={styles.workflowHeader}>{content==""?"Send Message":content}</div>
        </div>
        <div>{text}</div>
        <Handle
        type="source"
        position={Position.Right}
        id="source"
        style={{ background: '#555' }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="target"
        style={{ background: '#555' }}
      />
    </div>
  ),[content,text]);
}

export default WorkflowBox