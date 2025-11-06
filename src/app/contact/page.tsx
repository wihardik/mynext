"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(form.email)) e.email = "Please provide a valid email";
    }
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    const eObj = validate();
    setErrors(eObj);
    if (Object.keys(eObj).length > 0) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Thanks — we received your message.");
        setForm({ name: "", company: "", email: "", message: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus(data?.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="text-2xl font-bold">Contact</h1>
      <p className="mt-2 text-zinc-700">Have questions or want to get started? Send us a message.</p>

      <form className="mt-6 grid gap-4" onSubmit={handleSubmit} noValidate>
        <div>
          <label className="block text-sm font-medium">Name *</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`mt-1 block w-full rounded-md border px-3 py-2 ${errors.name ? 'border-red-500' : 'border-zinc-200'}`}
          />
          {errors.name && <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Company</label>
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-zinc-200 px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email *</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`mt-1 block w-full rounded-md border px-3 py-2 ${errors.email ? 'border-red-500' : 'border-zinc-200'}`}
          />
          {errors.email && <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Message *</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={6}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`mt-1 block w-full rounded-md border px-3 py-2 ${errors.message ? 'border-red-500' : 'border-zinc-200'}`}
          />
          {errors.message && <p id="message-error" className="mt-1 text-sm text-red-600">{errors.message}</p>}
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 rounded-full bg-black text-white disabled:opacity-60"
            disabled={submitting}
            aria-disabled={submitting}
          >
            {submitting ? "Sending…" : "Send message"}
          </button>
          {status && <p className="text-sm text-zinc-700">{status}</p>}
        </div>
      </form>
    </div>
  );
}
