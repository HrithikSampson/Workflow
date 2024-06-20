import Image from "next/image"
import styles from "./WorkflowBox.module.css"
import { Handle, NodeProps, Position } from "reactflow"
import { useMemo } from "react"

const WorkflowBox = ({data:{content,text}}:NodeProps<{content?: string,text:string}>) => {
  return useMemo(()=>(
    <div className={styles.container}>
        <div className={styles.header}>
            <Image src="/chat-bubble.svg" alt="" width={20} height={20}/>
            <div className={styles.headerText}>{content==""?"Send Message":content}</div>
        </div>
        <div className={styles.content}>{text}</div>
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