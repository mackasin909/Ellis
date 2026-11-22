"use client";

import { useId, useState } from "react";
import styles from "./LeadForm.module.scss";

const fields = [
  { name: "name", label: "Full name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
  { name: "address", label: "Property address", type: "text", autoComplete: "street-address" },
];

function validate(data) {
  const errors = {};
  if (!data.name.trim()) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
    errors.email = "Please enter a valid email.";
  if (data.phone.replace(/\D/g, "").length < 7) errors.phone = "Please enter a valid phone number.";
  if (!data.address.trim()) errors.address = "Please enter the property address.";
  if (!data.consent) errors.consent = "Please confirm you agree to be contacted.";
  return errors;
}

export default function LeadForm({ id, title = "Get my free estimate", subtitle }) {
  const uid = useId();
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      name: form.get("name") ?? "",
      email: form.get("email") ?? "",
      phone: form.get("phone") ?? "",
      address: form.get("address") ?? "",
      consent: form.get("consent") === "on",
    };
    const next = validate(data);
    setErrors(next);
    const firstInvalid = Object.keys(next)[0];
    if (firstInvalid) {
      e.currentTarget.elements[firstInvalid]?.focus();
      return;
    }
    // Концепт: отправки на сервер нет, просто показываем подтверждение
    setSent(true);
  }

  if (sent) {
    return (
      <div id={id} className={styles.card} role="status">
        <h2 className={styles.title}>Thank you!</h2>
        <p className={styles.subtitle}>
          Your request is in. A local agent will send your estimate within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form id={id} className={styles.card} onSubmit={handleSubmit} noValidate aria-labelledby={`${uid}-title`}>
      <h2 id={`${uid}-title`} className={styles.title}>
        {title}
      </h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

      <div className={styles.fields}>
        {fields.map((f) => {
          const err = errors[f.name];
          return (
            <div key={f.name} className={styles.field}>
              <label htmlFor={`${uid}-${f.name}`} className={styles.label}>
                {f.label}
              </label>
              <input
                id={`${uid}-${f.name}`}
                name={f.name}
                type={f.type}
                autoComplete={f.autoComplete}
                className={styles.input}
                aria-invalid={err ? true : undefined}
                aria-describedby={err ? `${uid}-${f.name}-err` : undefined}
              />
              {err && (
                <p id={`${uid}-${f.name}-err`} className={styles.error}>
                  {err}
                </p>
              )}
            </div>
          );
        })}

        <div>
          <label className={styles.consent}>
            <input
              type="checkbox"
              name="consent"
              className={styles.checkbox}
              aria-invalid={errors.consent ? true : undefined}
              aria-describedby={errors.consent ? `${uid}-consent-err` : undefined}
            />
            <span>
              I agree to be contacted about my home value. [Consent wording to be provided by the
              client&apos;s brokerage.]
            </span>
          </label>
          {errors.consent && (
            <p id={`${uid}-consent-err`} className={styles.error}>
              {errors.consent}
            </p>
          )}
        </div>
      </div>

      <button type="submit" className={styles.submit}>
        Get my free estimate
      </button>
      <p className={styles.note}>No spam. Your details are only used to prepare your estimate.</p>
    </form>
  );
}
