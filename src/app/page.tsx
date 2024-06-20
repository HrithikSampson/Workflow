import MessagePanel from "@/components/MessagePanel";
import Workspace from "@/components/Workspace";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <Workspace />
        <MessagePanel />
      </div>
    </main>
  );
}
