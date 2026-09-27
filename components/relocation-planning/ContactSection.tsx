"use client";

import { useEffect, useState } from "react";

import Icon from "./Icon";
import styles from "./gm.module.css";

import {
  AUDIENCE_EVENT,
  COUNTRIES,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_INTL,
  SERVICE_CHECKBOXES,
  WHO_OPTIONS,
  type Audience,
} from "./data";

export default function ContactSection() {
  const [who, setWho] = useState<Audience>("Corporate or HR team");
  const [services, setServices] = useState<string[]>([]);

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [efrom, setEfrom] = useState("India");
  const [eto, setEto] = useState("United Kingdom (UK)");

  const [when, setWhen] = useState("As soon as possible");
  const [msg, setMsg] = useState("");

  const [err, setErr] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // --------------------------------------------------
  // Listen for audience selections elsewhere on page
  // --------------------------------------------------

  useEffect(() => {
    function onAudience(e: Event) {
      const detail = (e as CustomEvent<Audience>).detail;

      if (detail) {
        setWho(detail);

        if (detail === "Pet parent") {
          setServices((prev) =>
            prev.includes("Pet relocation")
              ? prev
              : [...prev, "Pet relocation"]
          );
        }
      }
    }

    window.addEventListener(AUDIENCE_EVENT, onAudience);

    return () => {
      window.removeEventListener(AUDIENCE_EVENT, onAudience);
    };
  }, []);

  // --------------------------------------------------
  // Toggle services
  // --------------------------------------------------

  function toggleService(value: string) {
    setServices((prev) =>
      prev.includes(value)
        ? prev.filter((s) => s !== value)
        : [...prev, value]
    );
  }

  // --------------------------------------------------
  // Validation
  // --------------------------------------------------

  function validate() {
    if (!name.trim()) {
      setErr("Please add your name so we can reply.");
      return false;
    }

    if (!email.trim()) {
      setErr("Please add your email so we can reply.");
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErr("Please enter a valid email address.");
      return false;
    }

    if (efrom === eto) {
      setErr("Moving from and moving to must be different.");
      return false;
    }

    setErr("");
    return true;
  }

  // --------------------------------------------------
  // Submit enquiry to our API
  // --------------------------------------------------

  async function submitEnquiry(e: React.FormEvent) {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setSubmitting(true);
    setErr("");

    try {
      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "mobility-enquiry",

          who,
          name,
          company,
          email,
          phone,

          fromCountry: efrom,
          toCountry: eto,

          services,
          timeline: when,
          message: msg,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Unable to send your enquiry."
        );
      }

      // Success
      alert(
        "Thank you. Your enquiry has been sent to MovingBay. We will get back to you shortly."
      );

      // Reset form
      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setEfrom("India");
      setEto("United Kingdom (UK)");
      setServices([]);
      setWhen("As soon as possible");
      setMsg("");
      setWho("Corporate or HR team");
    } catch (error) {
      console.error("Contact form error:", error);

      setErr(
        "Unable to send your enquiry right now. Please try again or contact us directly."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.wrap}>

        {/* =========================================
            LEFT SIDE
        ========================================== */}

        <div>
          <h2>Plan your move with MovingBay</h2>

          <p className={styles.lead}>
            Tell us what you need and a mobility specialist
            will get back to you. For a quick question,
            message us on WhatsApp.
          </p>

          <div className={styles.reach}>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${PHONE_INTL}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.reachIc}>
                <Icon name="wa" />
              </span>

              <span>
                <small>WhatsApp</small>
                {PHONE_DISPLAY}
              </span>
            </a>

            {/* Phone */}
            <a href={`tel:+${PHONE_INTL}`}>
              <span className={styles.reachIc}>
                <Icon name="phone" />
              </span>

              <span>
                <small>Phone</small>
                {PHONE_DISPLAY}
              </span>
            </a>

            {/* Email */}
            <a href={`mailto:${EMAIL}`}>
              <span className={styles.reachIc}>
                <Icon name="mail" />
              </span>

              <span>
                <small>Email</small>
                {EMAIL}
              </span>
            </a>

            {/* Office */}
            <div>
              <span className={styles.reachIc}>
                <Icon name="pin" />
              </span>

              <span>
                <small>Office</small>
                Bangalore, India
              </span>
            </div>

          </div>
        </div>


        {/* =========================================
            RIGHT SIDE FORM
        ========================================== */}

        <form
          className={styles.formbox}
          onSubmit={submitEnquiry}
        >

          <div className={styles.fgridInner}>

            {/* =====================================
                WHO ARE YOU?
            ====================================== */}

            <fieldset>
              <legend>I am a</legend>

              <div className={styles.opts}>
                {WHO_OPTIONS.map((opt) => (
                  <label key={opt}>
                    <input
                      type="radio"
                      name="who"
                      value={opt}
                      checked={who === opt}
                      onChange={() => setWho(opt)}
                    />

                    <span>
                      {opt === "Corporate or HR team"
                        ? "Corporate or HR"
                        : opt}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>


            {/* =====================================
                BASIC DETAILS
            ====================================== */}

            <div className={styles.two}>

              {/* Name */}
              <div>
                <label htmlFor="rp-name">
                  Full name
                </label>

                <input
                  id="rp-name"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  autoComplete="name"
                  required
                />
              </div>


              {/* Company */}
              <div>
                <label htmlFor="rp-company">
                  Company (optional)
                </label>

                <input
                  id="rp-company"
                  value={company}
                  onChange={(e) =>
                    setCompany(e.target.value)
                  }
                  autoComplete="organization"
                />
              </div>


              {/* Email */}
              <div>
                <label htmlFor="rp-email">
                  Email
                </label>

                <input
                  id="rp-email"
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  autoComplete="email"
                  required
                />
              </div>


              {/* Phone */}
              <div>
                <label htmlFor="rp-phone">
                  Phone
                </label>

                <input
                  id="rp-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value)
                  }
                  autoComplete="tel"
                />
              </div>


              {/* Moving from */}
              <div>
                <label htmlFor="rp-efrom">
                  Moving from
                </label>

                <select
                  id="rp-efrom"
                  value={efrom}
                  onChange={(e) =>
                    setEfrom(e.target.value)
                  }
                >
                  {COUNTRIES.map((country) => (
                    <option
                      key={country}
                      value={country}
                    >
                      {country}
                    </option>
                  ))}
                </select>
              </div>


              {/* Moving to */}
              <div>
                <label htmlFor="rp-eto">
                  Moving to
                </label>

                <select
                  id="rp-eto"
                  value={eto}
                  onChange={(e) =>
                    setEto(e.target.value)
                  }
                >
                  {COUNTRIES.map((country) => (
                    <option
                      key={country}
                      value={country}
                    >
                      {country}
                    </option>
                  ))}
                </select>
              </div>

            </div>


            {/* =====================================
                SERVICES
            ====================================== */}

            <fieldset>
              <legend>Services needed</legend>

              <div className={styles.opts}>
                {SERVICE_CHECKBOXES.map((service) => (
                  <label key={service}>
                    <input
                      type="checkbox"
                      checked={services.includes(service)}
                      onChange={() =>
                        toggleService(service)
                      }
                    />

                    <span>{service}</span>
                  </label>
                ))}
              </div>
            </fieldset>


            {/* =====================================
                TIMELINE
            ====================================== */}

            <div>
              <label htmlFor="rp-when">
                Expected timeline
              </label>

              <select
                id="rp-when"
                value={when}
                onChange={(e) =>
                  setWhen(e.target.value)
                }
              >
                <option>
                  As soon as possible
                </option>

                <option>
                  Within 1 month
                </option>

                <option>
                  1 to 3 months
                </option>

                <option>
                  More than 3 months
                </option>

                <option>
                  Not sure yet
                </option>
              </select>
            </div>


            {/* =====================================
                MESSAGE
            ====================================== */}

            <div>
              <label htmlFor="rp-msg">
                Message
              </label>

              <textarea
                id="rp-msg"
                rows={3}
                placeholder="Tell us a little about the move"
                value={msg}
                onChange={(e) =>
                  setMsg(e.target.value)
                }
              />
            </div>

          </div>


          {/* =======================================
              ERROR
          ======================================== */}

          {err && (
            <p
              className={styles.err}
              role="alert"
            >
              {err}
            </p>
          )}


          {/* =======================================
              SUBMIT BUTTON
          ======================================== */}

          <div className={styles.formActions}>

            <button
              className={`${styles.btn} ${styles.btnSun}`}
              type="submit"
              disabled={submitting}
            >
              <Icon name="wa" />

              {submitting
                ? "Sending..."
                : "Send Enquiry"}
            </button>

          </div>


          {/* =======================================
              PRIVACY NOTE
          ======================================== */}

          <p className={styles.fine}>
            Your enquiry is sent securely to the
            MovingBay team. We will use your information
            only to respond to your relocation enquiry.
            By contacting us you agree to our{" "}
            <a href="/privacy-policy">
              Privacy Policy
            </a>
            .
          </p>

        </form>

      </div>
    </section>
  );
}