"use client";
import { useState } from "react";

export default function Contact() {
  const [fullName, setFullName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleSubmit = async () => {
    setSubmitting(true);
    const data = { fullName, email, message };

    try {
      const response = await fetch("http://localhost:8080/api/message", {
        method: "post",
        body: JSON.stringify(data),
      });
      const responseData = await response.json();

      console.log(responseData);

      alert("Your message has been sent!");
    } catch (error) {
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="text-center p-6">
        <article className="mb-8 text-sm space-y-4">
          <h2 className="text-2xl font-extrabold">Contact Me</h2>

          <p>
            Email:{" "}
            <a href="mailto:demojevu@gmail.com" className="underline">
              demojevu@gmail.com
            </a>
          </p>

          <p>
            Check out my Github @
            <a
              href="https://github.com/tall-dark-techguy"
              className="underline"
              target="_blank"
            >
              tall-dark-techguy
            </a>
          </p>
        </article>

        <div className="flex flex-col gap-y-4 max-w-xl mx-auto">
          <input
            type="text"
            value={fullName || ""}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Your full name"
            className="p-2 border rounded bg-neutral-200 text-sm"
            required
          />
          <input
            type="email"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="p-2 border rounded bg-neutral-200 text-sm"
            required
          />
          <textarea
            value={message || ""}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="p-2 border rounded bg-neutral-200 text-sm h-32"
            required
          ></textarea>

          <button
            onClick={handleSubmit}
            className="px-6 py-3 text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-indigo-600 to-pink-600 rounded-lg hover:from-pink-600 hover:to-indigo-600 transition disabled:from-indigo-400 disabled:to-pink-400"
            disabled={submitting}
          >
            {submitting ? "Please wait..." : "Send message"}
          </button>
        </div>
      </section>
    </>
  );
}
