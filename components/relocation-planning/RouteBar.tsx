"use client";

import { useState } from "react";
import Icon from "./Icon";
import styles from "./gm.module.css";
import { COUNTRIES, PHONE_INTL } from "./data";

export default function RouteBar() {
  const [from, setFrom] = useState("India");
  const [to, setTo] = useState("United Kingdom (UK)");
  const [note, setNote] = useState("");

  function swap() {
    setFrom(to);
    setTo(from);
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (from === to) {
      setNote("Please choose two different countries.");
      return;
    }
    if (from !== "India" && to !== "India") {
      setNote(
        "Most of our routes start or end in India. You can still send this route and we will confirm what is possible."
      );
    } else {
      setNote("");
    }
    const text = `Hi MovingBay, I would like a quote for a relocation from ${from} to ${to}.`;
    window.open(`https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  }

  return (
    <div className={styles.routebar}>
      <div className={styles.wrap}>
        <form className={styles.box} onSubmit={submit}>
          <div>
            <h2>Check your route</h2>
            <p className={styles.hSub}>Pick where you are moving from and to.</p>
          </div>

          <div>
            <label htmlFor="rp-from">Moving from</label>
            <select id="rp-from" value={from} onChange={(e) => setFrom(e.target.value)}>
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <button className={styles.swap} type="button" aria-label="Swap origin and destination" onClick={swap}>
            <Icon name="swap" />
          </button>

          <div>
            <label htmlFor="rp-to">Moving to</label>
            <select id="rp-to" value={to} onChange={(e) => setTo(e.target.value)}>
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <button className={`${styles.btn} ${styles.btnSun}`} type="submit">
            Get a route quote
          </button>

          <p className={styles.routeNote} role="status">
            {note}
          </p>
        </form>
      </div>
    </div>
  );
}
