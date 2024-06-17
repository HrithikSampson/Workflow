"use client"
import styles from "@/components/MessagePanel.module.css"
import { useCallback } from "react";
const MessagePanel = () => {
    const onDrag = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        console.log("drag");
        event.dataTransfer.dropEffect = 'move';
    }, []);
  return (
    <div className={styles.container}>
        <div className={styles.messageContainer} draggable onDragOver={onDrag}>
            {/* Chat image creation */}
            <div className={styles.messageBox}>
                <p>___</p>
                <p>___</p>
                <p>__&nbsp;</p>
            </div>
            <div className={styles.messageText}>Message</div>
        </div>
    </div>
  )
}

export default MessagePanel