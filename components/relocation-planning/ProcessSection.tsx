"use client";

import { useState } from "react";
import styles from "./gm.module.css";
import { PROCESS_STEPS } from "./data";

type Mode = keyof typeof PROCESS_STEPS;

export default function ProcessSection() {
  const [mode, setMode] = useState<Mode>("corp");
  const steps = PROCESS_STEPS[mode];

  return (
    <section className={`${styles.sec} ${styles.alt}`} id="process">
      <div className={styles.wrap}>
        <div className={styles.secH}>
          <h2>A clear process, from first call to first week</h2>
          <p>You always know what is happening, who is responsible and what comes next.</p>
        </div>

        <div className={styles.seg} role="group" aria-label="Choose process type">
          <button type="button" aria-pressed={mode === "corp"} onClick={() => setMode("corp")}>
            Corporate program
          </button>
          <button type="button" aria-pressed={mode === "ind"} onClick={() => setMode("ind")}>
            Individual or pet move
          </button>
        </div>

        <ol className={styles.steps} style={{ padding: 0, margin: 0, listStyle: "none" }}>
          {steps.map((s) => (
            <li className={styles.step} key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <em>What you see: {s.see}</em>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
