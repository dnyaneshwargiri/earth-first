import styles from "./page.module.css";
import { NextUIProvider } from "@nextui-org/react";
import IntroSection from "./components/introSection/introSection";

export default function Home() {
  return (
    <NextUIProvider>
      <main className={styles.main}>
        <IntroSection />
      </main>
    </NextUIProvider>
  );
}
