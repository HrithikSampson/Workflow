import styles from "@/components/MessagePanel.module.css"
const MessagePanel = () => {
  return (
    <div className={styles.container}>
        <div className={styles.messageContainer}>
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