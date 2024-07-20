import styles from "./page.module.css";
import { NextUIProvider } from "@nextui-org/react";
import Avatar from "./avatar";
export default function Home() {
  return (
    <NextUIProvider>
      {" "}
      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Avatar />
      </main>
    </NextUIProvider>
  );
}
