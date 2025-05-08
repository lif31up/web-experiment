import { CSSProperties } from "react";
import Screen from "@/component/feature/Screen";

export default function Home() {
  return (
    <div style={homeStyle}>
      <main>
        <Screen
          width={320}
          height={320}
          data={{ src: "/img_1.png", offset: 1.5 }}
        />
      </main>
    </div>
  );
}

const homeStyle: CSSProperties = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "black",
};
