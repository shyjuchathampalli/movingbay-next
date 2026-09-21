"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import styles from "@/app/global-mobility/global-mobility.module.css";

const faqs = [
  {
    question: "What are global mobility services?",
    answer:
      "Global mobility services help organisations and individuals manage the practical requirements involved in moving employees, people and families between cities and countries.",
  },
  {
    question: "What does employee relocation include?",
    answer:
      "Depending on the relocation requirement, employee relocation can involve planning, transportation, immigration coordination, temporary accommodation, home finding, destination services, family support and settling-in assistance.",
  },
  {
    question: "Does MovingBay support international relocation?",
    answer:
      "MovingBay supports domestic and international relocation requirements through its relocation services and network of specialist partners.",
  },
  {
    question: "Can MovingBay help companies relocate employees?",
    answer:
      "MovingBay's corporate mobility offering is designed to support organisations, HR teams and employees with coordinated relocation services.",
  },
  {
    question: "Can MovingBay help relocate an employee's family?",
    answer:
      "Family requirements can be incorporated into the relocation journey, including destination assistance, housing, schooling and other settling-in requirements where available.",
  },
  {
    question: "Can MovingBay relocate pets internationally?",
    answer:
      "Yes. MovingBay provides domestic and international pet relocation support, subject to destination requirements.",
  },
  {
    question: "How do I start a relocation?",
    answer:
      "Share your origin, destination, preferred timeline and relocation requirements with the MovingBay mobility team to identify the relevant services and next steps.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className={styles.faqSection}>

      <div className={styles.container}>

        <div className={styles.centerHeading}>

          <div className={styles.sectionEyebrow}>
            FREQUENTLY ASKED QUESTIONS
          </div>

          <h2 className={styles.sectionTitle}>
            Questions Before You Move?
          </h2>

        </div>

        <div className={styles.faqList}>

          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <div
                key={faq.question}
                className={styles.faqItem}
              >

                <button
                  className={styles.faqQuestion}
                  onClick={() =>
                    setActive(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                >

                  <span>{faq.question}</span>

                  {isOpen ? (
                    <Minus size={19} />
                  ) : (
                    <Plus size={19} />
                  )}

                </button>

                {isOpen && (
                  <div className={styles.faqAnswer}>
                    {faq.answer}
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}